let code = `<template>
<div>
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
</div>
</template>
<script>
export default {
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
`
export default {
  data() {
    return {
      code,
      desc:"通过设置的 url 地址发送请求获取数据来渲染表格，需要配置 jsonReader 来设置, auto-load 设置为false",
      codeDesc:"auto-load 设置为false，调用 reload 方法",
      anchor: {
        id: "reload",
        title: "手动加载远程url"
      }
    }
  }
}