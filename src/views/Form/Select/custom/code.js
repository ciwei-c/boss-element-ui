let code = `<template>
  <boss-select v-model="value" placeholder="请选择">
    <boss-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </boss-option>
  </boss-select>
</template>
<script>
export default {
  data() {
    return {
      cities: [
        {
          value: "Beijing",
          label: "北京"
        },
        {
          value: "Shanghai",
          label: "上海"
        },
        {
          value: "Nanjing",
          label: "南京"
        },
        {
          value: "Chengdu",
          label: "成都"
        },
        {
          value: "Shenzhen",
          label: "深圳"
        },
        {
          value: "Guangzhou",
          label: "广州"
        }
      ],
      value: ""
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"将自定义的 HTML 模板插入el-option的 slot 中即可。",
      anchor:{
        id:"custom",
        title:"自定义模板"
      }
    }
  }
}