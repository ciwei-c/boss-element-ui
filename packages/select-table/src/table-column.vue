<script>
import BossTableColumn from "boss-element-ui/packages/table-column"
export default {
  components:{BossTableColumn},
  props:{
    column:Object
  },
  render(){
    let $column = <boss-table-column></boss-table-column>

    Object.keys(this.column).forEach(prop => {
      let data = {}
      let camelCaseProp = this.getCamelCaseProp(prop)
      data[camelCaseProp] = this.column[prop]
      Object.assign($column.componentOptions.propsData, data);
    })

    return $column
  },
  methods:{
    getCamelCaseProp(prop){
      prop = prop.split("-").map((v,idx)=>{
        if(idx > 0) v = v[0].toUpperCase() + v.substring(1)
        return v
      }).join("")
      return prop
    }
  }
}
</script>