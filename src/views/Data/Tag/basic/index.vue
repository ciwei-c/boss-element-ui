<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="基础的标签用法。"
  >
    <boss-tag>标签一</boss-tag>
    <boss-tag type="success">标签二</boss-tag>
    <boss-tag type="info">标签三</boss-tag>
    <boss-tag type="warning">标签四</boss-tag>
    <boss-tag type="danger">标签五</boss-tag>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>