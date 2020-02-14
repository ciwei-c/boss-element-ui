let code = `<template>
  <boss-checkbox v-model="checked">备选项</boss-checkbox>
</template>
<script>
export default {
  data() {
    return {
      checked: true
    };
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
        title:"禁用"
      }
    }
  }
}