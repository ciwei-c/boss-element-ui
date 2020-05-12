<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="默认情况下，direction 为 horizontal。通过设置 direction 为 vertical 来让走马灯在垂直方向上显示。"
  >
    <boss-carousel height="200px" direction="vertical" :autoplay="false">
      <boss-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </boss-carousel-item>
    </boss-carousel>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>
<style>
.boss-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.boss-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.boss-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>