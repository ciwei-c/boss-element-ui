<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="当垂直方向空间受限且表单较简单时，可以在一行内放置表单。"
  >
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
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
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