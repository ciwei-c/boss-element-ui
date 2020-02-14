let code = `<div>
  <boss-link :underline="false">无下划线</boss-link>
  <boss-link>有下划线</boss-link>
</div>`;
export default {
  data() {
    return {
      code,
      codeDesc: "",
      anchor: {
        id: "underline",
        title: "下划线"
      }
    };
  }
};
