let code = `<div>
  <span class="demonstration">页数较少时的效果</span>
  <boss-pagination
    layout="prev, pager, next"
    :total="50">
  </boss-pagination>
</div>
<div>
  <span class="demonstration">大于 7 页时的效果</span>
  <boss-pagination
    layout="prev, pager, next"
    :total="1000">
  </boss-pagination>
</div>`
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