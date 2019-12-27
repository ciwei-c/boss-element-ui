let code = `<template>
  <boss-select-tree
    :data="data"
    node-key="label"
    v-model="value"
    multiple
    icon="boss-icon-folder"
    expandedIcon="boss-icon-folder-opened"
    placeholder="请从树中选择数据"
  />
</template>
<script>
export default {
  data() {
    return {
      value: ["一级 1"],
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
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
      codeDesc:"boss-select-tree 标签设置 multiple 属性为 true 开启多选",
      anchor:{
        id:"multiple",
        title:"多选下拉树"
      }
    }
  }
}