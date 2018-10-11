<template>
  <div id="app">
    <img src="./assets/logo.png">
    <header>
      <!-- 静态路由 -->
      <router-link to="/home">home</router-link>
      <router-link to="/about">about</router-link>
      <!-- 动态路由 -->
      <router-link to="/user/123">User123</router-link>
      <router-link to="/user/456">User456</router-link>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
