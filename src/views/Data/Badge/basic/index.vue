<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="进度条基础用法"
  >
    <boss-badge :value="12" style="margin-right:40px">
      <boss-button size="small">评论</boss-button>
    </boss-badge>
    <boss-badge :value="3" style="margin-right:40px">
      <boss-button size="small">回复</boss-button>
    </boss-badge>
    <boss-badge :value="1" style="margin-right:40px" type="primary">
      <boss-button size="small">评论</boss-button>
    </boss-badge>
    <boss-badge :value="2" style="margin-right:40px" type="warning">
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