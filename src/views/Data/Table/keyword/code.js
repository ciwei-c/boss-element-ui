let code = `<template>
  <boss-table :sourceData="tableData" :editable="true" :keySpecEnabled="true">
    <boss-table-column 
      prop="date" 
      label="日期(可编辑)" 
      width="180" 
      :editable="true" 
      editWidget="date-picker"
    ></boss-table-column>
    <boss-table-column 
      prop="name" 
      label="姓名(可编辑)" 
      width="180" 
      :editable="true"
    ></boss-table-column>
    <boss-table-column 
      prop="address" 
      label="地址(自定义可编辑的单元格行列)"
      :editable="(row, index)=>{ return index % 2 === 0}"
    ></boss-table-column>
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
      codeDesc:"boss-table 设置 keySpecEnabled 为 true 开启编辑器快捷键，默认快捷键有上单元格 ctrl + up ，下单元格 ctrl + down ，左单元格 ctrl + left ，右单元格 ctrl + right ，前一个单元格 shift + tab ，后一个单元格 tab",
      anchor: {
        id: "keyword",
        title: "可编辑单元格操作快捷键"
      }
    }
  }
}