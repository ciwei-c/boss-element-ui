<template>
  <demo-sample-panel :title="anchor.title" :panel-id="anchor.id" desc="编辑单元格快捷键" :code="code" :codeDesc="codeDesc">
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
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
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
  },
  created() {},
  methods: {}
};
</script>

