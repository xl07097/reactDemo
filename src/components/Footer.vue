<template>
    <div id="footer">
       <Row>
        <i-col span="6"><router-link to="/" class="menu">首页</router-link></i-col>
        <i-col span="6"><router-link to="/about" class="menu">哈</router-link></i-col>
        <i-col span="6"><router-link to="/carList" class="menu">啊</router-link></i-col>
        <i-col span="6"><router-link to="/user" class="menu">我</router-link></i-col>
      </Row>
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
  // display: flex;
  height: 60px;
  line-height: 60px;
  align-items: stretch;
  background: #ccc;
  z-index: 100;
  .menu {
    display: block;
    // flex: 1;
    // line-height: 60px;
    font-size: 24px;
    text-decoration: none;
    color: #000;
    text-align: center;
    font-family: "微软雅黑";
    cursor: pointer;
  }
}
</style>


