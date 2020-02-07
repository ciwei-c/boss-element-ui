let code = `<template>
  <boss-table :sourceData="tableData">
    <boss-table-column type="selection"></boss-table-column>
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
      codeDesc:"提供了单选的支持，只需要在 boss-table 标签配置 highlight-current-row 属性即可实现单选。之后由 current-change 事件来管理选中时触发的事件，它会传入currentRow，oldCurrentRow。如果需要显示索引，可以增加一列 boss-table-column，设置 type 属性为 index 即可显示从 1 开始的索引号",
      anchor: {
        id: "selection",
        title: "单选"
      }
    }
  }
}