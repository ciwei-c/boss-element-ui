<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="带有背景色的分页（只用于element风格）"
  >
    <boss-pagination background layout="prev, pager, next" :total="1000"></boss-pagination>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>