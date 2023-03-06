<docs>
---
order: 0
title: 基本评论
---

## zh-CN

一个基本的评论组件，带有作者、头像、时间和操作。

</docs>

<template>
  <j-comment>
    <template #actions>
      <span key="comment-basic-like">
        <j-tooltip title="Like">
          <template v-if="action === 'liked'">
            <LikeFilled @click="like" />
          </template>
          <template v-else>
            <LikeOutlined @click="like" />
          </template>
        </j-tooltip>
        <span style="padding-left: 8px; cursor: auto">
          {{ likes }}
        </span>
      </span>
      <span key="comment-basic-dislike">
        <j-tooltip title="Dislike">
          <template v-if="action === 'disliked'">
            <DislikeFilled @click="dislike" />
          </template>
          <template v-else>
            <DislikeOutlined @click="dislike" />
          </template>
        </j-tooltip>
        <span style="padding-left: 8px; cursor: auto">
          {{ dislikes }}
        </span>
      </span>
      <span key="comment-basic-reply-to">Reply to</span>
    </template>
    <template #author><a>Han Solo</a></template>
    <template #avatar>
      <j-avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
    </template>
    <template #content>
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    </template>
    <template #datetime>
      <j-tooltip :title="dayjs().format('YYYY-MM-DD HH:mm:ss')">
        <span>{{ dayjs().fromNow() }}</span>
      </j-tooltip>
    </template>
  </j-comment>
</template>
<script lang="ts">
import dayjs from 'dayjs';
import { LikeFilled, LikeOutlined, DislikeFilled, DislikeOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default defineComponent({
  components: {
    LikeFilled,
    LikeOutlined,
    DislikeFilled,
    DislikeOutlined,
  },
  setup() {
    const likes = ref<number>(0);
    const dislikes = ref<number>(0);
    const action = ref<string>();

    const like = () => {
      likes.value = 1;
      dislikes.value = 0;
      action.value = 'liked';
    };

    const dislike = () => {
      likes.value = 0;
      dislikes.value = 1;
      action.value = 'disliked';
    };

    return {
      likes,
      dislikes,
      action,
      like,
      dislike,
      dayjs,
    };
  },
});
</script>
