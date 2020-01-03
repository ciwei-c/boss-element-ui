<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="图片组件基本用法"
  >
    <div style="display:flex;text-align:center">
      <div v-for="fit in fits" :key="fit" style="margin-right:20px">
        <h4>{{ fit }}</h4>
        <boss-image style="width: 100px; height: 150px;margin-top:10px" :src="url" :fit="fit"></boss-image>
      </div>
    </div>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url:require("@/assets/image.jpg")
    };
  }
};
</script>