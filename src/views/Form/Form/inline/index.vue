<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="当垂直方向空间受限且表单较简单时，可以在一行内放置表单。"
  >
    <boss-form :inline="true" :model="formInline" class="demo-form-inline">
      <boss-form-item label="审批人">
        <boss-input v-model="formInline.user" placeholder="审批人"></boss-input>
      </boss-form-item>
      <boss-form-item label="活动区域">
        <boss-select v-model="formInline.region" placeholder="活动区域">
          <boss-option label="区域一" value="shanghai"></boss-option>
          <boss-option label="区域二" value="beijing"></boss-option>
        </boss-select>
      </boss-form-item>
      <boss-form-item>
        <boss-button type="primary" @click="onSubmit">查询</boss-button>
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
      formInline: {
        user: "",
        region: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>