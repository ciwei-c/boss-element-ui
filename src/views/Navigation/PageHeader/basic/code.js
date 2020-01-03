let code = `<template>
  <boss-page-header @back="goBack" content="详情页面"></boss-page-header>
</template>
<script>
export default {
  methods: {
    goBack() {
      console.log("go back");
    }
  }
};
</script>
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