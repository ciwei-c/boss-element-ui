<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc
  >
    <boss-row>
      <boss-col span="2">
        <boss-color-picker v-model="color"></boss-color-picker>
      </boss-col>
      <boss-col span="2">
        <boss-color-picker v-model="color" size="medium"></boss-color-picker>
      </boss-col>
      <boss-col span="2">
        <boss-color-picker v-model="color" size="small"></boss-color-picker>
      </boss-col>
      <boss-col span="2">
        <boss-color-picker v-model="color" size="mini"></boss-color-picker>
      </boss-col>
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return { color: "#409EFF" };
  }
};
</script>