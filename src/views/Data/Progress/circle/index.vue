<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="进度条基础用法"
  >
    <boss-progress style="margin-bottom: 20px;" type="circle" :percentage="50"></boss-progress>
    <boss-progress style="margin-bottom: 20px;" type="circle" :percentage="100" status="success"></boss-progress>
    <boss-progress style="margin-bottom: 20px;" type="circle" :percentage="50" status="exception"></boss-progress>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    }
  }
};
</script>