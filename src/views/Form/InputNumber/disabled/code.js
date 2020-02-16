let code = `<template>
  <boss-input-number v-model="num" disabled></boss-input-number>
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
      codeDesc:"",
      anchor:{
        id:"disabled",
        title:"禁用状态"
      }
    }
  }
}