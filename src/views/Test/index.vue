<template>
  <div>
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
      <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
      <li style="text-align:center" v-if="loading"><boss-icon name="loading"></boss-icon></li>
    </ul>
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