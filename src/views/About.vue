<template>
  <div class="about">
    <label>
      <span>上传</span>
      <input ref="file" type="file" multiple name="file" id="file" @change="change">
    </label>
    <button class="button button1">确定</button>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    change() {
      console.dir(this.$refs.file.files);
      var file = this.$refs.file.files;
      if (!file.length) {
        return;
      }
      var form = new FormData();
      for(let i = 0;i < file.length;i++){
        form.append("file", file[i]);
      }

      // this.$refs.file.value = ""; //虽然file的value不能设为有字符的值，但是可以设置为空值
      fetch("http://192.168.1.49:9100/api/upload/uploadfile", {
        method: "post",
        body:form
      }).then(data => {
        console.log(data);
      });
    }
  }
};
</script>

<style lang="less" scoped>
.about {
  text-align: center;
}
label {
  position: relative;
  display: inline-block;
  padding: 14px 32px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  background-color: #4caf50;
  color: white;
}
input {
  position: absolute;
  left: 0;
  top: 0;
  clip: rect(1px, 1px, 1px, 1px);
  opacity: 0;
}
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>

