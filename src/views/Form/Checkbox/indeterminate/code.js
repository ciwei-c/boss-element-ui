let code = `<template>
  <boss-checkbox
    :indeterminate="isIndeterminate"
    v-model="checkAll"
    @change="handleCheckAllChange"
  >全选</boss-checkbox>
  <div style="margin: 15px 0;"></div>
  <boss-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <boss-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</boss-checkbox>
  </boss-checkbox-group>
</template>
<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
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
        id:"indeterminate",
        title:"indeterminate 状态"
      }
    }
  }
}