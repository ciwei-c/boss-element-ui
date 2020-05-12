let code = `<template>
  <boss-card class="box-card">
    <div slot="header" class="card_header">
      <span style="flex:1">卡片名称</span>
      <boss-button type="text">操作按钮</boss-button>
    </div>
    <div v-for="o in 4" :key="o">{{'列表内容 ' + o }}</div>
  </boss-card>
</template>
<style>
  .card_header {
    display: flex;
    align-items: center;
  }
  .box-card {
    width: 480px;
  }
</style>
`
export default {
  data(){
    return {
      code,
      codeDesc:"Card 组件包括header和body部分，header部分需要有显式具名 slot 分发，同时也是可选的。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}