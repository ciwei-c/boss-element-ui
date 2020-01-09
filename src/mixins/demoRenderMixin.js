import Vue from 'vue'
import Store from "@/store"

export default {
  render(){
    return (
      <div></div>
    )
  },
  watch:{
    $route(){
      this.render()
    }
  },
  mounted(){
    this.render()
  },
  methods:{
    render(){
      this.$nextTick(()=>{
        let anchors = []
        this.store = this.$store
        this.$el.innerHTML = ""
        this.$store.commit("SET_ANCHORS", [])
        this.childrens.forEach(children=>{
          this.$el.appendChild(children.$el)
          anchors.push(children.anchor)
        })
        this.$store.commit("SET_ANCHORS", anchors)
      })
    }
  },
  computed:{
    childrens(){
      let { fileSource, files } = this.$store.state.app
      fileSource = `./${fileSource}/`
      let vnodes = []
      files.keys().filter(key=>{
        return key.startsWith(fileSource)
      }).forEach(key=>{
        files(key).default.store = this.$store
        vnodes.push(new Vue(files(key).default).$mount())
      })
      return vnodes
    }
  }
}