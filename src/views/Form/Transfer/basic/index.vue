<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="输入框基础用法"
  >
    <boss-transfer v-model="value" :data="data"></boss-transfer>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        });
      }
      return data;
    };
    return {
      data: generateData(),
      value: [1, 4]
    };
  }
};
</script>