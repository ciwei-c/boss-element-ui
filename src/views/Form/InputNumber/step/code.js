let code = `<template>
  <boss-row>
    <div style="margin:10px 0;">基础步数</div>
    <boss-input-number v-model="num" :step="2"></boss-input-number>
    <div style="margin:10px 0;">严格步数（设置 step-strictly 属性，值只能为步数的倍数，不为倍数时向上取倍数）</div>
    <boss-input-number v-model="num1" :step="2" step-strictly></boss-input-number>
  </boss-row>
</template>
<script>
export default {
  data() {
    return {
      num: 1,
      num1: 1
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"设置step属性可以控制步长，接受一个Number。",
      anchor:{
        id:"step",
        title:"步数"
      }
    }
  }
}