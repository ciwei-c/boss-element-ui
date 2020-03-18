<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc
  >
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
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
    };
  }
};
</script>