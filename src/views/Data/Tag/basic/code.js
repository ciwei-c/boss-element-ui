let code = `<boss-tag>标签一</boss-tag>
<boss-tag type="success">标签二</boss-tag>
<boss-tag type="info">标签三</boss-tag>
<boss-tag type="warning">标签四</boss-tag>
<boss-tag type="danger">标签五</boss-tag>`
export default {
  data(){
    return {
      code,
      codeDesc:"",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}