let code = `<template>
  <boss-pagination
    small
    :page-sizes="[10, 100, 200, 300, 400]"
    :page-size="10"
    layout="total, sizes, prev, pager, next, jumper"
    :total="400"
  ></boss-pagination>
</template>`
export default {
  data(){
    return {
      code,
      anchor:{
        id:"small",
        title:"小型分页"
      }
    }
  }
}