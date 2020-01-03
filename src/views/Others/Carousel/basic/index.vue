<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="适用广泛的基础用法"
  >
    <div>
      <span style="color:#222;margin:10px 0;display:inline-block">默认 Hover 指示器触发</span>
      <boss-carousel height="150px">
        <boss-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </boss-carousel-item>
      </boss-carousel>
    </div>
    <div>
      <span style="color:#222;margin:10px 0;display:inline-block">Click 指示器触发</span>
      <boss-carousel trigger="click" height="150px">
        <boss-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </boss-carousel-item>
      </boss-carousel>
    </div>
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