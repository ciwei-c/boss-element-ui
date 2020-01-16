import { createVue, destroyVM, waitImmediate } from '../util';

describe('Progress', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <div>
          <boss-progress ref="percent0" :percentage="0"></boss-progress>
          <boss-progress ref="percent50" :percentage="50"></boss-progress>
          <boss-progress ref="percent100" :percentage="100"></boss-progress>
        </div>
      `
    }, true);
    expect(vm.$refs.percent0.$el.querySelector('.boss-progress__text').innerText).to.be.equal('0%');
    expect(vm.$refs.percent0.$el.querySelector('.boss-progress-bar__inner').style.width).to.be.equal('0%');

    expect(vm.$refs.percent50.$el.querySelector('.boss-progress__text').innerText).to.be.equal('50%');
    expect(vm.$refs.percent50.$el.querySelector('.boss-progress-bar__inner').style.width).to.be.equal('50%');

    expect(vm.$refs.percent100.$el.querySelector('.boss-progress__text').innerText).to.be.equal('100%');
    expect(vm.$refs.percent100.$el.querySelector('.boss-progress-bar__inner').style.width).to.be.equal('100%');
  });
  it('status', () => {
    vm = createVue({
      template: `
        <div>
          <boss-progress ref="lineSuccess" :percentage="100" status="success"></boss-progress>
          <boss-progress ref="lineException" :percentage="0" status="exception"></boss-progress>
          <boss-progress type="circle" ref="circleSuccess" :percentage="100" status="success"></boss-progress>
          <boss-progress type="circle" ref="circleException" :percentage="0" status="exception"></boss-progress>
        </div>
      `
    }, true);
    expect(vm.$refs.lineSuccess.$el.classList.contains('is-success')).to.be.true;
    expect(vm.$refs.lineSuccess.$el.querySelector('.boss-progress__text .boss-icon-circle-check')).to.be.exist;
    expect(vm.$refs.lineException.$el.classList.contains('is-exception')).to.be.true;
    expect(vm.$refs.lineException.$el.querySelector('.boss-progress__text .boss-icon-circle-close')).to.be.exist;

    expect(vm.$refs.circleSuccess.$el.classList.contains('is-success')).to.be.true;
    expect(vm.$refs.circleSuccess.$el.querySelector('.boss-progress__text .boss-icon-check')).to.be.exist;
    expect(vm.$refs.circleException.$el.classList.contains('is-exception')).to.be.true;
    expect(vm.$refs.circleException.$el.querySelector('.boss-progress__text .boss-icon-close')).to.be.exist;
  });
  it('text inside', () => {
    vm = createVue({
      template: `
        <boss-progress :percentage="50" text-inside></boss-progress>
      `
    }, true);
    expect(vm.$el.classList.contains('boss-progress--text-inside')).to.be.true;
  });
  it('stroke width', () => {
    vm = createVue({
      template: `
        <boss-progress :percentage="50" :stroke-width="8"></boss-progress>
      `
    }, true);
    expect(vm.$el.querySelector('.boss-progress-bar__outer').style.height).to.be.equal('8px');
  });
  it('show text', () => {
    vm = createVue({
      template: `
        <boss-progress :percentage="50" :show-text="false"></boss-progress>
      `
    }, true);
    expect(vm.$el.querySelector('.boss-progress__text')).to.not.exist;
  });
  it('circle', () => {
    vm = createVue({
      template: `
        <boss-progress type="circle" :percentage="50"></boss-progress>
      `
    }, true);
    expect(vm.$el.classList.contains('boss-progress--circle')).to.be.true;
  });
  it('dashboard', () => {
    vm = createVue({
      template: `
        <boss-progress type="dashboard" :percentage="50"></boss-progress>
      `
    }, true);
    expect(vm.$el.classList.contains('boss-progress--dashboard')).to.be.true;
  });
  it('width', () => {
    vm = createVue({
      template: `
        <boss-progress type="circle" :percentage="50" :width="120"></boss-progress>
      `
    }, true);
    expect(vm.$el.querySelector('.boss-progress-circle').style.height).to.be.equal('120px');
    expect(vm.$el.querySelector('.boss-progress-circle').style.width).to.be.equal('120px');
  });
  it('should work with stroke-width', () => {
    vm = createVue({
      template: `
        <boss-progress :text-inside="true" :stroke-width="36" :percentage="0"></boss-progress>
      `
    }, true);
    expect(vm.$el.querySelector('.boss-progress-bar__innerText').offsetTop).to.be.equal(12);
  });
  it('color', () => {
    vm = createVue({
      template: `
      <boss-progress :percentage="50" color="rgb(0, 0, 0)"></boss-progress>
      `
    }, true);
    expect(vm.$el.querySelector('.boss-progress-bar__inner').style.backgroundColor).to.equal('rgb(0, 0, 0)');
  });
  it('color is function', async() => {
    vm = createVue({
      template: `
      <boss-progress :percentage="percentage" :color="customColor"></boss-progress>
      `,
      data() {
        return {
          percentage: 50
        };
      },
      methods: {
        customColor(percentage) {
          if (percentage > 50) {
            return '#13ce66';
          } else {
            return '#20a0ff';
          }
        },
        increase() {
          this.percentage = 60;
        }
      }
    }, true);

    expect(vm.$el.querySelector('.boss-progress-bar__inner').style.backgroundColor).to.equal('rgb(32, 160, 255)');
    vm.increase();

    await waitImmediate();
    expect(vm.$el.querySelector('.boss-progress-bar__inner').style.backgroundColor).to.equal('rgb(19, 206, 102)');
  });

  it('color is array', async() => {
    vm = createVue({
      template: `
      <boss-progress :percentage="percentage" :color="colors"></boss-progress>
      `,
      data() {
        return {
          percentage: 50,
          colors: [
            {color: '#f56c6c', percentage: 20},
            {color: '#e6a23c', percentage: 40},
            {color: '#20a0ff', percentage: 60},
            {color: '#13ce66', percentage: 80},
            {color: '#6f7ad3', percentage: 100}
          ]
        };
      },
      methods: {
        increase() {
          this.percentage = 70;
        }
      }
    }, true);

    // #20a0ff
    expect(vm.$el.querySelector('.boss-progress-bar__inner').style.backgroundColor).to.equal('rgb(32, 160, 255)');

    vm.increase();
    await waitImmediate();
    // #13ce66
    expect(vm.$el.querySelector('.boss-progress-bar__inner').style.backgroundColor).to.equal('rgb(19, 206, 102)');
  });

  it('format content', () => {
    vm = createVue({
      template: `
      <boss-progress :percentage="50" :format="format"></boss-progress>
      `,
      methods: {
        format(percentage) {
          return `占比${percentage}%`;
        }
      }
    }, true);
    expect(vm.$el.querySelector('.boss-progress__text').innerHTML).to.equal('占比50%');
  });
});
