let code = `<template>
  <boss-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></boss-input-number>
</template>
<script>
export default {
  data() {
    return {
      num: 1
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"要使用它，只需要在boss-input-number元素中使用v-model绑定变量即可，变量的初始值即为默认值。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}