<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="Timeline 可拆分成多个按照时间戳正序或倒序排列的 activity，时间戳是其区分于其他控件的重要特征，使⽤时注意与 Steps 步骤条等区分。"
  >
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
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
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