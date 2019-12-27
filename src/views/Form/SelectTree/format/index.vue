<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="下拉树输入框的格式化展示"
  >
    <boss-select-tree
      :data="data"
      :formatter="formatter"
      node-key="id"
      v-model="value"
      placeholder="请从树中选择数据"
    />
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      value: "一级 1",
      data: [
        {
          label: "一级 1",
          id:"level1",
          children: [
            {
              label: "二级 1-1",
              id:"level2",
              children: [
                {
                  label: "三级 1-1-1",
                  id:"level3"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods:{
    formatter(node){
      return `${node.id}-${node.label}`
    }
  }
};
</script>