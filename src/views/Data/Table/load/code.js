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
        currentPage: 2
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
      desc:"通过设置的 url 地址发送请求获取数据来渲染表格，需要配置 jsonReader 来设置",
      codeDesc:"boss-table 设置 url 属性，jsonReader 接受对象，表示由 url 返回的数据在表格渲染中如何解析，表格默认 data 为数据源字段，total 为分页总条数字段，可动态配置返回值哪些字段映射为 data 和 total",
      anchor: {
        id: "load",
        title: "远程url"
      }
    }
  }
}