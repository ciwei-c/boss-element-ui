let code = `<template>
  <div style="margin-bottom:10px">
    <boss-radio-group v-model="reverse">
      <boss-radio :label="true">倒序</boss-radio>
      <boss-radio :label="false">正序</boss-radio>
    </boss-radio-group>
  </div>
  <boss-timeline :reverse="reverse">
    <boss-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.timestamp"
    >{{activity.content}}</boss-timeline-item>
  </boss-timeline>
</template>
<script>
export default {
  data() {
    return {
      reverse: true,
      activities: [
        {
          content: "活动按期开始",
          timestamp: "2018-04-15"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "创建成功",
          timestamp: "2018-04-11"
        }
      ]
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}