let code = `<template>
  <boss-time-picker
    is-range
    v-model="value1"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围"
  ></boss-time-picker>
  <boss-time-picker
    is-range
    arrow-control
    v-model="value2"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围"
  ></boss-time-picker>
</template>
<script>
export default {
  data() {
    return {
      value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"添加is-range属性即可选择时间范围，同样支持arrow-control属性。",
      anchor:{
        id:"anyrange",
        title:"任意时间范围"
      }
    }
  }
}