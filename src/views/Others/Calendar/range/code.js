let code = `<template>
  <boss-calendar :range="['2019-03-04', '2019-03-24']"></boss-calendar>
</template>
`
export default {
  data(){
    return {
      code,
      codeDesc:"设置 range 属性指定日历的显示范围。开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。",
      anchor:{
        id:"range",
        title:"自定义范围"
      }
    }
  }
}