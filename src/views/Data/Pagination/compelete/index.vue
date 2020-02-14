<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :codeDesc="codeDesc"
    :code="code"
    desc="基础的分页用法。"
  >
    <div class="block">
      <span class="demonstration">显示总数</span>
      <boss-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000"
      ></boss-pagination>
    </div>
    <div class="block">
      <span class="demonstration">调整每页显示条数</span>
      <boss-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage2"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="sizes, prev, pager, next"
        :total="1000"
      ></boss-pagination>
    </div>
    <div class="block">
      <span class="demonstration">直接前往</span>
      <boss-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000"
      ></boss-pagination>
    </div>
    <div class="block">
      <span class="demonstration">完整功能</span>
      <boss-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></boss-pagination>
    </div>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  }
};
</script>
<style lang="scss" scoped>
.demonstration {
  margin: 10px 0;
  display: block;
}
</style>