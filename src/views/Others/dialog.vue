<template>
  <div>
    <boss-button type="text" @click="dialogVisible = true">点击打开 Dialog</boss-button>
    <boss-dialog title="提示" :visible.sync="dialogVisible" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <boss-button size="small" @click="dialogVisible = false">取 消</boss-button>
        <boss-button size="small" type="primary" @click="dialogVisible = false">确 定</boss-button>
      </span>
    </boss-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      done()
    }
  }
};
</script>