let code = `<template>
  <boss-tree :data="data" :props="defaultProps"></boss-tree>
</template>
<script>
export default {
  data() {
    return {
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  }
};
</script>`
export default {
  data(){
    return {
      code,
      codeDesc:"data 值绑定树的数据，props 设置节点属性值的别名，默认字节点集合的属性为children，文本显示为 label",
      anchor:{
        id:"expand",
        title:"默认展开和选中"
      }
    }
  }
}