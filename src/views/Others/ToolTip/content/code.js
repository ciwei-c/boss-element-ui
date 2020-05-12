let code = `<template>
  <boss-tooltip placement="top">
    <div slot="content">
      多行信息
      <br />第二行信息
    </div>
    <boss-button>Top center</boss-button>
  </boss-tooltip>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"用具名 slot 分发content，替代tooltip中的content属性。",
      anchor:{
        id:"content",
        title:"更多内容"
      }
    }
  }
}