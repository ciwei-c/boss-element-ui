let code = `<template>
  <boss-checkbox-group v-model="checkedCities" :min="1" :max="2">
    <boss-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</boss-checkbox>
  </boss-checkbox-group>
</template>
<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      checkedCities: ["上海", "北京"],
      cities: cityOptions
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"使用 min 和 max 属性能够限制可以被勾选的项目的数量。",
      anchor:{
        id:"limit",
        title:"限制选中数量"
      }
    }
  }
}