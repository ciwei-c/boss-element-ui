let code = `<template>
  <boss-select
    v-model="value"
    multiple
    filterable
    allow-create
    default-first-option
    placeholder="请选择文章标签"
  >
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
          value: "HTML",
          label: "HTML"
        },
        {
          value: "CSS",
          label: "CSS"
        },
        {
          value: "JavaScript",
          label: "JavaScript"
        }
      ],
      value: []
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"使用allow-create属性即可通过在输入框中输入文字来创建新的条目。注意此时filterable必须为真。本例还使用了default-first-option属性，在该属性打开的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。",
      anchor:{
        id:"create",
        title:"创建不存在的选项"
      }
    }
  }
}