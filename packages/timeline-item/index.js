import BossTimelineItem from '../timeline/src/item';

/* istanbul ignore next */
BossTimelineItem.install = function(Vue) {
  Vue.component(BossTimelineItem.name, BossTimelineItem);
};

export default BossTimelineItem;
