<template>
  <div id="app">
    <header id="header">cars</header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
      <footer id="footer">
        <div class="menu"></div>
        <div class="menu"></div>
        <div class="menu"></div>
        <div class="menu"></div>
      </footer>
  </div>
</template>

<style>
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
}
</style>
