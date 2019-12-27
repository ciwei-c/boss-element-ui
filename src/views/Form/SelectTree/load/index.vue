<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="下拉树基础用法"
  >
    <boss-select-tree
      :load="loadNode"
      node-key="label"
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
      value: ""
    };
  },
  methods:{
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ label: "region" }]);
      }
      if (node.level > 1) return resolve([]);

      setTimeout(() => {
        const data = [
          {
            label: "leaf",
            leaf: true
          },
          {
            label: "zone",
            children:[{
              label:"zone2"
            }]
          }
        ];

        resolve(data);
      }, 500);
    }
  }
};
</script>