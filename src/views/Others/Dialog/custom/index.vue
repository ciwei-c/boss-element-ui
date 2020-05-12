<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 Element Table 和 Form 组件的两个样例。"
  >
    <!-- Table -->
    <boss-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</boss-button>

    <boss-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <boss-table :data="gridData">
        <boss-table-column property="date" label="日期" width="150"></boss-table-column>
        <boss-table-column property="name" label="姓名" width="200"></boss-table-column>
        <boss-table-column property="address" label="地址"></boss-table-column>
      </boss-table>
    </boss-dialog>

    <!-- Form -->
    <boss-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</boss-button>

    <boss-dialog title="收货地址" :visible.sync="dialogFormVisible">
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
      <div slot="footer" class="dialog-footer">
        <boss-button @click="dialogFormVisible = false">取 消</boss-button>
        <boss-button type="primary" @click="dialogFormVisible = false">确 定</boss-button>
      </div>
    </boss-dialog>
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
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
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
      formLabelWidth: "120px"
    };
  }
};
</script>