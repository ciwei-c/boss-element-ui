let code = `<template>
  <boss-time-picker placeholder="选择时间" v-model="value" style="width: 100%;"></boss-time-picker>
</template>
<script>
export default {
  data() {
    return {
      value: ""
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
        id:"basic",
        title:"基本用法"
      }
    }
  }
}