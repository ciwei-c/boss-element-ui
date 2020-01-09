<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="直接通过设置类名为 boss-icon-iconName 来使用即可。例如："
    :codeDesc="codeDesc"
  >
    <div>
      <i style="margin-right:10px" class="boss-icon-edit"></i>
      <i style="margin-right:10px" class="boss-icon-share"></i>
      <i style="margin-right:10px" class="boss-icon-delete"></i>
      <boss-button type="primary" icon="boss-icon-search">搜索</boss-button>
    </div>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>
