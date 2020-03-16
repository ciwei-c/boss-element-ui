<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="通过设置 Form 上的 size 属性可以使该表单内所有可调节大小的组件继承该尺寸。Form-Item 也具有该属性。"
  >
    <boss-form ref="form" :model="sizeForm" label-width="80px" size="mini" style="width:460px">
      <boss-form-item label="活动名称">
        <boss-input v-model="sizeForm.name"></boss-input>
      </boss-form-item>
      <boss-form-item label="活动区域">
        <boss-select v-model="sizeForm.region" placeholder="请选择活动区域">
          <boss-option label="区域一" value="shanghai"></boss-option>
          <boss-option label="区域二" value="beijing"></boss-option>
        </boss-select>
      </boss-form-item>
      <boss-form-item label="活动时间">
        <boss-col :span="11">
          <boss-date-picker
            type="date"
            placeholder="选择日期"
            v-model="sizeForm.date1"
            style="width: 100%;"
          ></boss-date-picker>
        </boss-col>
        <boss-col class="line" :span="2" style="text-align:center">-</boss-col>
        <boss-col :span="11">
          <boss-time-picker placeholder="选择时间" v-model="sizeForm.date2" style="width: 100%;"></boss-time-picker>
        </boss-col>
      </boss-form-item>
      <boss-form-item label="活动性质">
        <boss-checkbox-group v-model="sizeForm.type">
          <boss-checkbox-button label="美食/餐厅线上活动" name="type"></boss-checkbox-button>
          <boss-checkbox-button label="地推活动" name="type"></boss-checkbox-button>
          <boss-checkbox-button label="线下主题活动" name="type"></boss-checkbox-button>
        </boss-checkbox-group>
      </boss-form-item>
      <boss-form-item label="特殊资源">
        <boss-radio-group v-model="sizeForm.resource" size="medium">
          <boss-radio border label="线上品牌商赞助"></boss-radio>
          <boss-radio border label="线下场地免费"></boss-radio>
        </boss-radio-group>
      </boss-form-item>
      <boss-form-item size="large">
        <boss-button type="primary" @click="onSubmit">立即创建</boss-button>
        <boss-button>取消</boss-button>
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
      sizeForm: {
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
      console.log("submit!");
    }
  }
};
</script>