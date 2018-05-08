<template>
  <div class="footer">
    <input type="file" accept="image/*;capture=camera" @change='upload' id="input">
    <a href="javascript:;" @click="submit">上传</a>
  </div>
</template>
<script>
  
  export default {
    data(){
      return {
        photo:'',
      }
    },
    methods: {
      submit() {
        this.$ajax.post('http://47.98.117.109/server/photo', { photo:this.photo })
          .then((data) => {
            console.log(data)
          })
          .catch((err) => {
            console.log(err)
          });
      },
      upload(e) {
        const input = e.target;
        const reader = new FileReader();  
        reader.readAsDataURL(input.files[0])  
        reader.onload = (evt) =>{  
          const base64 = reader.result;

          // 重点来了 ajax在传输过程中 加号会变成空格 base64里是有加号的我不幸掉进了这个坑……  
          // 把+替换成编码 %2B是加号的编码  
          const newBase64 = base64.replace(/\+/g, "%2B");
          // 然后就可以按照上面那个方法发给服务器端了
          this.photo = newBase64;
        }
      },
    }
  }
</script>
<style lang='less' scoped>
  

</style>