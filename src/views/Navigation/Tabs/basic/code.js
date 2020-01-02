let code = `<template>
  <boss-tabs v-model="activeName">
    <boss-tab-pane label="用户管理" name="first">用户管理</boss-tab-pane>
    <boss-tab-pane label="配置管理" name="second">配置管理</boss-tab-pane>
    <boss-tab-pane label="角色管理" name="third">角色管理</boss-tab-pane>
    <boss-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</boss-tab-pane>
  </boss-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeName: "second"
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 value 属性来指定当前选中的标签页。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}