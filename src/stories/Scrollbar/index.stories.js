import MyScrollbar from '../../components/Scrollbar'

export default {
    title: '导航/Scrollbar',
    component: MyScrollbar,
    argTypes: { // props属性的类型，用于复杂类型
    }
}

const Template = (args) => ({
    components: { MyScrollbar },
    setup() {
        return { args };
    },
    template:`
      <MyScrollbar v-bind="args">
        <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
      </MyScrollbar>
    `,
});

export const Scrollbar = Template.bind({});
Scrollbar.args = {
    /**
     * props属性
     */
    height:400,
    maxHeight:400,
}

Scrollbar.parameters = {
    docs: {
        source: {
            code: `
<!--基础用法-->
<template>
    <Scrollbar :height="400">
        <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
    </Scrollbar>
</template>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #47a2ff;
}
</style>

<!--横向滚动-->
<template>
    <Scrollbar>
        <div class="scrollbar-flex-content">
          <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
            {{ item }}
          </p>
        </div>
    </Scrollbar>
</template>

<style scoped>
.scrollbar-flex-content {
  display: flex;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #fef0f0;
  color: #f56c6c;
</style>

<!--最大高度-->
 <template>
     <button @click="add">Add Item</button>
     <button @click="onDelete">Delete Item</button>
     <Scrollbar :max-height='400'>
        <p v-for="item in count" :key="item" class="scrollbar-demo-item">
          {{ item }}
        </p>
     </Scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(3)

const add = () => {
  count.value++
}
const onDelete = () => {
  if (count.value > 0) {
    count.value--
  }
}
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #47a2ff;
}
</style>
`,
            language: "html",
            type: 'auto',
            format: true
        }
    }
}
