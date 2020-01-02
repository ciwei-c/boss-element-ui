<template>
  <demo-sample-panel :title="anchor.title" :panel-id="anchor.id" :code="code" desc="loading 的局部用法" :codeDesc="codeDesc">
    <boss-table v-loading="loading" :sourceData="tableData" style="width: 100%">
      <boss-table-column prop="date" label="日期" width="180"></boss-table-column>
      <boss-table-column prop="name" label="姓名" width="180"></boss-table-column>
      <boss-table-column prop="address" label="地址"></boss-table-column>
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
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      loading: true
    };
  }
};
</script>
