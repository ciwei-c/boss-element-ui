let code = `<div>
  <boss-link style="margin-right:10px">默认链接</boss-link>
  <boss-link style="margin-right:10px" type="primary">主要链接</boss-link>
  <boss-link style="margin-right:10px" type="success">成功链接</boss-link>
  <boss-link style="margin-right:10px" type="warning">警告链接</boss-link>
  <boss-link style="margin-right:10px" type="danger">危险链接</boss-link>
  <boss-link style="margin-right:10px" type="info">信息链接</boss-link>
</div>`
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