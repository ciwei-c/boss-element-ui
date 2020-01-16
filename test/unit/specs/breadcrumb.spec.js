import { createVue, destroyVM } from '../util';

describe('Breadcrumb', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue(`
      <boss-breadcrumb separator=">">
        <boss-breadcrumb-item to="/">首页</boss-breadcrumb-item>
        <boss-breadcrumb-item>活动管理</boss-breadcrumb-item>
        <boss-breadcrumb-item>活动列表</boss-breadcrumb-item>
        <boss-breadcrumb-item>活动详情</boss-breadcrumb-item>
      </boss-breadcrumb>
    `);
    vm.$nextTick(_ => {
      expect(vm.$el.querySelector('.boss-breadcrumb__separator').innerText).to.equal('>');
      done();
    });
  });
});
