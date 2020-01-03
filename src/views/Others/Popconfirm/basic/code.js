let code = `<template>
  <boss-popconfirm title="这是一段内容确定删除吗？">
    <boss-button slot="reference">删除</boss-button>
  </boss-popconfirm>
</template>
<script>
export default {
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"在 Popconfirm 中，只有 title 属性可用，content 属性不会被展示。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}