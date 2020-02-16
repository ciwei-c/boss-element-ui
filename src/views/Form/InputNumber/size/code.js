let code = `<template>
  <div>默认尺寸</div>
  <boss-input-number v-model="num1"></boss-input-number>
  <div>大尺寸</div>
  <boss-input-number size="medium" v-model="num2"></boss-input-number>
  <div>小尺寸</div>
  <boss-input-number size="small" v-model="num3"></boss-input-number>
  <div>迷你尺寸</div>
  <boss-input-number size="mini" v-model="num4"></boss-input-number>
</template>
<script>
export default {
  data() {
    return {
      num1: 1,
      num2: 1,
      num3: 1,
      num4: 1
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
        id:"size",
        title:"尺寸"
      }
    }
  }
}