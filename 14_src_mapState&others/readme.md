# mapState,mapGetters,mapMutations,mapActions
---
- vue模板里调用方法时，没有写fn的``()``但并不是没有传参，传的参是event
---
mapState（mapGetters同理）：
  - 希望在模板中将``{{$store.state.abc}}``-->``{{abc}}``
  - 借助mapState生成计算属性，从state中读取数据
  1. 方法1：在该组件里使用computed自己写方法 --> 可以，但这也是重复写，很多余。
  2. 真正的解决方法：在computed里使用mapState，写在组件中。（用于批量生成）
    - mapState是个辅助函数，它的返回值是个对象，里面每一个都是函数。（所以平时我们用的都是它的简写形式）
      - 可以定义一个变量接收查看，即``const x = mapState({sum:'sum',xuexiao:'school'})``
---
  - 第一步：在组件中引入Vuex；（因为mapState是属于Vuex）
  - 第二步：使用。语法1对象写法：``...mapState({he:'sum',xuexiao:'school',xueke:'subject'})``
    - 注意：是``he:'sum'``而不是``he:sum``，``he``看似的变量，实际是对象的简写``'he'``，而sum如果没有引号就是变量，然而实际sum不是变量，是字符串。所以当两个名字一样时``sum:'sum'``不能简写
    - 解释：mapState的返回值是个对象，对象当然是不能直接写在computed里的（computed也是一个对象，当然不能在对象里直接写``{对象}``），所以我们使用扩展运算符``...``，
      - ``let obj = {a:100, {} , b:['str','str2']}``-->会报错
      - ``let obj = {x:100, y:200},let obj2 = {a:1, ...obj, b:2}``-->输出obj2``{a:1,x:100,y:200,b:2}``
      - 剩余参数、解构赋值、展开运算符是不一样的（具体自查MDN）
    - ``he``是计算属性的名字，``sum``是告知去state找sum。
    - 注意：**不能**将``...mapState({sum:'sum',school:'school',subject:'subject'}),``简写成``...mapState({sum,school,subject}),``。
      - 原因：这样简写最后``sum``是被转为了``sum:sum``,对于value，找不到sum变量。
        - ``let a=100; let obj = {a: a};``等价与``let a=100; let obj = {a}``
        - ``let a=100; let obj = {a: 'a'}``，这时不能简写，a不是变量100而是字符串。从js上语法没有简写方式。
  - 第二步：使用。语法2数组写法：``...mapState(['sum','school','subject'])``
    - 这时生成计算属性的名字叫sum，去state里找到也是sum（一个sum，两种用途）
---
mapMutations,mapActions:
  **``dispatch``和actions对话，``commit``和mutations对话。**
  - 用法1：``...mapMutations({increase:'JIA',decrease:'JIAN'}),``.
    - 注意：由于vue模板里调用方法时，没有写fn的``()``时默认传的参是event
      - 所以当我们有自己的值需要传参时，需要在模板里亲自写调用的参数是谁。
  - 当然还有另一种方法来实现（不推荐）：在组件的methods里写一个函数调用``...mapMutations``的方法名，顺便传参过去。即：``...mapMutations({jiaAlias:'JIA',...}),``,``increase(){this.jiaAlias(this.n)}``。这样就可以在模板里不用传参了。
  - 用法2：``...mapMutations(['JIA','JIAN']),``
    - 数组写法。这个时候模板里就不能用increase和decrease了，得用JIA(n)和JIAN

  - mapActions和mapMutations用法一致。
---