import { createVue, destroyVM } from '../util';

describe('Col', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <boss-col :span="12">
        </boss-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('boss-col')).to.be.true;
  });
  it('span', () => {
    vm = createVue({
      template: `
        <boss-col :span="12">
        </boss-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('boss-col-12')).to.be.true;
  });
  it('pull', () => {
    vm = createVue({
      template: `
        <boss-col :span="12" :pull="3">
        </boss-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('boss-col-pull-3')).to.be.true;
  });
  it('push', () => {
    vm = createVue({
      template: `
        <boss-col :span="12" :push="3">
        </boss-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('boss-col-push-3')).to.be.true;
  });
  it('gutter', () => {
    vm = createVue({
      template: `
        <boss-row :gutter="20">
          <boss-col :span="12" ref="col">
          </boss-col>
        </boss-row>
      `
    }, true);
    let colElm = vm.$refs.col.$el;
    expect(colElm.style.paddingLeft === '10px').to.be.true;
    expect(colElm.style.paddingRight === '10px').to.be.true;
  });
  it('responsive', () => {
    vm = createVue({
      template: `
        <boss-row :gutter="20">
          <boss-col ref="col" :sm="{ span: 4, offset: 2 }" :md="8" :lg="{ span: 6, offset: 3 }">
          </boss-col>
        </boss-row>
      `
    }, true);
    let colElm = vm.$refs.col.$el;
    expect(colElm.classList.contains('boss-col-sm-4')).to.be.true;
    expect(colElm.classList.contains('boss-col-sm-offset-2')).to.be.true;
    expect(colElm.classList.contains('boss-col-lg-6')).to.be.true;
    expect(colElm.classList.contains('boss-col-lg-offset-3')).to.be.true;
    expect(colElm.classList.contains('boss-col-md-8')).to.be.true;
  });
});
