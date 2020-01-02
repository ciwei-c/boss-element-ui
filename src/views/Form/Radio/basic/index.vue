<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。"
  >
    <boss-radio v-model="radio" label="1">备选项</boss-radio>
    <boss-radio v-model="radio" label="2">备选项</boss-radio>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      radio: "1"
    };
  }
};
</script>