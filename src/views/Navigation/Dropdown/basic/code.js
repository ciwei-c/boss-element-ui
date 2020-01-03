let code = `<template>
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
</template>
<script>
export default {
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
`
export default {
  data(){
    return {
      code,
      codeDesc:"通过组件 slot 来设置下拉触发的元素以及需要通过具名 slot 为 dropdown 来设置下拉菜单。默认情况下，下拉按钮只要 hover 即可，无需点击也会显示下拉菜单。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}