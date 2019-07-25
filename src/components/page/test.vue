<template>
  <div>
    <div>{{text}}</div>
    <test-a @change-title="changeTitle" :title="text">
      <test-b class="aaa" :title="text"></test-b>
    </test-a>
  </div>
</template>
<script>
import testA from "./test2";
import testB from "./test3";
export default {
  components: {
    testA,
    testB
  },
  data: () => ({
    text: 222
  }),
  methods:{
    changeTitle(title){
      this.text = title;
    }
  }
};
</script>
<style lang="less">
</style>


