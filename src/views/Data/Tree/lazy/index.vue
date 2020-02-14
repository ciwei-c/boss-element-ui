<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="懒加载自定义节点"
  >
    <boss-tree :props="props" :load="loadNode" lazy show-checkbox></boss-tree>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      props: {
        label: "name",
        children: "zones",
        isLeaf: "leaf"
      }
    };
  },
  methods: {
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: "region" }]);
      }
      if (node.level > 1) return resolve([]);

      setTimeout(() => {
        const data = [
          {
            name: "leaf",
            leaf: true
          },
          {
            name: "zone"
          }
        ];

        resolve(data);
      }, 500);
    }
  }
};
</script>