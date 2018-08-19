<template>
  <div id="app">
    <Header></Header>
    <router-view/>

    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less">
*{
  box-sizing: border-box;
}
html,body{
  margin: 0;
  padding: 0;
}

#app {
  padding: 60px 0;
  color: #2c3e50; 
}

</style>
