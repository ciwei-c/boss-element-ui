<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc=""
  >
    <div>
      <span>雨纷纷</span>
      <boss-divider direction="vertical"></boss-divider>
      <span>旧故里</span>
      <boss-divider direction="vertical"></boss-divider>
      <span>草木深</span>
    </div>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>