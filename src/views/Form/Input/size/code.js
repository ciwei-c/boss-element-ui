let code = `<template>
  <div style="margin-bottom:10px">默认尺寸</div>
  <boss-input style="margin-bottom:10px" placeholder="请输入内容" suffix-icon="boss-icon-date" v-model="input1"></boss-input>
  <div style="margin-bottom:10px">大尺寸</div>
  <boss-input style="margin-bottom:10px" size="medium" placeholder="请输入内容" suffix-icon="boss-icon-date" v-model="input2"></boss-input>
  <div style="margin-bottom:10px">小尺寸</div>
  <boss-input style="margin-bottom:10px" size="small" placeholder="请输入内容" suffix-icon="boss-icon-date" v-model="input3"></boss-input>
  <div style="margin-bottom:10px">迷你尺寸</div>
  <boss-input style="margin-bottom:10px" size="mini" placeholder="请输入内容" suffix-icon="boss-icon-date" v-model="input4"></boss-input>
</demo-sample-panel>
</template>
<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      input4: ""
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"可通过 size 属性指定输入框的尺寸，除了默认尺寸，提供了 medium、small 和 mini",
      anchor:{
        id:"size",
        title:"尺寸"
      }
    }
  }
}