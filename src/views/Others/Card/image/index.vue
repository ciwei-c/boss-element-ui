<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="可配置定义更丰富的内容展示。"
  >
    <boss-card :body-style="{ padding: '0px' }" style="width:236px" class="card__image">
      <img
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
      <div style="padding: 14px;margin-top:-5px">
        <span>Europe Street beat</span>
        <div style="font-size: 13px;color: #999;line-height:12px;margin-top:10px">www.instagram.com</div>
      </div>
    </boss-card>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>
<style>
.card__image img {
  width: 100%;
  display: block;
}
</style>