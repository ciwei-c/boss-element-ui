<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。"
  >
    <boss-checkbox-group v-model="checkList">
      <boss-checkbox label="复选框 A"></boss-checkbox>
      <boss-checkbox label="复选框 B"></boss-checkbox>
      <boss-checkbox label="复选框 C"></boss-checkbox>
      <boss-checkbox label="禁用" disabled></boss-checkbox>
      <boss-checkbox label="选中且禁用" disabled></boss-checkbox>
    </boss-checkbox-group>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      checkList: ["选中且禁用", "复选框 A"]
    };
  }
};
</script>