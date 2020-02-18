<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="单选框不可用的状态。"
  >
    <boss-radio disabled v-model="radio" label="禁用">备选项</boss-radio>
    <boss-radio disabled v-model="radio" label="选中且禁用">选中且禁用的备选项</boss-radio>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      radio: "选中且禁用"
    };
  }
};
</script>