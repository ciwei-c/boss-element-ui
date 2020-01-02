let code = `<template>
  <boss-tree
    :data="data"
    :props="defaultProps"
    node-key="label"
    highlight-current
    icon="boss-icon-folder"
    expandedIcon="boss-icon-folder-opened"
    url="/trees"
    @on-search-tree-click="onClickSearchTree"
    :jsonReader="{
      'list':'list'
    }"
  ></boss-tree>
</template>
<script>
export default {
  data() {
    return {
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
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods:{
    onClickSearchTree(data){
      console.log(data)
    }
  }
};
</script>`
export default {
  data(){
    return {
      code,
      codeDesc:"设置 url 来查询远程节点，点击后在树中将其选中，若节点存在于树中的话。jsonReader 用来解析请求 url 返回的 json 数据，如代码所示",
      anchor:{
        id:"search",
        title:"远程节点搜索"
      }
    }
  }
}