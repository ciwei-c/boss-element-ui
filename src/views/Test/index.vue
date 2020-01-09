<template>
  <div>
    <boss-download data="./index.vue" filename="download.vue">
      <boss-button>点击下载</boss-button>
    </boss-download>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 10,
        loading:false
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.count += 10
        }, 1000);
      }
    }
  }
</script>
<style lang="scss">
.infinite-list {
  height: 300px;
  overflow: hidden;
  .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #e8f3fe;
    margin: 10px 0;
    color: #7dbcfc;
  }
}
</style>