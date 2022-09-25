<template lang="pug">
.main
  .post-container
    .post-item
      .post__title 标题
      .post__summary 花了一天时间读了稻盛和夫的新书《心》， 读完整本书给我的感觉有三个人的影子在里面： 有道德经讲的 “无我利他、为而不争”， 也有王阳明的知行合一(良知和 ...
      .post__more-info
        .post__categary Vue3
        .post__date 2022-09-25
</template>
<script setup>
definePageMeta({
  layout: 'default',
});
</script>

<style lang="less" scoped>
.main {
  background-color: @front-bg-color;
  padding: 20px;
}
.post-container {
  min-height: 500px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
