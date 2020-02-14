let code = `<template>
  <boss-tree 
    :data="data" 
    :props="defaultProps" 
    show-line 
    icon="boss-icon-folder"
    expandedIcon="boss-icon-folder-opened"
  ></boss-tree>
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
            label: '三级 3-1-1',
            children: [{
              label: '三级 3-1-1-1'
            }]
          },{
            label: '三级 3-1-2',
            children: [{
              label: '三级 3-1-2-1'
            }]
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
      codeDesc:"show-line 设为 true 时，显示层级间的连接线，常用于目录结构",
      anchor:{
        id:"showline",
        title:"连接线"
      }
    }
  }
}