<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="以红点的形式标注需要关注的内容。"
  >
    <boss-badge is-dot class="item">
      <boss-button class="share-button" icon="boss-icon-share" type="primary"></boss-button>
    </boss-badge>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>