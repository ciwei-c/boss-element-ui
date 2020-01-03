<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="可同时展开多个面板，面板之间不影响"
  >
    <boss-calendar v-model="value"></boss-calendar>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      value: new Date()
    };
  }
};
</script>