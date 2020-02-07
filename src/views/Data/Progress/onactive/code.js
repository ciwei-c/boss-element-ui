let code = `<template>
  <boss-progress style="margin-bottom: 20px;" :percentage="50" active></boss-progress>
  <boss-progress style="margin-bottom: 20px;" :percentage="50" active status="exception"></boss-progress>
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
      codeDesc:"设置 active 属性，表示该进度条正在活动。",
      anchor:{
        id:"onactive",
        title:"正在活动的进度条"
      }
    }
  }
}