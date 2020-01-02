<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。"
  >
    <boss-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <boss-form-item label="活动名称" prop="name">
        <boss-input v-model="ruleForm.name"></boss-input>
      </boss-form-item>
      <boss-form-item label="活动区域" prop="region">
        <boss-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <boss-option label="区域一" value="shanghai"></boss-option>
          <boss-option label="区域二" value="beijing"></boss-option>
        </boss-select>
      </boss-form-item>
      <boss-form-item label="活动时间" required>
        <boss-col :span="11">
          <boss-form-item prop="date1">
            <boss-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></boss-date-picker>
          </boss-form-item>
        </boss-col>
        <boss-col class="line" :span="2">-</boss-col>
        <boss-col :span="11">
          <boss-form-item prop="date2">
            <boss-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></boss-time-picker>
          </boss-form-item>
        </boss-col>
      </boss-form-item>
      <boss-form-item label="即时配送" prop="delivery">
        <boss-switch v-model="ruleForm.delivery"></boss-switch>
      </boss-form-item>
      <boss-form-item label="活动性质" prop="type">
        <boss-checkbox-group v-model="ruleForm.type">
          <boss-checkbox label="美食/餐厅线上活动" name="type"></boss-checkbox>
          <boss-checkbox label="地推活动" name="type"></boss-checkbox>
          <boss-checkbox label="线下主题活动" name="type"></boss-checkbox>
          <boss-checkbox label="单纯品牌曝光" name="type"></boss-checkbox>
        </boss-checkbox-group>
      </boss-form-item>
      <boss-form-item label="特殊资源" prop="resource">
        <boss-radio-group v-model="ruleForm.resource">
          <boss-radio label="线上品牌商赞助"></boss-radio>
          <boss-radio label="线下场地免费"></boss-radio>
        </boss-radio-group>
      </boss-form-item>
      <boss-form-item label="活动形式" prop="desc">
        <boss-input type="textarea" v-model="ruleForm.desc"></boss-input>
      </boss-form-item>
      <boss-form-item>
        <boss-button type="primary" @click="submitForm('ruleForm')">立即创建</boss-button>
        <boss-button @click="resetForm('ruleForm')">重置</boss-button>
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
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
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