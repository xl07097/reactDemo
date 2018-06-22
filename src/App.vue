<template>
  <div id="app">
    <header id="header">cars</header>
    <router-view/>

    <footer id="footer">
      <router-link to="/" class="menu">首页</router-link>
      <router-link to="/about" class="menu">哈</router-link>
      <router-link to="/carList" class="menu">啊</router-link>
      <router-link to="/user" class="menu">我</router-link>
    </footer>
  </div>
</template>

<style lang="less">
body{
  margin: 0;
}
#header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 54px;
  padding-left: 15px;
  background: #eee;
  line-height: 54px;
  font-size: 24px;
  text-align: left
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#footer{
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 60px;
  background: #ccc;
  .menu{
    width: 25%;
    line-height: 60px;
    font-size: 20px;
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }
}
</style>
