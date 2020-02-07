let code = `<template>
  <div>
    <p>设置 select-on-click-row 属性，设置是否可以点击整行来选中该行</p>
    <boss-button style="margin-bottom:10px" @click="selectOnClickRow = !selectOnClickRow">{{!selectOnClickRow?'开启':'关闭'}}点击整行可选中</boss-button>
    <boss-table :sourceData="tableData">
      <boss-table-column type="selection"></boss-table-column>
      <boss-table-column prop="date" label="日期" width="180"></boss-table-column>
      <boss-table-column prop="name" label="姓名" width="180"></boss-table-column>
      <boss-table-column prop="address" label="地址"></boss-table-column>
    </boss-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectOnClickRow:false,
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
      codeDesc:"boss-table-column 标签设置 type 属性为 selection 即可实现多选，boss-table 标签设置 select-on-click-row 开启或关闭点击整行可设置该行的选中状态",
      anchor: {
        id: "multiselection",
        title: "多选"
      }
    }
  }
}