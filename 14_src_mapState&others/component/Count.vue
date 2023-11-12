<template>
    <div>
        <!-- 模板里可以看见vc上的所有东西，不需要this -->
        <h3>当前求和为:{{ sum }}</h3>
        <h4>当前求和结果的十倍为：{{ bigSum }}</h4>
        <h4>I'm in {{ school }},learn {{ subject }}</h4>
        <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button @click="increase(n)">+</button>
        <button @click="decrease(n)">-</button>
        <button @click="increaseOdd(n)">sum为奇数再加</button>
        <button @click="increaseWait(n)">等一等再加</button>
    </div>
</template>

<script>
import { mapState, mapGetters,mapActions,mapMutations } from 'vuex'
export default {
    data() {
        return {
            n: 1,
        }
    },
    methods: {
        /* increase(){
            // this.$store.dispatch('jia',this.n)
            this.$store.commit('JIA',this.n)    // 直接和mutations对话
        },
        decrease(){
            // this.$store.dispatch('jian',this.n)
            this.$store.commit('JIAN',this.n)
        }, */
        // ------------------------------------
        // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
        ...mapMutations({increase:'JIA',decrease:'JIAN'}),
        // ...mapMutations(['JIA','JIAN']),    // 这个时候模板里就不能用increase和decrease了，得用JIA和JIAN
        // ------------------------------------
        /* increaseOdd(){
            this.$store.dispatch('jiaOdd',this.n)
        },
        increaseWait(){
            this.$store.dispatch('jiaWait',this.n)
        } */
        // ------------------------------------
        // 借助mapActions生成对应的方法，方法中会调用dispatch去联系Actions（对象写法）
        ...mapActions({increaseOdd:'jiaOdd',increaseWait:'jiaWait'}),
        ...mapActions(['jiaOdd','jiaWait']),    // 这个时候模板里就不能用increaseOdd和increaseWait
    },
    computed:{
        // 借助mapState生成计算属性，从state中读取数据
        // ...mapState({sum:'sum',school:'school',subject:'subject'}), //对象写法
        ...mapState(['sum','school','subject']),    // 数组写法

        // -----------------------------
        // 借助mapState生成计算属性，从getters中读取数据
        // ...mapGetters({bigSum:'bigSum'}),   // 对象写法
        ...mapGetters(['bigSum']),  // 数组写法
    }
}
</script>

<style>
    div{
        margin: 20px 20px;   
    }
    button{
		margin-left: 5px;
	}

</style>