let code = `<template>
  <boss-select v-model="value" placeholder="请选择">
    <boss-option-group v-for="group in options" :key="group.label" :label="group.label">
      <boss-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></boss-option>
    </boss-option-group>
  </boss-select>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: "热门城市",
          options: [
            {
              value: "Shanghai",
              label: "上海"
            },
            {
              value: "Beijing",
              label: "北京"
            }
          ]
        },
        {
          label: "城市名",
          options: [
            {
              value: "Chengdu",
              label: "成都"
            },
            {
              value: "Shenzhen",
              label: "深圳"
            },
            {
              value: "Guangzhou",
              label: "广州"
            },
            {
              value: "Dalian",
              label: "大连"
            }
          ]
        }
      ],
      value: ""
    };
  }
};
</script>
`
export default {
  data() {
    return {
      code,
      codeDesc: "使用boss-option-group对备选项进行分组，它的label属性为分组名",
      anchor: {
        id: "group",
        title: "分组"
      }
    }
  }
}