<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="可自定义最大值。"
  >
    <boss-badge :value="200" :max="99" class="item">
      <boss-button size="small">评论</boss-button>
    </boss-badge>
    <boss-badge :value="100" :max="10" class="item">
      <boss-button size="small">回复</boss-button>
    </boss-badge>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>
<style lang="scss">
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>