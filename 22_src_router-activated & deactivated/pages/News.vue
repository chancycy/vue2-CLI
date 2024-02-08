<template>
  <div>
    <ul>
      <li :style="{opacity}">文本内容</li>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'News',
    data() {
      return {
        opacity: 1
      }
    },
    activated() {
      console.log('news组件被激活了 :>> ', );
      this.timer = setInterval(() => {
        console.log('@ :>> ', );  // 使用beforeDestroy清空定时器没有效果，“@”会一直输出
        this.opacity -= 0.01
        if (this.opacity <= 0) {
          this.opacity = 1
        }
      },16)
    },
    deactivated() {
      console.log('news组件失活了 :>> ', );
      clearInterval(this.timer) // 清空定时器
    },
    /* mounted(){
      console.log('mounted :>> ', );
      this.timer = setInterval(() => {
        console.log('@ :>> ', );  // 使用beforeDestroy清空定时器没有效果，“@”会一直输出
        this.opacity -= 0.01
        if (this.opacity <= 0) {
          this.opacity = 1
        }
      },16)
    },
    beforeDestroy() {
      console.log('news组件 will go die :>> ', );
      clearInterval(this.timer) // 清空定时器
    }, */
    methods: {
      
    },
}
</script>

<style>

</style>