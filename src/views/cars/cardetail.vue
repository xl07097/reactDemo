<template>
    <div class="detail">
        {{id}}
        <router-link v-for="n of 6" :key="n" :to="'/cardetail/'+n" class="ro">{{n}}</router-link>
    </div>
</template>

<script>
import $fetch from "@/utils/fetch";

export default {
  name: "CarInfo",
  data() {
    return {
      // id: this.$route.params.id,
      carInfo: {}
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
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
    console.log(this.$route.params);
    this.getCarInfo();
    next();
  },
  created() {
    this.getCarInfo();
  }
};
</script>

<style lang="less" scoped>
.detail {
  font-size: 24px;
  .ro {
    display: inline-block;
    width: 30px;
    height: 20px;
    text-align: center;
  }
}
</style>


