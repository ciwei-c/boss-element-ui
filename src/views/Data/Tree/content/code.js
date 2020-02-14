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
      codeDesc:"可以通过两种方法进行树节点内容的自定义：render-content和 scoped slot。使用render-content指定渲染函数，该函数返回需要的节点区内容即可。渲染函数的用法请参考 Vue 文档。使用 scoped slot 会传入两个参数node和data，分别表示当前节点的 Node 对象和当前节点的数据",
      anchor:{
        id:"content",
        title:"自定义节点内容"
      }
    }
  }
}