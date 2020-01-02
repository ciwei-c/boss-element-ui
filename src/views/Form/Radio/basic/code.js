let code = `<template>
  <boss-radio v-model="radio" label="1">备选项</boss-radio>
  <boss-radio v-model="radio" label="2">备选项</boss-radio>
</template>
<script>
export default {
  data() {
    return {
      radio: "1"
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}