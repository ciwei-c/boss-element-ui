<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="可以显示数字以外的文本内容。"
  >
    <boss-badge value="new" class="item">
      <boss-button size="small">评论</boss-button>
    </boss-badge>
    <boss-badge value="hot" class="item">
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