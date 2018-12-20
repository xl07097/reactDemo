<template>
    <div class="users">
      <div class="avatar">
        <Avatar class="avatar" :src="user.avatar" size="large" />
      </div>

      <Form ref="form" :model="req" :rules="rule">
        <FormItem prop="name">
          <i-input v-model="req.name">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </i-input>
        </FormItem>
        <FormItem prop="password">
          <i-input type="password" v-model="req.password">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </i-input>
        </FormItem>
         <FormItem>
            <Button type="success" @click="login" long>登录</Button>
        </FormItem>
      </Form>
    </div>
</template>
<script>
import $fetch from "@/utils/fetch";
import {userLogin} from '@/api/user';

export default {
  name: "person",
  data() {
    return {
      req: {
        name: "xueliang",
        password: "123456"
      },
      rule: {
        name: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      user: {},
      
    };
  },
  methods: {
    login() {
      $fetch
        .post("users/login", {
          data: this.req
        })
        .then(data => {
          if (data.code === 200) {
            this.$Message.success("登录成功");
            this.getInfo();
          }
        });
    },
    getInfo() {
      $fetch.post("users/info").then(data => {
        if (data.code === 200) {
          this.user = data.data;
          sessionStorage.setItem("isLogin", true);
        }
      });
    }
  },
  created() {}
};
</script>

<style scoped lang="less">
.users {
  padding: 0 15px;
  .avatar {
    text-align: center;
    margin-bottom: 30px;
  }
}
</style>


