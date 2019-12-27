let code = `<template>
  <boss-select-tree
    :data="data"
    node-key="label"
    v-model="value"
    placeholder="请从树中选择数据"
    icon="boss-icon-folder"
    expandedIcon="boss-icon-folder-opened"
  />
</template>
<script>
export default {
  data() {
    return {
      value: "一级 1",
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                  icon: "boss-icon-document"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"icon 值为默认显示的图标，expandedIcon 表示展开时的图标。如果在 boss-select-tree 标签中设置了这两个字段，则会使用到所有子节点，如果子节点有单独设置图标，则优先使用子节点单独设置的图标，叶子节点若没有设置图标，则不显示",
      anchor:{
        id:"icon",
        title:"自定义树节点的图标"
      }
    }
  }
}