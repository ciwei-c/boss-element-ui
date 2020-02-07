let code = `<template>
<boss-row>
  <boss-row>
    <boss-radio v-model="size" label="">无</boss-radio>
    <boss-radio v-model="size" label="medium">中尺寸</boss-radio>
    <boss-radio v-model="size" label="small">小尺寸</boss-radio>
    <boss-radio v-model="size" label="mini">迷你尺寸</boss-radio>
  </boss-row>
  <boss-table :sourceData="tableData" :size="size">
    <boss-table-column prop="date" label="日期" width="180"></boss-table-column>
    <boss-table-column prop="name" label="姓名" width="180"></boss-table-column>
    <boss-table-column prop="address" label="地址"></boss-table-column>
  </boss-table>
</boss-row>
</template>
<script>
  export default {
  data() {
    return {
      size:"",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  created() {},
  methods: {}
  };
</script>
`
export default {
  data() {
    return {
      code,
      codeDesc:"boss-table 标签设置 size 属性切换尺寸",
      anchor: {
        id: "size",
        title: "不同尺寸"
      }
    }
  }
}