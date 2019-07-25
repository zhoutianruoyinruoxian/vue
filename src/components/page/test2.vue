<template>
  <div>{{title}}
    <button @click="click('aaa')">按钮</button>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: Number,
  },
  data: () => ({
    text: "333"
  }),
  methods:{
    click(title){
      this.$emit('change-title',title)
    }
  }
};
</script>
<style lang="less">
</style>


