<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc
  >
    <boss-upload
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
    >
      <i class="boss-icon-upload"></i>
      <div class="boss-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div class="boss-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </boss-upload>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>