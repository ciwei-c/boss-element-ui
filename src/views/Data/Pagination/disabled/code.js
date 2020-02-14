let code = `<template>
  <boss-pagination
    :page-sizes="[100, 200, 300, 400]"
    :page-size="100"
    disabled
    layout="total, sizes, prev, pager, next, jumper"
    :total="400">
  </boss-pagination>
</template>`
export default {
  data(){
    return {
      code,
      anchor:{
        id:"disabled",
        title:"禁用"
      }
    }
  }
}