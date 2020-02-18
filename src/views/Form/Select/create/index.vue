<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="适用广泛的基础单选"
  >
    <boss-select
      v-model="value"
      multiple
      filterable
      allow-create
      default-first-option
      placeholder="请选择文章标签"
    >
      <boss-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></boss-option>
    </boss-select>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      options: [
        {
          value: "HTML",
          label: "HTML"
        },
        {
          value: "CSS",
          label: "CSS"
        },
        {
          value: "JavaScript",
          label: "JavaScript"
        }
      ],
      value: []
    };
  }
};
</script>