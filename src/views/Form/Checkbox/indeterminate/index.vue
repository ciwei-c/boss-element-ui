<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="用以表示 checkbox 的不确定状态，一般用于实现全选的效果"
  >
    <boss-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
    >全选</boss-checkbox>
    <div style="margin: 15px 0;"></div>
    <boss-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <boss-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</boss-checkbox>
    </boss-checkbox-group>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  mixins: [code],
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