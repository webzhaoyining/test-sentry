<template>
  <div id="app">
    <img alt="Vue logo" @click="sendError" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-link to="/">主页</router-link>
    <router-link to="/home">主页</router-link>
    <router-link to="/profile">管理页</router-link>

    <router-view />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  // components: {
  //   HelloWorld
  // },
  methods: {
    sendError() {
      console.log(1);
      throw "Too big test new"; 
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
