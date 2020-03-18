<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="和 Dialog 组件一样, Drawer 同样可以在其内部嵌套各种丰富的操作"
  >
    <boss-button type="text" @click="table = true">打开嵌套表格的 Drawer</boss-button>
    <boss-button type="text" @click="dialog = true">打开嵌套 Form 的 Drawer</boss-button>
    <boss-drawer title="我嵌套了表格!" :visible.sync="table" direction="rtl" size="50%">
      <boss-table :data="gridData">
        <boss-table-column property="date" label="日期" width="150"></boss-table-column>
        <boss-table-column property="name" label="姓名" width="200"></boss-table-column>
        <boss-table-column property="address" label="地址"></boss-table-column>
      </boss-table>
    </boss-drawer>

    <boss-drawer
      title="我嵌套了 Form !"
      :before-close="handleClose"
      :visible.sync="dialog"
      direction="ltr"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <boss-form :model="form">
          <boss-form-item label="活动名称" :label-width="formLabelWidth">
            <boss-input v-model="form.name" autocomplete="off"></boss-input>
          </boss-form-item>
          <boss-form-item label="活动区域" :label-width="formLabelWidth">
            <boss-select v-model="form.region" placeholder="请选择活动区域">
              <boss-option label="区域一" value="shanghai"></boss-option>
              <boss-option label="区域二" value="beijing"></boss-option>
            </boss-select>
          </boss-form-item>
        </boss-form>
        <div class="demo-drawer__footer">
          <boss-button @click="cancelForm">取 消</boss-button>
          <boss-button
            type="primary"
            @click="$refs.drawer.closeDrawer()"
            :loading="loading"
          >{{ loading ? '提交中 ...' : '确 定' }}</boss-button>
        </div>
      </div>
    </boss-drawer>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      table: false,
      dialog: false,
      loading: false,
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
      ],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "80px",
      timer: null
    };
  },
  methods: {
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm("确定要提交表单吗？")
        .then(_ => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(_ => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }
  }
};
</script>