<template>
  <demo-sample-panel :title="anchor.title" :panel-id="anchor.id" :code="code" desc="表格分页数据" :codeDesc="codeDesc">
    <boss-table
      :pagination="pagination"
      :jsonReader="{'data':'data.list'}"
      url="/tables"
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
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      pagination: {
        total: 30,
        pageSizes: [10, 20, 50],
        pageSize: 10,
        currentPage: 1
      }
    };
  }
};
</script>

