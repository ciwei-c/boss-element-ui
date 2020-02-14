<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="禁用多选框。"
  >
    <boss-checkbox v-model="checked" disabled>备选项</boss-checkbox>
    <boss-checkbox disabled>备选项</boss-checkbox>
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