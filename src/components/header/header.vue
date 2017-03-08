<template lang="html">
  <div>
    <div class="header">
      我是标题
      <div class="headerWrapper">
        我是内部的组件
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name: 'header'
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .header {
    color: red;
    .headerWrapper {
      color: blue;
      font-size: 24px;
    }

  }
</style>
