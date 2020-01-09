let code = `<template>
  <boss-row>
    <boss-col :span="24">
      <div class="grid-content bg-purple-dark"></div>
    </boss-col>
  </boss-row>
  <boss-row>
    <boss-col :span="12">
      <div class="grid-content bg-purple"></div>
    </boss-col>
    <boss-col :span="12">
      <div class="grid-content bg-purple-light"></div>
    </boss-col>
  </boss-row>
  <boss-row>
    <boss-col :span="8">
      <div class="grid-content bg-purple"></div>
    </boss-col>
    <boss-col :span="8">
      <div class="grid-content bg-purple-light"></div>
    </boss-col>
    <boss-col :span="8">
      <div class="grid-content bg-purple"></div>
    </boss-col>
  </boss-row>
  <boss-row>
    <boss-col :span="6">
      <div class="grid-content bg-purple"></div>
    </boss-col>
    <boss-col :span="6">
      <div class="grid-content bg-purple-light"></div>
    </boss-col>
    <boss-col :span="6">
      <div class="grid-content bg-purple"></div>
    </boss-col>
    <boss-col :span="6">
      <div class="grid-content bg-purple-light"></div>
    </boss-col>
  </boss-row>
  <boss-row>
    <boss-col :span="4">
      <div class="grid-content bg-purple"></div>
    </boss-col>
    <boss-col :span="4">
      <div class="grid-content bg-purple-light"></div>
    </boss-col>
    <boss-col :span="4">
      <div class="grid-content bg-purple"></div>
    </boss-col>
    <boss-col :span="4">
      <div class="grid-content bg-purple-light"></div>
    </boss-col>
    <boss-col :span="4">
      <div class="grid-content bg-purple"></div>
    </boss-col>
    <boss-col :span="4">
      <div class="grid-content bg-purple-light"></div>
    </boss-col>
  </boss-row>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
  .boss-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .boss-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>`
export default {
  data(){
    return {
      code,
      codeDesc:"",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}