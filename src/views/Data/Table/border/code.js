let code = `<template>
  <boss-table
    :sourceData="tableData"
    border
  >
    <boss-table-column
      prop="name"
      label="姓名"
    ></boss-table-column>
    <boss-table-column
      prop="date"
      label="日期"
    ></boss-table-column>
    <boss-table-column prop="address" label="地址"></boss-table-column>
  </boss-table>
</template>
<script>
export default {
  data() {
    return {
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
    }
  }
};
</script>
`
export default {
  data() {
    return {
      code,
      desc:"有边框的网格",
      codeDesc:"设置 boss-table 的 border 属性",
      anchor: {
        id: "border",
        title: "边框"
      }
    }
  }
}