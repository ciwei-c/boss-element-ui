<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="展示多行文本或者是设置文本内容的格式"
  >
    <boss-tooltip placement="top">
      <div slot="content">
        多行信息
        <br />第二行信息
      </div>
      <boss-button>Top center</boss-button>
    </boss-tooltip>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {};
  }
};
</script>