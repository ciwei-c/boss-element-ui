<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。"
  >
    <boss-popover placement="right-start" width="400" trigger="click">
      <boss-table :sourceData="gridData">
        <boss-table-column width="150" property="date" label="日期"></boss-table-column>
        <boss-table-column width="100" property="name" label="姓名"></boss-table-column>
        <boss-table-column width="300" property="address" label="地址"></boss-table-column>
      </boss-table>
      <boss-button slot="reference">click 激活</boss-button>
    </boss-popover>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  }
};
</script>