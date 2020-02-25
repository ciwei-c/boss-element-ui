<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="当选中某一级时，动态加载该级下的选项。"
  >
    <boss-cascader :props="props"></boss-cascader>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
let id = 0;
export default {
  mixins: [code],
  data() {
    return {
      props: {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node;
          setTimeout(() => {
            const nodes = Array.from({ length: level + 1 }).map(item => ({
              value: ++id,
              label: `选项${id}`,
              leaf: level >= 2
            }));
            resolve(nodes);
          }, 1000);
        }
      }
    };
  }
};
</script>