<template lang="pug">
header.w-header
  .top-nav
    .left-item
      .logo
        img(src='~/assets/images/logo.jpeg' alt="logo")
      .title Aaron's Space
    .right-item
      .right-item__menu
        .menu__item Tags
        .menu__item About
</template>
<style lang="less" scoped>
.top-nav {
  padding: 16px;
  display: flex;
  background-color: @primary-color;
  color: @font-white;
  align-items: center;
  justify-content: space-between;
  .left-item {
    display: flex;
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
  .right-item__menu {
    display: flex;
    .menu__item {
      padding: 0 10px;
    }
  }
}
</style>
