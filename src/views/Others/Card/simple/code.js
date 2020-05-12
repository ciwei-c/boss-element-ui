let code = `<template>
  <boss-card class="box-card">
    <div v-for="o in 4" :key="o">{{'列表内容 ' + o }}</div>
  </boss-card>
</template>
<script>
export default {
};
</script>
<style>
  .box-card {
    width: 480px;
  }
</style>
`
export default {
  data(){
    return {
      code,
      codeDesc:"",
      anchor:{
        id:"simple",
        title:"简单卡片"
      }
    }
  }
}