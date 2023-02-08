<template>
  <div>
    <h1 style="margin-bottom: 1rem;">Scrollbar 滚动条</h1>
    <p style="margin: 6px 0 6px 10px;">用于替换浏览器原生滚动条。</p>

    <h1 style="margin-bottom: 1rem;">基础用法</h1>
    <p style="margin: 6px 0 6px 10px;">通过 <code>height</code> 属性设置滚动条高度，若不设置则根据父容器高度自适应。</p>
    <br/>
    <Scrollbar :height="height">
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
    </Scrollbar>
    <br/>

    <h1 style="margin-bottom: 1rem;">横向滚动</h1>
    <p style="margin: 6px 0 6px 10px;">当元素宽度大于滚动条宽度时，会显示横向滚动条。</p>
    <br/>
    <Scrollbar>
      <div class="scrollbar-flex-content">
        <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
          {{ item }}
        </p>
      </div>
    </Scrollbar>
    <br/>
    <h1 style="margin-bottom: 1rem;">最大高度</h1>
    <p style="margin: 6px 0 6px 10px;">当元素高度超过最大高度，才会显示滚动条。</p>
    <br/>
    <button @click="add">Add Item</button>
    <button @click="onDelete">Delete Item</button>
    <br/>
    <Scrollbar :max-height=maxHeight>
      <p v-for="item in count" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </Scrollbar>
  </div>
</template>

<script lang="ts" setup>
import Scrollbar from './scrollbar.vue'
import {computed, ref} from 'vue'
import {scrollbarProps} from "./scrollbarUtil";
const count = ref(3)
const props = defineProps(scrollbarProps)
const height = computed(()=>props.height)
const maxHeight = computed(()=>props.maxHeight)
const add = () => {
  count.value++
}
const onDelete = () => {
  if (count.value > 0) {
    count.value--
  }
}
</script>

<style scoped lang="less">
.scrollbar-flex-content {
  display: flex;
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
}
}
.scrollbar-demo-item {
  flex-shrink: 0;
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