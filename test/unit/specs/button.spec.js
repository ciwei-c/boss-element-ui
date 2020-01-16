import { createTest, createVue, destroyVM } from '../util';
import Button from 'packages/button';

describe('Button', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Button, {
      type: 'primary'
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('boss-button--primary')).to.be.true;
  });
  it('icon', () => {
    vm = createTest(Button, {
      icon: 'boss-icon-search'
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.querySelector('.boss-icon-search')).to.be.ok;
  });
  it('nativeType', () => {
    vm = createTest(Button, {
      nativeType: 'submit'
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.getAttribute('type')).to.be.equal('submit');
  });
  it('loading', () => {
    vm = createTest(Button, {
      loading: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-loading')).to.be.true;
    expect(buttonElm.querySelector('.boss-icon-loading')).to.be.ok;
  });
  it('disabled', () => {
    vm = createTest(Button, {
      disabled: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-disabled')).to.be.true;
  });
  it('size', () => {
    vm = createTest(Button, {
      size: 'medium'
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('boss-button--medium')).to.be.true;
  });
  it('plain', () => {
    vm = createTest(Button, {
      plain: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-plain')).to.be.true;
  });
  it('round', () => {
    vm = createTest(Button, {
      round: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-round')).to.be.true;
  });
  it('circle', () => {
    vm = createTest(Button, {
      circle: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-circle')).to.be.true;
  });
  it('click', done => {
    let result;
    vm = createVue({
      template: `
        <boss-button @click="handleClick"></boss-button>
      `,
      methods: {
        handleClick(evt) {
          result = evt;
        }
      }
    }, true);
    vm.$el.click();

    setTimeout(_ => {
      expect(result).to.exist;
      done();
    }, 20);
  });

  it('click inside', done => {
    let result;
    vm = createVue({
      template: `
        <boss-button @click="handleClick"><span class="inner-slot"></span></boss-button>
      `,
      methods: {
        handleClick(evt) {
          result = evt;
        }
      }
    }, true);
    vm.$el.querySelector('.inner-slot').click();

    setTimeout(_ => {
      expect(result).to.exist;
      done();
    }, 20);
  });

  it('loading implies disabled', done => {
    let result;
    vm = createVue({
      template: `
        <boss-button loading @click="handleClick"><span class="inner-slot"></span></boss-button>
      `,
      methods: {
        handleClick(evt) {
          result = evt;
        }
      }
    }, true);
    vm.$el.querySelector('.inner-slot').click();

    setTimeout(_ => {
      expect(result).to.not.exist;
      done();
    }, 20);
  });
});
