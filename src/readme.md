# 配置代理服务器

假设存在两个服务器，都是get请求
服务器1：student学生信息 5000端口
服务器2：car汽车信息 5001端口
本机：8080端口
(由于本机未配备服务器1和2，所以代码跑不通)

常用的发送ajax请求的方式：
1. xhr --``new XMLHttpRequest()``（鼻祖，真正开发不常用）
   - API:``xhr.open()``配置请求信息；``xhr.send()``发送请求信息。
2. jQuery --``$.get``、``$.post``
3. axios --promise风格，支持请求拦截器和响应拦截器，体积是jQuery的1/4（jQuery和axios都是对xhr的封装）
4. fetch --也是promise风格；和xhr平级，和xhr一样是内置的对象。
   - 问题1：返回的数据包了两层promise(即：得两次promise.then才能拿到数据)
   - 问题2：兼容性问题（ie不支持）

直接在``getStudents()``这样写会：出现跨域问题(CORS)
```
    axios.get('http://localhost:5000/students').then(
        response=>{
        console.log('请求成功了 :>> ', response.data);
        },
        error=>{
        console.log('请求失败了 :>> ', error.message);
        }
    )
```
跨域：浏览器把请求发到了服务器，服务器也收到了本次请求，服务器也把数据交给了浏览器，但浏览器把数据握在手里，没有交给我们

跨域问题的解决：
1. cors --（无需前端操作）后端配置一些响应头--真正意义的解决跨域
2. jsonp --借助 script标签的src属性在引入外部资源时 不受同源策略限制；但只能解决get请求跨域。
3. 代理服务器 --开发常用，代理服务器和浏览器所处位置一致（即也是8080）；服务器和服务器之间不用ajax，直接http请求，不存在跨域问题。

开启代理服务器方式：
1. nginx --负载均衡...
2. vue-cli --本节所学，使用vue-cli配置代理服务器

通过配置vue.config.js,可以配置一个代理服务器，但当请求的资源8080本身就有，就不会将请求转给5000
```
    devServer: {
        proxy: "http://localhost:5000"
    }
```
即：
1. 优点：配置简单，请求资源时直接发给前端（8080）即可
2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理
3. 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，才会将请求会转发给服务器 （优先匹配前端资源）
---
第二种配置方法：
1. 优点：可以配置多个代理，且可以灵活的控制请求是否走代理
2. 缺点：配置略微繁琐，请求资源时必须加前缀
```
  devServer: {
    proxy: {
      '/api': {  // 请求前缀，控制是否走代理;前缀是紧跟端口号的 
        target: 'http://localhost:5000',  // 如果有请求前缀，那么请求的地址是target的地址
        pathRewrite: { '^/api': '' }, // 将/api换成空：让代理服务器拿到地址后，不带/api这部分
        ws: true,  // 用于支持webSocket
        changeOrigin: true // 默认true，决定服务器收到的端口号是多少；用于控制请求头中的host值
        // 为true时，代理服务器告诉服务器的端口号为5000，和服务器一致（说谎了，实际8080）
      },
      'api222': {
        target: 'http://localhost:5001',
        pathRewrite: { '/api222': '' }
      }
    }
  }
```
