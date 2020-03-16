let code = `<template>
  <boss-transfer
    v-model="value"
    :props="{
      key: 'value',
      label: 'desc'
    }"
    :data="data"
  ></boss-transfer>
</template>
<script>
export default {
  data() {
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          value: i,
          desc: \`备选项 \${i}\`,
          disabled: i % 4 === 0
        });
      }
      return data;
    };
    return {
      data: generateData(),
      value: []
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"本例中的数据源没有 key 和 label 字段，在功能上与它们相同的字段名为 value 和 desc。因此可以使用props 属性为 key 和 label 设置别名。",
      anchor:{
        id:"props",
        title:"数据项属性别名"
      }
    }
  }
}