<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="Tooltip 组件提供了两个不同的主题：dark和light。"
  >
    <boss-tooltip content="Top center" placement="top">
      <boss-button>Dark</boss-button>
    </boss-tooltip>
    <boss-tooltip content="Bottom center" placement="bottom" effect="light">
      <boss-button>Light</boss-button>
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