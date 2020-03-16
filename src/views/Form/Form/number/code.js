let code = `<template>
  <boss-form
    :model="numberValidateForm"
    ref="numberValidateForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <boss-form-item
      label="年龄"
      prop="age"
      :rules="[
        { required: true, message: '年龄不能为空'},
        { type: 'number', message: '年龄必须为数字值'}
      ]"
    >
      <boss-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></boss-input>
    </boss-form-item>
    <boss-form-item>
      <boss-button type="primary" @click="submitForm('numberValidateForm')">提交</boss-button>
      <boss-button @click="resetForm('numberValidateForm')">重置</boss-button>
    </boss-form-item>
  </boss-form>
</template>
<script>
export default {
  data() {
    return {
      numberValidateForm: {
        age: ""
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
    }
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"数字类型的验证需要在 v-model 处加上 .number 的修饰符，这是 Vue 自身提供的用于将绑定值转化为 number 类型的修饰符。",
      anchor:{
        id:"number",
        title:"数字类型验证"
      }
    }
  }
}