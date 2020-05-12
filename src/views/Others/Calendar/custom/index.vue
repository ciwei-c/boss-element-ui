<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc
  >
    <boss-calendar>
      <template slot="dateCell" slot-scope="{date, data}">
        <div>{{ data.day.split('-').slice(1).join('-') }}</div>
        <div
          v-if="data.day.endsWith('5')"
          :class="data.isSelected ? 'is-selected calendar__custom' : 'calendar__custom'"
        >
          <div v-for="i in 5" :key="i">
            <span
              :style="{ background:['#ff4d4f', '#ccc', '#52c41a', '#faad14' , '#1890ff'][i - 1]}"
            ></span>
            <div>待办事件{{i}}</div>
          </div>
        </div>
      </template>
    </boss-calendar>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>
<style>
.calendar__custom {
  height: calc(100% - 19px);
  width: 100%;
  overflow: auto;
  text-align: left;
}
.calendar__custom > div {
  margin: 8px 0;
  display: flex;
  color: rgba(0, 0, 0, 0.65);
  align-items: center;
}
.calendar__custom > div > span {
  height: 5px;
  width: 5px;
  border-radius: 50%;
  margin-right: 5px;
}
.calendar__custom > div > div {
  flex: 1;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  width: 0;
}
.is-selected {
  color: #1989fa;
}
</style>