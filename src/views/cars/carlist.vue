<template>
    <div class="carlist">
        车辆列表
        <div class="lists" v-for="list of lists" :key="list.id">
            <div class="imgarea">
                <router-link :to="'/cardetail/'+list.id">
                    <img :src="list.url" :alt="list.title">
                </router-link>
            </div>
            <div class="intro">
                <h4><router-link :to="'/cardetail/'+list.id">{{list.title}}</router-link></h4>
                <p>{{list.introduction}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import $fetch from "@/utils/fetch";
import page from "@/mixins/page";

export default {
  name: "carList",
  mixins: [page],
  data() {
    return {
      lists: []
    };
  },
  methods: {
    getCarList() {
      $fetch.get("/cars/lists",{
        data:{
          name: 'json',
          age: 25,
          sex: 1,
          job: 'engine'
        }
      }).then(data => {
        window.console.log(data);
        if (data.code === 200) {
          this.lists = data.data;
        }
      });

      $fetch.post("/cars/lists",{
        name: 'json',
        age: 25,
        sex: 1,
        job: 'engine'
      }).then(data => {
        window.console.log(data);
        if (data.code === 200) {
          this.lists = data.data;
        }
      });
    }
  },
  created() {
    this.getCarList();
  }
};
</script>
<style lang="less" scoped>
.carlist{
    padding: 0 10px
}
.lists {
  display: flex;
  padding: 5px 0;
  border-bottom: 1px solid rgba(100, 100, 100, 0.6);
  .imgarea {
    width: 35%;
  }
  img {
    display: block;
    width: 100%;
  }
  .intro {
    flex: 1;
    text-align: left;
    padding: 0 10px;
    width: 60%;
    h4 {
      margin: 0;
      font-size: 20px;
    }
    a {
      text-decoration: none;
      color: #000;
    }
    p {
      margin: 6px 0 0 0;
      font-size: 16px;
    }
  }
}
</style>


