let code = `<template>
  <boss-row>
    <boss-col :span="11">
      <boss-row>默认</boss-row>
      <boss-image style="width:300px;height:200px"></boss-image>
    </boss-col>
    <boss-col :span="11" :offset="2">
      <boss-row>自定义</boss-row>
      <boss-image style="width:300px;height:200px">
        <div slot="error" class="image-slot">
          <i class="boss-icon-picture-outline"></i>
        </div>
      </boss-image>
    </boss-col>
  </boss-row>
</template>
<style lang="scss">
  .image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    color: #ccc;
    font-size: 20px;
  }
</style>
`
export default {
  data(){
    return {
      code,
      codeDesc:"可通过slot = error可自定义加载失败内容",
      anchor:{
        id:"fail",
        title:"加载失败"
      }
    }
  }
}