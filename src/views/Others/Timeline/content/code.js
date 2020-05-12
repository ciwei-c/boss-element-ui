let code = `<template>
  <boss-timeline>
    <boss-timeline-item timestamp="2018/4/12" placement="top">
      <boss-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/12 20:46</p>
      </boss-card>
    </boss-timeline-item>
    <boss-timeline-item timestamp="2018/4/3" placement="top">
      <boss-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/3 20:46</p>
      </boss-card>
    </boss-timeline-item>
    <boss-timeline-item timestamp="2018/4/2" placement="top">
      <boss-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/2 20:46</p>
      </boss-card>
    </boss-timeline-item>
  </boss-timeline>
</template>
`
export default {
  data(){
    return {
      code,
      codeDesc:"",
      anchor:{
        id:"content",
        title:"⾃定义时间戳"
      }
    }
  }
}