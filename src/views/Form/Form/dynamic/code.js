let code = `<template>
  <boss-form
    :model="dynamicValidateForm"
    ref="dynamicValidateForm"
    label-width="100px"
    class="demo-dynamic"
  >
    <boss-form-item
      prop="email"
      label="邮箱"
      :rules="[
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
      ]"
    >
      <boss-input v-model="dynamicValidateForm.email"></boss-input>
    </boss-form-item>
    <boss-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :label="'域名' + index"
      :key="domain.key"
      :prop="'domains.' + index + '.value'"
      :rules="{
        required: true, message: '域名不能为空', trigger: 'blur'
      }"
    >
      <boss-input v-model="domain.value"></boss-input>
      <boss-button @click.prevent="removeDomain(domain)">删除</boss-button>
    </boss-form-item>
    <boss-form-item>
      <boss-button type="primary" @click="submitForm('dynamicValidateForm')">提交</boss-button>
      <boss-button @click="addDomain">新增域名</boss-button>
      <boss-button @click="resetForm('dynamicValidateForm')">重置</boss-button>
    </boss-form-item>
  </boss-form>
</template>
<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            value: ""
          }
        ],
        email: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now()
      });
    }
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"除了在 Form 组件上一次性传递所有的验证规则外还可以在单个的表单域上传递属性的验证规则",
      anchor:{
        id:"dynamic",
        title:"动态表单"
      }
    }
  }
}