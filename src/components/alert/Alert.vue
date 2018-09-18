<template>
    <div ref="alert" id="alert" v-show="flag">
        <div class="wrapper">
            <header>
                弹窗
            </header>
            <footer>
                <button type="button" class="close" @click="close">关闭</button>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
  name: "Alert",
  data() {
    return {
      flag: true
    };
  },
  methods: {
    close() {
      this.flag = false;
    }
  }
};
</script>
<style lang="less" scoped>
#alert {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  .wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -65px;
    margin-top: -100px;
    width: 130px;
    height: 130px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(100, 100, 100, 0.6);
    footer{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding-bottom: 14px;
      text-align: center;
    }
    button {
      display: inline-block;
      padding: 4px 10px;
      font-size: 12px;
      background-color: #89af4c;
      color: white;
      text-align: center;
      border: none;
      outline: none;
      cursor: pointer;
      &:hover{
          opacity: 0.8;
      }
    }
  }
}
</style>


