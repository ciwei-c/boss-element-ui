export default {
  created() {
    let props = ["small", "background", "pageSize", "total", "pageCount", "pagerCount", "currentPage", "layout", "pageSizes", "popperClass", "prevText", "nextText", "disabled", "hideOnSinglePage"];
    let defaultValue = {
      layout:'sizes, prev, pager, next, jumper, ->, total',
      pageSize:10,
      currentPage:1,
      total:0
    }
    props.forEach(key=>{
      let val = defaultValue[key] || undefined
      if (this.pagination.hasOwnProperty(key)) {
        val = this.pagination[key]
      }
      this.$set(this.pageConfig, key, val)
    })
    this.addWatch(props)
  },
  methods:{
    addWatch(props){
      props.forEach(v=>{
        this.$watch(`pagination.${v}`, (newVal) => {
          if(newVal !== this[v]){
            this.pageConfig[v] = newVal
          }
        })
      })
    },
    setData(data){
      for (const key in data) {
        if (this.pagination.hasOwnProperty(key)) {
          this.pagination[key] = data[key]
        }
      }
    }
  },
  data() {
    return {
      pageConfig:{}
    }
  }
}