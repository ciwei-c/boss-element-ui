let code = `<template>
  <boss-progress style="margin-bottom: 20px;" type='circle' :percentage="50"></boss-progress>
  <boss-progress style="margin-bottom: 20px;" type='circle' :percentage="100" status="success"></boss-progress>
  <boss-progress style="margin-bottom: 20px;" type='circle' :percentage="50" status="exception"></boss-progress>
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
      codeDesc:"设置 type 为 circle 使用环形进度条",
      anchor:{
        id:"circle",
        title:"环形进度条"
      }
    }
  }
}