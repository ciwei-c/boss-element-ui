let code = `<template>
  <boss-transfer v-model="value" :data="data"></boss-transfer>
</template>
<script>
export default {
  data() {
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: \`备选项 \${i}\`,
          disabled: i % 4 === 0
        });
      }
      return data;
    };
    return {
      data: generateData(),
      value: [1, 4]
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"Transfer 的数据通过 data 属性传入。数据需要是一个对象数组，每个对象有以下属性：key 为数据的唯一性标识，label 为显示文本，disabled 表示该项数据是否禁止转移。目标列表中的数据项会同步到绑定至 v-model 的变量，值为数据项的 key 所组成的数组。当然，如果希望在初始状态时目标列表不为空，可以像本例一样为 v-model 绑定的变量赋予一个初始值。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}