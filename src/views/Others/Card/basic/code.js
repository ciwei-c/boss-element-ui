let code = `<template>
  <boss-card class="box-card">
    <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <boss-button style="float: right; padding: 3px 0" type="text">操作按钮</boss-button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
  </boss-card>
</template>
<script>
export default {
};
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
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