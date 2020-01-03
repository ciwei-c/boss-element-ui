<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="适用广泛的基础单选"
  >
    <boss-popconfirm title="这是一段内容确定删除吗？">
      <boss-button slot="reference">删除</boss-button>
    </boss-popconfirm>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>