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
        <h4>下方person组件的总人数是：{{ personList.length }}</h4>
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
        // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
        ...mapMutations('countAbout',{increase:'JIA',decrease:'JIAN'}),
        // ------------------------------------
        // 借助mapActions生成对应的方法，方法中会调用dispatch去联系Actions（对象写法）
        ...mapActions('countAbout',{increaseOdd:'jiaOdd',increaseWait:'jiaWait'}),
    },
    computed:{
        // 借助mapState生成计算属性，从state中读取数据
        ...mapState('countAbout',['sum','school','subject']),    // 数组写法
        ...mapState('personAbout',['personList']),
        // -----------------------------
        // 借助mapState生成计算属性，从getters中读取数据
        ...mapGetters('countAbout',['bigSum']),  // 数组写法
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