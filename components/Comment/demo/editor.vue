<docs>
---
order: 3
title: 回复框
---

## zh-CN

评论编辑器组件提供了相同样式的封装以支持自定义评论编辑器。

</docs>

<template>
  <j-list
    v-if="comments.length"
    :data-source="comments"
    :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
    item-layout="horizontal"
  >
    <template #renderItem="{ item }">
      <j-list-item>
        <j-comment
          :author="item.author"
          :avatar="item.avatar"
          :content="item.content"
          :datetime="item.datetime"
        />
      </j-list-item>
    </template>
  </j-list>
  <j-comment>
    <template #avatar>
      <j-avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
    </template>
    <template #content>
      <j-form-item>
        <j-textarea v-model:value="value" :rows="4" />
      </j-form-item>
      <j-form-item>
        <j-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
          Add Comment
        </j-button>
      </j-form-item>
    </template>
  </j-comment>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

type Comment = Record<string, string>;

export default defineComponent({
  setup() {
    const comments = ref<Comment[]>([]);
    const submitting = ref<boolean>(false);
    const value = ref<string>('');
    const handleSubmit = () => {
      if (!value.value) {
        return;
      }

      submitting.value = true;

      setTimeout(() => {
        submitting.value = false;
        comments.value = [
          {
            author: 'Han Solo',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: value.value,
            datetime: dayjs().fromNow(),
          },
          ...comments.value,
        ];
        value.value = '';
      }, 1000);
    };

    return {
      comments,
      submitting,
      value,
      handleSubmit,
    };
  },
});
</script>
