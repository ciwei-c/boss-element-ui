<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="适用广泛的基础单选"
  >
    <boss-row v-for="size in sizes" :key="size.label">
      <boss-row>{{size.label}}</boss-row>
      <boss-select v-model="value" placeholder="请选择" :size="size.size">
        <boss-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></boss-option>
      </boss-select>
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      sizes:[{
        size:"",
        label:"默认尺寸"
      },{
        size:"medium",
        label:"大尺寸"
      },{
        size:"small",
        label:"小尺寸"
      },{
        size:"mini",
        label:"迷你尺寸"
      }],
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
      value: ""
    };
  }
};
</script>