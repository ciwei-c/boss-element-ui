let code = `<template>
  <boss-select v-model="value" clearable  placeholder="请选择">
    <boss-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></boss-option>
  </boss-select>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
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
      codeDesc:"设置clearable属性，则可将选择器清空。需要注意的是，clearable属性仅适用于单选。 ",
      anchor:{
        id:"clearable",
        title:"可清除的"
      }
    }
  }
}