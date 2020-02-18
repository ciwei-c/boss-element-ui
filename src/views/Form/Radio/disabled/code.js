let code = `<template>
  <boss-radio disabled v-model="radio" label="禁用">备选项</boss-radio>
  <boss-radio disabled v-model="radio" label="选中且禁用">选中且禁用的备选项</boss-radio>
</template>
<script>
export default {
  data() {
    return {
      radio: "选中且禁用"
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"设置disabled属性即可，它接受一个Boolean，true为禁用。",
      anchor:{
        id:"disabled",
        title:"禁用状态"
      }
    }
  }
}