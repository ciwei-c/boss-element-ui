let code = `<template>
  <boss-select v-model="value" placeholder="请选择">
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
      codeDesc:"为boss-select设置multiple属性即可启用多选，此时v-model的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置collapse-tags属性将它们合并为一段文字。",
      anchor:{
        id:"multiselect",
        title:"多选"
      }
    }
  }
}