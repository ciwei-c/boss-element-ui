let code = `<template>
  <boss-radio-group v-model="labelPosition" size="small">
    <boss-radio-button label="left">左对齐</boss-radio-button>
    <boss-radio-button label="right">右对齐</boss-radio-button>
    <boss-radio-button label="top">顶部对齐</boss-radio-button>
  </boss-radio-group>
  <div style="margin: 20px;"></div>
  <boss-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
    <boss-form-item label="名称">
      <boss-input v-model="formLabelAlign.name"></boss-input>
    </boss-form-item>
    <boss-form-item label="活动区域">
      <boss-input v-model="formLabelAlign.region"></boss-input>
    </boss-form-item>
    <boss-form-item label="活动形式">
      <boss-input v-model="formLabelAlign.type"></boss-input>
    </boss-form-item>
  </boss-form>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      }
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"通过设置 label-position 属性可以改变表单域标签的位置，可选值为 top、left，当设为 top 时标签会置于表单域的顶部",
      anchor:{
        id:"labelalign",
        title:"标签对齐方式"
      }
    }
  }
}