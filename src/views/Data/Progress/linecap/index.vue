<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="进度条基础用法"
  >
    <boss-row>
      <boss-radio v-model="linecap" label="round"></boss-radio>
      <boss-radio v-model="linecap" label="butt"></boss-radio>
      <boss-radio v-model="linecap" label="square"></boss-radio>
    </boss-row>
    <boss-progress style="margin-bottom: 20px;" :stroke-linecap="linecap" :percentage="50"></boss-progress>
    <boss-progress
     type="circle"
      style="margin-bottom: 20px;"
      :stroke-linecap="linecap"
      :percentage="50"
      status="exception"
    ></boss-progress>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      linecap: "round"
    };
  }
};
</script>