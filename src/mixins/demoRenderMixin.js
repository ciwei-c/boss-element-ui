import Vue from 'vue'

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
      let vnodes = []
      files.keys().filter(key=>{
        return key.indexOf(fileSource) > -1
      }).forEach(key=>{
        vnodes.push(new Vue(files(key).default).$mount())
      })
      return vnodes
    }
  }
}