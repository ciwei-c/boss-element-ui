let code = `<template>
  <boss-form ref="form" :model="form" label-width="80px" style="width:460px">
    <boss-form-item label="活动名称">
      <boss-input v-model="form.name"></boss-input>
    </boss-form-item>
    <boss-form-item label="活动区域">
      <boss-select v-model="form.region" placeholder="请选择活动区域">
        <boss-option label="区域一" value="shanghai"></boss-option>
        <boss-option label="区域二" value="beijing"></boss-option>
      </boss-select>
    </boss-form-item>
    <boss-form-item label="活动时间">
      <boss-col :span="11">
        <boss-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></boss-date-picker>
      </boss-col>
      <boss-col class="line" :span="2" style="text-align:center">-</boss-col>
      <boss-col :span="11">
        <boss-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></boss-time-picker>
      </boss-col>
    </boss-form-item>
    <boss-form-item label="即时配送">
      <boss-switch v-model="form.delivery"></boss-switch>
    </boss-form-item>
    <boss-form-item label="活动性质">
      <boss-checkbox-group v-model="form.type">
        <boss-checkbox label="美食/餐厅线上活动" name="type"></boss-checkbox>
        <boss-checkbox label="地推活动" name="type"></boss-checkbox>
        <boss-checkbox label="线下主题活动" name="type"></boss-checkbox>
        <boss-checkbox label="单纯品牌曝光" name="type"></boss-checkbox>
      </boss-checkbox-group>
    </boss-form-item>
    <boss-form-item label="特殊资源">
      <boss-radio-group v-model="form.resource">
        <boss-radio label="线上品牌商赞助"></boss-radio>
        <boss-radio label="线下场地免费"></boss-radio>
      </boss-radio-group>
    </boss-form-item>
    <boss-form-item label="活动形式">
      <boss-input type="textarea" v-model="form.desc"></boss-input>
    </boss-form-item>
    <boss-form-item>
      <boss-button type="primary" @click="onSubmit">立即创建</boss-button>
      <boss-button>取消</boss-button>
    </boss-form-item>
  </boss-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    }
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}