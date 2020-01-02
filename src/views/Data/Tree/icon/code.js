let code = `<template>
  <boss-tree :data="data" :props="defaultProps" icon="boss-icon-folder" expandedIcon="boss-icon-folder-opened"></boss-tree>
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
            label: '三级 1-1-1',
            icon:'boss-icon-document'
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
      codeDesc:"icon 属性表示节点默认显示的图标，expandedIcon 属性表示节点展开时的图标，在 boss-tree 标签中设置将应用到全部节点下面。另外，在数据源中的所有层级中都可以设置这两个字段来控制每个节点的图标显示，将会优先显示",
      anchor:{
        id:"icon",
        title:"自定义图标"
      }
    }
  }
}