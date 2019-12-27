<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="通过 format 格式化数字，以展示具有具体含义的数据"
  >
    <boss-row>
      <boss-input-number v-model="num" :min="1" :format="(val)=>{return `#${val}`}"></boss-input-number>
    </boss-row>
    <boss-row>
      <boss-input-number v-model="num" :min="1" format="money"></boss-input-number>
    </boss-row>
    <boss-row>
      <boss-input-number v-model="num" :precision="2" :min="1" format="percent"></boss-input-number>
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      num: 1
    };
  }
};
</script>