let code = `<template>
  <boss-table :sourceData="tableData" :editable="true">
    <boss-table-column 
      prop="date" 
      label="日期(可编辑)" 
      width="180" 
      :editable="true" 
      :editWidgetProps="{
        'value-format':'yyyy-MM-dd'
      }"
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
    };
  }
};
</script>
`
export default {
  data() {
    return {
      code,
      codeDesc:"boss-table 设置 editable 的值为 true，该属性为表格的编辑总开关，boss-table-column 设置 editable 值可开启当前列是否可编辑，接受回调方法 (row,index)=>{} 与布尔值，返回值或布尔值为 true 时开启编辑，editWidget 值设置当前单元格使用哪种控件编辑，editWidgetProps 可设置控件的属性值",
      anchor: {
        id: "editable",
        title: "可编辑单元格"
      }
    }
  }
}