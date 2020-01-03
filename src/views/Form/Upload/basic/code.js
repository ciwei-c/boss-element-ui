let code = `<template>
  <boss-upload
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    multiple
    :limit="3"
    :on-exceed="handleExceed"
    :file-list="fileList"
  >
    <boss-button size="small" type="primary">点击上传</boss-button>
    <div slot="tip" class="boss-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </boss-upload>
</template>
<script>
export default {
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        \`当前限制选择 3 个文件，本次选择了 \${
          files.length
        } 个文件，共选择了 \${files.length + fileList.length} 个文件\`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(\`确定移除 \${file.name}？\`);
    }
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"通过 slot 你可以传入自定义的上传按钮类型和文字提示。可通过设置limit和on-exceed来限制上传文件的个数和定义超出限制时的行为。可通过设置before-remove来阻止文件移除操作。",
      anchor:{
        id:"basic",
        title:"点击上传"
      }
    }
  }
}