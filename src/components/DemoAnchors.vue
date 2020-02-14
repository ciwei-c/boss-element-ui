<template>
  <boss-scrollbar class="boss-ui-demo__anchor-scroll">
    <div class="boss-ui-demo__anchor">
      <div class="boss-ui-demo__anchor-ul">
        <div
          v-for="(anchor,idx) in anchors"
          :key="idx"
          :class="{
          'boss-ui-demo__anchor-link':true,
          'boss-ui-demo__anchor-link--active':anchor.id === active,
        }"
        >
          <div
            class="boss-ui-demo__anchor-link-title"
            @click="onClickAnchor(anchor.id)"
          >{{anchor.title}}</div>
        </div>
      </div>
    </div>
  </boss-scrollbar>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: {
    scrollWrapCls: String
  },
  watch: {
    $route() {
      document
        .querySelector(".boss-ui-demo__scrollbar__wrap.boss-scrollbar__wrap")
        .scrollTo(0, 0);
      this.active = "";
      this.$nextTick(() => {
        setTimeout(() => {
          this.collectTarget();
          this.scrollWrap.onscroll = () => {
            if (this.tortoise) return;
            this.tortoise = setTimeout(() => {
              let targetId;
              this.targets.forEach(({ id, el, top }, index) => {
                if (this.getRelativeTop(id) < 100) targetId = id;
              });
              this.active = targetId;
              clearTimeout(this.tortoise);
              this.tortoise = null;
            }, 30);
          };
        }, 300);
      });
    }
  },
  mounted() {},
  computed: {
    scrollWrap() {
      return document.querySelector(this.scrollWrapCls);
    },
    ...mapState({
      anchors: state => {
        return state.app.anchors.concat({
          id: "api",
          title: "API"
        });
      }
    })
  },
  destroyed() {
    document.querySelector(this.scrollWrapCls).onscroll = null;
  },
  data() {
    return {
      active: "",
      targets: [],
      tortoise: null
    };
  },
  methods: {
    collectTarget() {
      this.targets = [];
      this.anchors.forEach(({ id }) => {
        let el = document.getElementById(id);
        this.targets.push({
          id,
          el,
          top: this.getRelativeTop(id)
        });
      });
    },
    getRelativeTop(id) {
      let top;
      try {
        top =
          document.getElementById(id).getBoundingClientRect().top -
          document.querySelector(".boss-ui-demo__header").offsetHeight -
          50;
      } catch (error) {
        top = 0;
      }
      return top;
    },
    onClickAnchor(id) {
      try {
        document.getElementById(id).scrollIntoView(true);
        setTimeout(() => {
          this.active = id;
        }, 60);
      } catch (error) {}
    }
  }
};
</script>
<style lang="scss" scoped>
.boss-ui-demo__anchor-scroll {
  position: fixed;
  height: calc(100% - 200px);
  width: 200px;
  right: 20px;
  top: 125px;
}
.boss-ui-demo__anchor {
  width: 200px;
  // top: 120px;
  &-ul {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    padding-left: 2px;
  }
  &-link {
    padding: 7px 0 7px 16px;
    border-left: 2px solid #ccc;
    transition: 0.3s;
    color: rgba(0, 0, 0, 0.65);
    &--active {
      color: #1890ff;
      border-left: 2px solid #1890ff;
    }
    &-title {
      position: relative;
      font-size: 12px;
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        color: #1890ff;
      }
    }
  }
}
</style>