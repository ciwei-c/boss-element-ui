<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="只读的评分用来展示分数，允许出现半星"
  >
    <boss-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"></boss-rate>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      value: 3.7
    };
  }
};
</script>