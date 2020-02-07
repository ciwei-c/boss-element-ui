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
      codeDesc:"colors 自定义颜色",
      anchor:{
        id:"color",
        title:"颜色"
      }
    }
  }
}