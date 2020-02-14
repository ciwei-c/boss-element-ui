<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="限制可以被勾选的项目的数量"
  >
    <boss-checkbox-group v-model="checkedCities" :min="1" :max="2">
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
      checkedCities: ["上海", "北京"],
      cities: cityOptions
    };
  }
};
</script>