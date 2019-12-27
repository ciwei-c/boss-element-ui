let code = `<template>
  <boss-select-tree
    :data="data"
    :formatter="formatter"
    node-key="id"
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
      return \`\${node.id}-\${node.label}\`
    }
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"formatter 属性接受回调函数，返回格式化后的显示",
      anchor:{
        id:"format",
        title:"格式化展示"
      }
    }
  }
}