<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="带有按钮样式的多选框"
  >
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
  </demo-sample-panel>
</template>
<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
import code from "./code";
export default {
  mixins: [code],
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