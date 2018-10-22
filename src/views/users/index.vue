<template>
    <div class="person">
      <form>
        <div>
          <input type="text" v-model="req.username">
        </div>
        <div>
          <input type="password" v-model="req.password">
        </div>
        <button type="button" @click="login">登录</button>
      </form>
      <button type="button" @click="tan">弹出</button>
    </div>
</template>
<script>
import $fetch from "@/utils/fetch";

export default {
  name: "person",
  data() {
    return {
      req: {
        username: "xueliang",
        password: "123456"
      },
      user: {}
    };
  },
  methods: {
    login() {
      $fetch
        .get("users/login", {
          params: this.req
        })
        .then(data => {
          window.console.log(data);
        });
    },
    getInfo() {},
    tan() {
      this.$alert({
        title: "haha",
        info: "gaga"
      });
    }
  },
  created() {
    this.getInfo();
  }
};
</script>

<style scoped lang="less">
</style>


