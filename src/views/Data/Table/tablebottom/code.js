let code = `<template>
  <boss-table
    :sourceData="tableData"
    border
    title="页头"
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
    <boss-table-column prop="age" label="年龄"></boss-table-column>
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
      desc:"显示表格的页尾",
      codeDesc:"设置 boss-table 的 bottom 属性或 bottom 具名插槽，显示表格的尾部",
      anchor: {
        id: "table-bottom",
        title: "页尾"
      }
    }
  }
}