let code = `<template>
  <boss-progress style="margin-bottom: 20px;" :percentage="50"></boss-progress>
  <boss-progress style="margin-bottom: 20px;" :percentage="100" :format="format"></boss-progress>
  <boss-progress style="margin-bottom: 20px;" :percentage="100" status="success"></boss-progress>
  <boss-progress style="margin-bottom: 20px;" :percentage="100" status="warning"></boss-progress>
  <boss-progress style="margin-bottom: 20px;" :percentage="50" status="exception"></boss-progress>
</template>
<script>
export default {
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : \`\${percentage}%\`;
    }
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"Progress 组件设置percentage属性即可，表示进度条对应的百分比，必填，必须在 0-100。通过 format 属性来指定进度条文字内容。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}