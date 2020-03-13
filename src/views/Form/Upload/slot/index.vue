<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="使用 scoped-slot 去设置缩略图模版。"
  >
    <boss-upload action="#" list-type="picture-card" :auto-upload="false">
      <i slot="default" class="boss-icon-plus"></i>
      <div slot="file" slot-scope="{file}">
        <img class="boss-upload-list__item-thumbnail" :src="file.url" alt />
        <span class="boss-upload-list__item-actions">
          <span class="boss-upload-list__item-preview" @click="handlePictureCardPreview(file)">
            <i class="boss-icon-zoom-in"></i>
          </span>
          <span
            v-if="!disabled"
            class="boss-upload-list__item-delete"
            @click="handleDownload(file)"
          >
            <i class="boss-icon-download"></i>
          </span>
          <span v-if="!disabled" class="boss-upload-list__item-delete" @click="handleRemove(file)">
            <i class="boss-icon-delete"></i>
          </span>
        </span>
      </div>
    </boss-upload>
    <boss-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </boss-dialog>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false
    };
  },
  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    }
  }
};
</script>