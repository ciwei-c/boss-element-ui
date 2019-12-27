let code = `<template>
  <boss-time-select
    v-model="value"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }"
    placeholder="选择时间"
  ></boss-time-select>
</template>
<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"分别通过 start、end 和 step 指定可选的起始时间、结束时间和步长",
      anchor:{
        id:"basic",
        title:"固定时间点"
      }
    }
  }
}