<template>
    <div id="header">
        <h4>cars</h4>
        <i class="fa fa-bars" @click="drawer"></i>
        <Drawer title="设置" placement="left" :closable="false" v-model="setting">
            <div class="avatar">
                <!-- <Avatar class="avatar"  size="large" /> -->
            </div>
            <ul class="tab">
                <li><i class="fa fa-cog fa-2x"></i>设置</li>
                <li></li>
                <li></li>
            </ul>
        </Drawer>
    </div>
</template>
<script>
export default {
    name:"Header",
    data(){
        return {
            setting: false
        }
    },
    methods: {
        drawer(){
            this.setting = true;
        }
    }
}
</script>
<style lang="less" scoped>
#header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 54px;
  padding-left: 15px;
  background: #eee;
  line-height: 54px;
  font-size: 24px;
  text-align: left;
  h4{
      margin: 0;
      padding: 0;
  }
  i{
      position: absolute;
      display: block;
      padding: 2px;
      right: 10px;
      top: 13px;
  }
}
</style>

