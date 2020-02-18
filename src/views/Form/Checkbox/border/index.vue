<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="带有边框的多选框"
  >
    <div>
      <boss-checkbox v-model="checked1" label="备选项1" border></boss-checkbox>
      <boss-checkbox v-model="checked2" label="备选项2" border></boss-checkbox>
    </div>
    <div style="margin-top: 20px">
      <boss-checkbox v-model="checked3" label="备选项1" border size="medium"></boss-checkbox>
      <boss-checkbox v-model="checked4" label="备选项2" border size="medium"></boss-checkbox>
    </div>
    <div style="margin-top: 20px">
      <boss-checkbox-group v-model="checkboxGroup1" size="small">
        <boss-checkbox label="备选项1" border></boss-checkbox>
        <boss-checkbox label="备选项2" border disabled></boss-checkbox>
      </boss-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <boss-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
        <boss-checkbox label="备选项1" border></boss-checkbox>
        <boss-checkbox label="备选项2" border></boss-checkbox>
      </boss-checkbox-group>
    </div>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      checked1: true,
      checked2: false,
      checked3: false,
      checked4: true,
      checkboxGroup1: [],
      checkboxGroup2: ['备选项1']
    };
  }
};
</script>