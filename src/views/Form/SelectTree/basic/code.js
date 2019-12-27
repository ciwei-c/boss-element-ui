let code = `<template>
  <boss-select-tree
    :data="data"
    node-key="label"
    v-model="value"
    placeholder="请从树中选择数据"
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
      codeDesc:"data 为树的数据源，v-model 的值为当前被选中的节点值，使用它需要先设置 node-key，因为需要根据 node-key 来判断应该使用数据源中的哪一个字段。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}