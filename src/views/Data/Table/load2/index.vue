<template>
  <demo-sample-panel :title="anchor.title" :panel-id="anchor.id" :code="code" :codeDesc="codeDesc" :desc="desc">
    <boss-button @click="$refs.table.reload()">点击加载表格数据</boss-button>
    <boss-table
      :pagination="pagination"
      :jsonReader="{'data':'data.list'}"
      :auto-load="false"
      url="/tables"
      ref="table"
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
        total: 0,
        pageSizes: [10],
        pageSize: 10,
        currentPage: 1
      }
    };
  }
};
</script>

