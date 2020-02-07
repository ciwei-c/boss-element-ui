let code = `<template>
  <boss-table :sourceData="tableData">
    <boss-table-column prop="date" label="日期" width="180"></boss-table-column>
    <boss-table-column prop="name" label="姓名" width="180"></boss-table-column>
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
      codeDesc:"当 boss-table 元素中注入 data 对象数组后，在 boss-table-column 中用 prop 属性来对应对象中的键名即可填入数据，用 label 属性来定义表格的列名。可以使用 width 属性来定义列宽。",
      anchor: {
        id: "filter",
        title: "筛选"
      }
    }
  }
}