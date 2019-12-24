<template>
  <div class="boss-ui-demo__header">
    <div class="boss-ui-demo__header-logo">
      <div class="boss-ui-demo__header-title">BossUI Vue</div>
    </div>
    <div style="margin-right:20px;font-size:12px;">
      <router-link to="/test">开发调试</router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.boss-ui-demo__header {
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  position: relative;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
  display: flex;
  &-logo {
    display: flex;
    align-items: center;
    padding: 10px 50px;
  }
  &-title {
    font-weight: 600;
    color: #409eff;
    font-size: 24px;
  }
}
</style>