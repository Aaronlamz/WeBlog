<template lang="pug">
header.w-header
  .top-nav
    .logo
      img(src='~/assets/images/logo.jpeg')
    .text Weblog
</template>
<style lang="less" scoped>
.top-nav {
  display: flex;
  align-items: center;
  .logo {
    img {
      display: block;
      height: 36px;
    }
  }
}
</style>
