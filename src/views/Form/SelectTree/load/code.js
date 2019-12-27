let code = `<template>
  <boss-select-tree
    :load="loadNode"
    node-key="label"
    v-model="value"
    placeholder="请从树中选择数据"
  />
</template>
<script>
export default {
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
            label: "zone"
          }
        ];

        resolve(data);
      }, 500);
    }
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"load 是一个回调函数，懒加载自定义树节点",
      anchor:{
        id:"load",
        title:"懒加载下拉树"
      }
    }
  }
}