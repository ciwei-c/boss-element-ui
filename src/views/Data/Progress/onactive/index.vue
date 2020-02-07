<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="活动中的进度条用法"
  >
    <boss-progress style="margin-bottom: 20px;" :percentage="50" active></boss-progress>
    <boss-progress style="margin-bottom: 20px;" :percentage="50" active status="exception"></boss-progress>
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