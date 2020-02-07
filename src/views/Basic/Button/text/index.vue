<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="文字按钮"
    :codeDesc="codeDesc"
  >
    <boss-row>
      <boss-button type="text">Link</boss-button>
      <boss-button type="text" disabled>Link</boss-button>
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>
