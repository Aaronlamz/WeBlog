<template lang="pug">
header.w-header
  .top-nav
    .logo
      img(src='~/assets/images/logo.jpeg' alt="logo")
    .title Aaron Lam's Space
</template>
<style lang="less" scoped>
.top-nav {
  padding: 16px;
  display: flex;
  background-color: @primary-color;
  color: @font-white;
  align-items: center;
  .logo {
    border-radius: 50%;
    overflow: hidden;
    img {
      display: block;
      height: 36px;
    }
  }
  .title {
    padding-left: 16px;
    font-weight: 500;
  }
}
</style>
