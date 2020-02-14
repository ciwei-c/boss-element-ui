<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="设置最大页码按钮数"
  >
    <boss-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"></boss-pagination>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>