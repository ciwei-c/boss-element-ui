import request from './request'
export default {
  props: {
    jsonReader: Object,
    autoLoad: {
      type:Boolean,
      default:true
    },
    queryParams:{
      type:Object,
      default(){
        return {
          index:1,
          size:10
        }
      }
    },
    beforeLoad:Function
  },
  data() {
    return {
      defaultJsonReader: {
        total: 'total', // 总数据条数
        data: 'data'    // 表格读取字段
      }
    }
  },
  computed: {
    enableLoadUrl() {
      return !this.sourceData && this.url
    }
  },
  created() {
    this.store.commit('setData', []);
    if( this.autoLoad ){

      let pagination = this.pagination
      let { size = 10, index = 1 } = this.queryParams

      if(index && index !== pagination.currentPage) pagination.currentPage = index
      if(size && size !== pagination.pageSize) pagination.pageSize = size

      this.getDataByUrl({
        index,
        size
      })
    }
  },
  methods: {
    getDataByUrl(params = { index:this.pagination.currentPage, size: this.pagination.pageSize }) {
      if (this.enableLoadUrl) {
        if(this.beforeLoad && typeof this.beforeLoad === 'function' && this.beforeLoad() === false) return
        request({
          url: this.url,
          params
        }).then(data => {
          this.$emit("on-load-success")
          let jsonReader = Object.assign(this.defaultJsonReader, this.jsonReader)
          this.pagination.total = this.findDataByJsonReader(jsonReader.total, data)
          this.data = this.findDataByJsonReader(jsonReader.data, data)
          this.$nextTick(()=>{
            setTimeout(() => {
              this.$emit("after-data-render")
            });
          })
        }).catch(e=>{
          console.log(e)
        })
      }
    },
    findDataByJsonReader(jsonReaderProp, sourceData) {
      let data
      try {
        let props = jsonReaderProp.split(".")
        props.forEach(k=>{
          if(data) {
            data = data[k]
          }else{
            data = sourceData[k]
          }
        })
      } catch (error) {

      }
      return data
    }
  }
}