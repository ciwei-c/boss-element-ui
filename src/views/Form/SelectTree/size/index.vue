<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="尺寸参考 Input 组件"
  >
    <boss-row>
      <boss-row>默认尺寸</boss-row>
      <boss-select-tree :data="data" node-key="label" v-model="value" placeholder="请从树中选择数据" />
    </boss-row>
    <boss-row>
      <boss-row>大尺寸</boss-row>
      <boss-select-tree
        :data="data"
        node-key="label"
        v-model="value"
        placeholder="请从树中选择数据"
        size="medium"
      />
    </boss-row>
    <boss-row>
      <boss-row>小尺寸</boss-row>
      <boss-select-tree
        :data="data"
        node-key="label"
        v-model="value"
        placeholder="请从树中选择数据"
        size="small"
      />
    </boss-row>
    <boss-row>
      <boss-row>迷你尺寸</boss-row>
      <boss-select-tree
        :data="data"
        node-key="label"
        v-model="value"
        placeholder="请从树中选择数据"
        size="mini"
      />
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      value: "一级 1",
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>