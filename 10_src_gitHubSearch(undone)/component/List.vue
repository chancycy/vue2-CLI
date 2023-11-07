<template>
<div class="row">
    <div class="card" v-for="user in users" :key="user.login">
        <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" style="width:100px">
        </a>
        <p class="card-text">{{user.login}}</p>
    </div>
</div>
</template>

<script>
export default {
    name:'List',
    data() {
        return {
            users:[]
        }
    },
    mounted() {
        this.$bus.$on('getUsers',users => {
            console.log(' :>> [List component] recive data');
            console.log('users.items :>> ', users.items);
            this.users = users.items
        })
    },
}
</script>

<style>
    .album{
        min-height: 50rem;
        padding-top: 3rem;
        padding-bottom: 3rem;
        background-color: #f7f7f7;
    }
    .card{
        float: left;
        width: 33.333%;
        padding: .75rem;
        border: 1px solid #efefef;
        text-align: center;
    }
    .card >img{
        margin-bottom: .75rem;
        border-radius: 100px;
    }
    .card-text{
        font-size: 85%;
    }
</style>