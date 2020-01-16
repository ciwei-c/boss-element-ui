import { createVue, destroyVM, waitImmediate } from '../util';

describe('Steps', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue(`
      <boss-steps>
        <boss-step title="step1"></boss-step>
        <boss-step title="step2"></boss-step>
        <boss-step title="step3"></boss-step>
      </boss-steps>
    `);

    expect(vm.$el.querySelectorAll('.boss-step')).to.length(3);
  });

  it('space', async() => {
    vm = createVue(`
      <boss-steps>
        <boss-step title="step1"></boss-step>
        <boss-step title="step2"></boss-step>
        <boss-step title="step3"></boss-step>
      </boss-steps>
    `, true);

    const vm2 = createVue(`
      <boss-steps :space="100">
        <boss-step title="step1"></boss-step>
        <boss-step title="step2"></boss-step>
        <boss-step title="step3"></boss-step>
        <boss-step title="step4"></boss-step>
      </boss-steps>
    `, true);

    await waitImmediate();
    const stepElm = vm.$el.querySelector('.boss-step');
    const stepElm2 = vm2.$el.querySelector('.boss-step');
    expect(getComputedStyle(stepElm).flexBasis).to.equal('50%');
    expect(getComputedStyle(stepElm2).flexBasis).to.equal('100px');
  });

  it('processStatus', done => {
    vm = createVue(`
      <boss-steps :active="1" process-status="error">
        <boss-step title="step1"></boss-step>
        <boss-step title="step2"></boss-step>
        <boss-step title="step3"></boss-step>
      </boss-steps>
    `);

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.boss-step__head.is-error')).to.length(1);
      done();
    });
  });

  it('update processStatus', done => {
    vm = createVue({
      template: `
        <boss-steps :active="1" :process-status="processStatus">
          <boss-step title="abc"></boss-step>
          <boss-step title="abc2"></boss-step>
        </boss-steps>
      `,
      data() {
        return { processStatus: 'error' };
      }
    });

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.boss-step__head.is-error')).to.length(1);
      vm.processStatus = 'process';
      vm.$nextTick(_ => {
        expect(vm.$el.querySelectorAll('.boss-step__head.is-process')).to.length(1);
        done();
      });
    });
  });

  it('finishStatus', done => {
    vm = createVue(`
      <boss-steps :active="1" finish-status="error">
        <boss-step title="abc"></boss-step>
        <boss-step title="abc2"></boss-step>
      </boss-steps>
    `);

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.boss-step__head.is-error')).to.length(1);
      done();
    });
  });

  it('active', done => {
    vm = createVue({
      template: `
        <boss-steps :active="active" finish-status="error">
          <boss-step title="abc"></boss-step>
          <boss-step title="abc2"></boss-step>
        </boss-steps>
      `,

      data() {
        return { active: 0 };
      }
    });

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.boss-step__head.is-error')).to.length(0);
      vm.active = 2;
      vm.$nextTick(_ => {
        expect(vm.$el.querySelectorAll('.boss-step__head.is-error')).to.length(2);
        done();
      });
    });
  });

  it('create vertical', () => {
    vm = createVue(`
      <boss-steps direction="vertical">
        <boss-step title="aaa"></boss-step>
        <boss-step title="bbb"></boss-step>
      </boss-steps>
    `);

    expect(vm.$el.querySelector('.is-vertical')).to.exist;
  });

  it('vertical:height', async() => {
    vm = createVue(`
      <boss-steps direction="vertical" :space="200">
        <boss-step title="aaa"></boss-step>
        <boss-step title="bbb"></boss-step>
      </boss-steps>
    `, true);

    await waitImmediate();
    const stepElm = vm.$el.querySelector('.boss-step');
    expect(getComputedStyle(stepElm).flexBasis).to.equal('200px');
  });

  it('step:status=error', done => {
    vm = createVue(`
      <boss-steps :active="2" process-status="process" finish-status="success" direction="horizontal">
        <boss-step title="step1"></boss-step>
        <boss-step title="step2" status="error"></boss-step>
        <boss-step title="step3"></boss-step>
      </boss-steps>
    `);

    vm.$nextTick(_ => {
      const errorLine = vm.$el.querySelector('.boss-step:nth-child(2) .boss-step__line-inner');
      expect(errorLine.getBoundingClientRect().width).to.equal(0);
      const nextStep = vm.$el.querySelector('.boss-step:nth-child(3) .boss-step__head');
      expect(nextStep.classList.contains('is-wait')).to.equal(true);
      done();
    });
  });
});
