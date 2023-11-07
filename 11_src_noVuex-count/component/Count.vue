<template>
    <div>
        <h3>当前求和为:{{ sum }}</h3>
        <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button @click="increase">+</button>
        <button @click="decrease">-</button>
        <button @click="increaseOdd">sum为奇数再加</button>
        <button @click="increaseWait">等一等再加</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            n:1,
            sum:0
        }
    },
    methods: {
        increase(){
            this.sum += this.n
        },
        decrease(){
            this.sum -= this.n
        },
        increaseOdd(){
            if(this.sum % 2)
                this.sum += this.n
        },
        increaseWait(){
            setTimeout(()=>{
                this.sum += this.n
            },800)
        }
    },
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