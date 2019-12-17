<template>
  <div class="boss-table__pagination">
    <boss-pagination
      :small="pageConfig.small"
      :background="pageConfig.background"
      :pageSize="pageConfig.pageSize"
      :total="pageConfig.total"
      :pageCount="pageConfig.pageCount"
      :pagerCount="pageConfig.pagerCount"
      :currentPage="pageConfig.currentPage"
      :layout="pageConfig.layout"
      :pageSizes="pageConfig.pageSizes"
      :popperClass="pageConfig.popperClass"
      :prevText="pageConfig.prevText"
      :nextText="pageConfig.nextText"
      :hideOnSinglePage="pageConfig.hideOnSinglePage"
      @size-change="onSizeChange"
      @current-change="onCurrentChange"
      @prev-click="onPrevClick"
      @next-click="onNextClick"
    ></boss-pagination>
  </div>
</template>
<script>
import BossPagination from "bosssoft-ui/packages/pagination";
import property from "./property";
export default {
  name: "BossTablePagination",
  mixins: [property],
  props: {
    table: Object,
    store: Object,
    pagination: Object
  },
  components: {
    BossPagination
  },
  methods: {
    emit(event, v) {
      this.table.$emit(event, v);
      this.setData(v);
      this.table.getDataByUrl();
    },
    onSizeChange(pageSize) {
      this.emit("table-size-change", { pageSize });
    },
    onCurrentChange(currentPage) {
      this.emit("table-current-change", { currentPage });
    },
    onPrevClick(currentPage) {
      this.emit("table-prev-click", { currentPage });
    },
    onNextClick(currentPage) {
      this.emit("table-next-click", { currentPage });
    }
  }
};
</script>