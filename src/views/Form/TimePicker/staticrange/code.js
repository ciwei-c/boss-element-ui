let code = `<template>
  <boss-row>
    <boss-time-select
      placeholder="起始时间"
      v-model="startTime"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }"
    ></boss-time-select>
  </boss-row>
  <boss-row>
    <boss-time-select
      placeholder="结束时间"
      v-model="endTime"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
        minTime: startTime
      }"
    ></boss-time-select>
  </boss-row>
</template>
<script>
export default {
  data() {
    return {
      startTime: "",
      endTime: ""
    };
  }
};
</script>
`
export default {
  data() {
    return {
      code,
      codeDesc: "",
      anchor: {
        id: "staticrange",
        title: "固定时间范围"
      }
    }
  }
}