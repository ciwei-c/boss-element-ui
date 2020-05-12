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
      codeDesc:"",
      anchor:{
        id:"disabled",
        title:"关闭 tooltip"
      }
    }
  }
}