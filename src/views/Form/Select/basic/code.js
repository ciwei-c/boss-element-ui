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
      codeDesc:"v-model 的值为当前被选中的 el-option 的 value 属性值",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}