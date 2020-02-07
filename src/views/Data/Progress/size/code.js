let code = `<template>
  <span>stroke-width</span>
  <boss-slider v-model="value1" :min="6" :max="12"></boss-slider>
  <span>width</span>
  <boss-slider v-model="value2" :min="120" :max="140"></boss-slider>
  <hr>
  <boss-row>
    <boss-col :span="12">
      <boss-progress style="margin-right: 20px;" :percentage="50" :stroke-width="value1" active></boss-progress>
    </boss-col>
    <boss-col :span="12">
      <boss-progress type="circle" :percentage="50" :stroke-width="value1" :width="value2"></boss-progress>
    </boss-col>
  </boss-row>
</template>
<script>
export default {
  data(){
    return {
      value1:8,
      value2:126,
    }
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"设置 stroke-width 改变进度条粗细，环形进度条时，设置 width 改变大小",
      anchor:{
        id:"size",
        title:"尺寸"
      }
    }
  }
}