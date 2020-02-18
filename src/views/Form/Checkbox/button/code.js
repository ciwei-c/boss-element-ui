let code = `<template>
  <div>
    <boss-checkbox-group v-model="checkboxGroup1">
      <boss-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</boss-checkbox-button>
    </boss-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <boss-checkbox-group v-model="checkboxGroup2" size="medium">
      <boss-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</boss-checkbox-button>
    </boss-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <boss-checkbox-group v-model="checkboxGroup3" size="small">
      <boss-checkbox-button
        v-for="city in cities"
        :label="city"
        :disabled="city === '北京'"
        :key="city"
      >{{city}}</boss-checkbox-button>
    </boss-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <boss-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
      <boss-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</boss-checkbox-button>
    </boss-checkbox-group>
  </div>
</template>
<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      checkboxGroup1: ["上海"],
      checkboxGroup2: ["上海"],
      checkboxGroup3: ["上海"],
      checkboxGroup4: ["上海"],
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
      codeDesc:"只需要把boss-checkbox元素替换为boss-checkbox-button元素即可。此外，还提供了size属性。",
      anchor:{
        id:"button",
        title:"按钮样式"
      }
    }
  }
}