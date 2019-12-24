<template>
  <div>
    <boss-select-tree 
      :treeData="data"
      :treeProps="props"
      node-key="name"
      v-model="value"
      multiple
      icon="boss-icon-folder"
      expandedIcon="boss-icon-folder-opened"
    />
    <boss-tree :props="props" :load="loadNode" lazy show-checkbox></boss-tree>
  </div>
</template>
<script>
export default {
  data() {
    return {
      props: {
        label: "name",
        children: "zones",
        isLeaf:true
      },
      value: ["1"],
      data: [
        {
          name: "一级 1",
          zones: [
            {
              name: "二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1",
              zones: [
                {
                  name: "三级 1-1-1",
                  icon: "boss-icon-document"
                }
              ]
            }
          ]
        },
        {
          name: "一级 2",
          zones: [
            {
              name: "二级 2-1",
              zones: [
                {
                  name: "三级 2-1-1"
                }
              ]
            },
            {
              name: "二级 2-2",
              zones: [
                {
                  name: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          name: "一级 3",
          zones: [
            {
              name: "二级 3-1",
              zones: [
                {
                  name: "三级 3-1-1"
                }
              ]
            },
            {
              name: "二级 3-2",
              zones: [
                {
                  name: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleNodeClick(data) {},
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