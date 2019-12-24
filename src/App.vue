<template>
  <div class="app">
    <demo-header />
    <demo-main />
  </div>
</template>

<script>
import DemoMain from "@/components/DemoMain";
import DemoHeader from "@/components/DemoHeader";
export default {
  components: { DemoMain,DemoHeader }
};
</script>
<style lang="scss" scoped>
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>