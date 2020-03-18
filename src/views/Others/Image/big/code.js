let code = `<template>
  <div style="display:flex;text-align:center">
    <div v-for="fit in fits" :key="fit" style="margin-right:20px">
      <h4>{{ fit }}</h4>
      <boss-image style="width: 100px; height: 150px;margin-top:10px" :src="url" :fit="fit"></boss-image>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url:require("@/assets/image.jpg")
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"可通过 previewSrcList 开启预览大图的功能。",
      anchor:{
        id:"big",
        title:"大图预览"
      }
    }
  }
}