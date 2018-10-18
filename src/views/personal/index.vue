<template>
    <div class="person">
        个人中心
        <button type="button" @click="tan">弹出</button>
    </div>
</template>
<script>
import $fetch from "@/utils/fetch";

export default {
  name: "person",
  data() {
    return {};
  },
  methods: {
    getInfo() {
      $fetch.post("/cars/lists",{
        id:1
      }).then((data) => {
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


