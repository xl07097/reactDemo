<template>
    <div class="person">
        个人中心
        <button type="button" @click="tan">弹出</button>
    </div>
</template>
<script>
import axios from "axios";
export default {
  name: "person",
  data() {
    return {};
  },
  methods: {
    getInfo() {
      axios.get("http://192.168.1.49:3000/api/user/info").then(function(data) {
        window.console.log(data)
      });
    },
    tan(){
      this.$alert({
        title:"haha",
        info:"gaga"
      })
    }
  },
  created() {
    this.getInfo();
  }
};
</script>

<style scoped lang="less">
  
</style>


