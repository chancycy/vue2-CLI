<template>
  <div>
    <ul>
        <li>消息编号：{{$route.query.id}}</li>
        <li>消息标题:{{$route.query.title}}</li>
        <hr>
        <li>params:消息编号：{{$route.params.id}}</li>
        <li>消息标题:{{$route.params.title}}</li>
        <hr>
        <!-- 方式1 看看插值语法能不能呈现props
        <li>a:{{ a }}</li>
        <li>b:{{ b }}</li> -->
        <!-- 方式2：props为布尔值时，传递params参数但无法传递query参数
        <li>params参数通过props传递————消息编号：{{id}}</li>
        <li>消息标题:{{title}}</li> -->
        <!-- 方式3：props为函数时 -->
        <li>query参数通过props传递————消息编号：{{id}}</li>
        <li>消息标题:{{title}}</li>

    </ul>
  </div>
</template>

<script>
export default {
    name:'Detail',
    // index里传给detail，所以在detail里接收
    // props:['a','b'],          // 方式1
    // props:['id','title']      // 方式2：是params参数的名字
    props:['id','title']         // 方式3
}
</script>

<style>

</style>