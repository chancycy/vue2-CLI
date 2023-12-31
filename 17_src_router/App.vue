<template>
  <div>
    <div class="row">
        <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-2">
        <div class="list-group">
          <!-- 
          <a class="list-group-item" href="./About.html">About</a>
          <a class="list-group-item" href="./Home.html">Home</a>
          -->
          <router-link class="list-group-item" to="/about" active-class="active">page About</router-link>
          <router-link class="list-group-item" to="/home" active-class="active">page Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner';
  export default {
    name: "App",
    components:{Banner}
  };
</script>