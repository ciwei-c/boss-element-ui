<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="是否有下划线"
    :codeDesc="codeDesc"
  >
    <div>
      <boss-link :underline="false" style="margin-right:10px">无下划线</boss-link>
      <boss-link>有下划线</boss-link>
    </div>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>
