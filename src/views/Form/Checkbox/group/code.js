let code = `<template>

  <boss-checkbox-group v-model="checkList">
    <boss-checkbox label="复选框 A"></boss-checkbox>
    <boss-checkbox label="复选框 B"></boss-checkbox>
    <boss-checkbox label="复选框 C"></boss-checkbox>
    <boss-checkbox label="禁用" disabled></boss-checkbox>
    <boss-checkbox label="选中且禁用" disabled></boss-checkbox>
  </boss-checkbox-group>
</template>
<script>
export default {
  data() {
    return {
      checkList: ["选中且禁用", "复选框 A"]
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用v-model绑定Array类型的变量即可。 boss-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。",
      anchor:{
        id:"group",
        title:"多选框组"
      }
    }
  }
}