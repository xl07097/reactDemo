<template>
    <div class="detail">
        {{id}}
        <router-link to="/cardetail/2" class="ro">2</router-link>
        <router-link to="/cardetail/3" class="ro">3</router-link>
        <router-link to="/cardetail/4" class="ro">4</router-link>
        <router-link to="/cardetail/5" class="ro">5</router-link>
        <router-link to="/cardetail/6" class="ro">6</router-link>
    </div>
</template>

<script>
import $fetch from "@/utils/fetch";

export default {
  name: "CarInfo",
  data() {
    return {
      id: this.$route.params.id,
      carInfo: {}
    };
  },
  methods: {
    getCarInfo() {
      $fetch
        .get("/cars/getInfoById?id=" + this.id)
        .then(data => {
          window.console.log(data);
        })
        .catch(err => {
          window.console.log(err);
        });
        
        $fetch
        .get("/cars/" + this.id)
        .then(data => {
          window.console.log(data);
        })
        .catch(err => {
          window.console.log(err);
        });
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.getCarInfo();
    next();
  },
  created() {
    this.getCarInfo();
  }
};
</script>

<style lang="less" scoped>
.ro {
  display: inline-block;
  width: 30px;
  height: 20px;
  text-align: center;
}
</style>


