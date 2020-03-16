<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="根据具体目标和制约因素，选择最佳的标签对齐方式。"
  >
    <boss-radio-group v-model="labelPosition" size="small">
      <boss-radio-button label="left">左对齐</boss-radio-button>
      <boss-radio-button label="right">右对齐</boss-radio-button>
      <boss-radio-button label="top">顶部对齐</boss-radio-button>
    </boss-radio-group>
    <div style="margin: 20px;"></div>
    <boss-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <boss-form-item label="名称">
        <boss-input v-model="formLabelAlign.name"></boss-input>
      </boss-form-item>
      <boss-form-item label="活动区域">
        <boss-input v-model="formLabelAlign.region"></boss-input>
      </boss-form-item>
      <boss-form-item label="活动形式">
        <boss-input v-model="formLabelAlign.type"></boss-input>
      </boss-form-item>
    </boss-form>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      }
    };
  }
};
</script>