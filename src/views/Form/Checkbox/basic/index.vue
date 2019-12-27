<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="基础多选框用法。"
  >
    <boss-checkbox v-model="checked">备选项</boss-checkbox>
  </demo-sample-panel>
</template>
<script>
import code from "./code"
export default {
  mixins:[code],
  data() {
    return {
      checked: true
    };
  }
};
</script>