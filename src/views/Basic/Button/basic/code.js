let code = `<boss-row>
  <boss-button>默认按钮</boss-button>
  <boss-button type="primary">主要按钮</boss-button>
  <boss-button type="success">成功按钮</boss-button>
  <boss-button type="info">信息按钮</boss-button>
  <boss-button type="warning">警告按钮</boss-button>
  <boss-button type="danger">危险按钮</boss-button>
</boss-row>
<boss-row>
  <boss-button plain>朴素按钮</boss-button>
  <boss-button type="primary" plain>主要按钮</boss-button>
  <boss-button type="success" plain>成功按钮</boss-button>
  <boss-button type="info" plain>信息按钮</boss-button>
  <boss-button type="warning" plain>警告按钮</boss-button>
  <boss-button type="danger" plain>危险按钮</boss-button>
</boss-row>
<boss-row>
  <boss-button round>圆角按钮</boss-button>
  <boss-button type="primary" round>主要按钮</boss-button>
  <boss-button type="success" round>成功按钮</boss-button>
  <boss-button type="info" round>信息按钮</boss-button>
  <boss-button type="warning" round>警告按钮</boss-button>
  <boss-button type="danger" round>危险按钮</boss-button>
</boss-row>
<boss-row>
  <boss-button icon="boss-icon-search" circle></boss-button>
  <boss-button type="primary" icon="boss-icon-edit" circle></boss-button>
  <boss-button type="success" icon="boss-icon-check" circle></boss-button>
  <boss-button type="info" icon="boss-icon-message" circle></boss-button>
  <boss-button type="warning" icon="boss-icon-star-off" circle></boss-button>
  <boss-button type="danger" icon="boss-icon-delete" circle></boss-button>
</boss-row>`
export default {
  data(){
    return {
      code,
      anchor:{
        id:"basic",
        title:"基本用法"
      }
    }
  }
}