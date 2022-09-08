<template lang="pug">
header.weblog-header
  .weblog-nav
    .container
      .title
        .logo
          img(src='~/assets/images/logo.jpeg')
        .text Weblog
</template>
<style lang="less" scoped>
.weblog-nav {
  padding: 0 32px;
  border-bottom: 1px solid #ccc;
  .container {
    display: flex;
    height: 100%;
    align-items: center;
  }
}
</style>
