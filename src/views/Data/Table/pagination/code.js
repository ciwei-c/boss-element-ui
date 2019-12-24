let code = `<template>
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
</template>
<script>
export default {
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
`
export default {
  data() {
    return {
      code,
      codeDesc:"boss-table 配置 pagination 对象，具体配置项与 Pagination 分页组件一样",
      anchor: {
        id: "pagination",
        title: "表格分页"
      }
    }
  }
}