<template>
    <div id="footer">
      <router-link to="/" class="menu">首页</router-link>
      <router-link to="/about" class="menu">哈</router-link>
      <router-link to="/carList" class="menu">啊</router-link>
      <router-link to="/user" class="menu">我</router-link>
    </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style lang="less" scoped>
#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items:stretch;
  background: #ccc;
  .menu {
    display: table;
    flex: 1;
    line-height: 60px;
    font-size: 24px;
    text-decoration: none;
    color: #000;
    text-align: center;
    font-family: '微软雅黑';
    cursor: pointer;
  }
}
</style>


