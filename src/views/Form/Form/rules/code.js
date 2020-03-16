let code = `<template>
  <boss-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <boss-form-item label="密码" prop="pass">
      <boss-input type="password" v-model="ruleForm.pass" autocomplete="off"></boss-input>
    </boss-form-item>
    <boss-form-item label="确认密码" prop="checkPass">
      <boss-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></boss-input>
    </boss-form-item>
    <boss-form-item label="年龄" prop="age">
      <boss-input v-model.number="ruleForm.age"></boss-input>
    </boss-form-item>
    <boss-form-item>
      <boss-button type="primary" @click="submitForm('ruleForm')">提交</boss-button>
      <boss-button @click="resetForm('ruleForm')">重置</boss-button>
    </boss-form-item>
  </boss-form>
</template>
<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
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
      codeDesc:"本例还使用status-icon属性为输入框添加了表示校验结果的反馈图标。",
      anchor:{
        id:"rules",
        title:"自定义校验规则"
      }
    }
  }
}