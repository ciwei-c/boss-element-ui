let code = `<template>
  <boss-row>
    <boss-col :span="11">
      <boss-row>默认</boss-row>
      <boss-image :src="src"></boss-image>
    </boss-col>
    <boss-col :span="11" :offset="2">
      <boss-row>自定义</boss-row>
      <boss-image :src="src">
        <boss-row slot="placeholder" class="image-slot">
          加载中
          <span class="dot">...</span>
        </boss-row>
      </boss-image>
    </boss-col>
  </boss-row>
</template>
<script>
export default {
  data() {
    return {
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"可通过slot = placeholder可自定义占位内容",
      anchor:{
        id:"placeholder",
        title:"占位符"
      }
    }
  }
}