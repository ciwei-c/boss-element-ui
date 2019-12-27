let code = `<template>
  <boss-row>
    <boss-input-number v-model="num" :min="1" :format="(val)=>{return \`#\${val}\`}"></boss-input-number>
  </boss-row>
  <boss-row>
    <boss-input-number v-model="num" :min="1" format="money"></boss-input-number>
  </boss-row>
  <boss-row>
    <boss-input-number v-model="num" :precision="2" :min="1" format="percent"></boss-input-number>
  </boss-row>
</template>
<script>
export default {
  data() {
    return {
      num: 1
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"format 支持回调函数，使用返回值设置想要转换成的格式，也支持字符串，为了方便使用，默认内置了 money、percent 格式用来显示金额与百分比",
      anchor:{
        id:"format",
        title:"格式化展示"
      }
    }
  }
}