<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="适用性较广的基础多选，用 Tag 展示已选项"
  >
    <boss-select v-model="value" multiple placeholder="请选择">
      <boss-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></boss-option>
    </boss-select>
    <boss-select v-model="value2" multiple collapse-tags style="margin-left: 20px;" placeholder="请选择">
      <boss-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></boss-option>
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
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      value2: ""
    };
  }
};
</script>