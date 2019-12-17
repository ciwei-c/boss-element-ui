<template>
  <div class="app">
    <div class="nav">
      <div class="nav-group" v-for="(v,k) in navs" :key="k">
        {{k}}
        <router-link
          class="nav-item"
          v-for="nav in v"
          :key="nav.route"
          :to="nav.route"
        >{{nav.title}}</router-link>
      </div>
    </div>
    <div class="router">
      <h2>{{title}}</h2>
      <p>{{desc}}</p>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      desc: "",
      navs: {
        Basic: [
          {
            route: "/button",
            title: "Button 按钮",
            desc: "常用的操作按钮。"
          }
        ],
        Form: [
          {
            route: "/input",
            title: "Input 输入框",
            desc: "通过鼠标或键盘输入字符"
          },
          {
            route: "/checkbox",
            title: "Checkbox 多选框",
            desc: "一组备选项中进行多选"
          },
          {
            route: "/radio",
            title: "Radio 单选框",
            desc: "一组备选项中进行单选"
          },
          {
            route: "/select",
            title: "Select 选择器",
            desc: "当选项过多时，使用下拉菜单展示并选择内容。"
          },
          {
            route: "/date-picker",
            title: "DatePicker 选择器",
            desc: "用于选择或输入日期"
          },
          {
            route: "/time-picker",
            title: "TimePicker 选择器",
            desc: "用于选择或输入时间"
          },
          {
            route: "/date-time-picker",
            title: "DateTimePicker 日期时间选择器",
            desc: "在同一个选择器里选择日期和时间"
          }
        ],
        Data: [
          {
            route: "/table",
            title: "Table 表格",
            desc:"用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。"
          },
          {
            route: "/tag",
            title: "Tag 标签",
            desc: "用于标记和选择。"
          },
          {
            route: "/pagination",
            title: "Pagination 分页",
            desc: "当数据量过多时，使用分页分解数据。"
          }
        ]
      }
    };
  },
  watch: {
    $route({ path }) {
      for (const key in this.navs) {
        let navs = this.navs[key];
        for (let i = 0; i < navs.length; i++) {
          let { route, title, desc } = navs[i];
          if (path === route) {
            this.title = title;
            this.desc = desc;
            return;
          }
        }
      }
    }
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.no-scrollbar {
  ::-webkit-scrollbar {
    width: 0px !important;
    background-color: transparent;
  }
}
</style>
<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 4px;
  background-color: transparent;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background: #ccc;
}
$navWidth: 300px;
.app {
  .nav {
    position: fixed;
    width: $navWidth;
    padding: 0 20px;
    height: 100%;
    overflow: auto;
    > div {
      position: relative;
    }
    &-group {
      font-size: 12px;
      color: #999;
      line-height: 26px;
      margin-top: 15px;
    }
    &-item {
      cursor: pointer;
      display: block;
      height: 40px;
      color: #444;
      line-height: 40px;
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 400;
    }
    &-group:last-child {
      padding-bottom: 100px;
    }
    &-item:hover {
      color: #409eff;
    }
  }
  .router {
    margin: 20px 20px 20px $navWidth;
    h2 {
      font-weight: 400;
      color: #1f2f3d;
    }
    p {
      font-size: 14px;
      color: #5e6d82;
      margin: 10px 0;
    }
  }
}
</style>