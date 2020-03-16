let code = `<template>
  <boss-form :inline="true" :model="formInline" class="demo-form-inline">
    <boss-form-item label="审批人">
      <boss-input v-model="formInline.user" placeholder="审批人"></boss-input>
    </boss-form-item>
    <boss-form-item label="活动区域">
      <boss-select v-model="formInline.region" placeholder="活动区域">
        <boss-option label="区域一" value="shanghai"></boss-option>
        <boss-option label="区域二" value="beijing"></boss-option>
      </boss-select>
    </boss-form-item>
    <boss-form-item>
      <boss-button type="primary" @click="onSubmit">查询</boss-button>
    </boss-form-item>
  </boss-form>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"设置 inline 属性可以让表单域变为行内的表单域",
      anchor:{
        id:"inline",
        title:"行内表单"
      }
    }
  }
}