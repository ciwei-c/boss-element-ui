<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="适用广泛的基础用法。"
    :codeDesc="codeDesc"
  >
    <boss-dropdown>
      <span class="boss-dropdown-link">
        下拉菜单
        <i class="boss-icon-arrow-down boss-icon--right"></i>
      </span>
      <boss-dropdown-menu slot="dropdown">
        <boss-dropdown-item>黄金糕</boss-dropdown-item>
        <boss-dropdown-item>狮子头</boss-dropdown-item>
        <boss-dropdown-item>螺蛳粉</boss-dropdown-item>
        <boss-dropdown-item disabled>双皮奶</boss-dropdown-item>
        <boss-dropdown-item divided>蚵仔煎</boss-dropdown-item>
      </boss-dropdown-menu>
    </boss-dropdown>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>
<style>
.boss-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.boss-icon-arrow-down {
  font-size: 12px;
}
</style>