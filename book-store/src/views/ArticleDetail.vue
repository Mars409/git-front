<template>
  <div>
          <h2>{{ article?.title }}</h2>
          <p>{{ article?.content }}</p>
          <div style="height: 200px;">
          <p>这里是非常长的页面内容</p>
      </div>

          <router-link :to="`/articles/${article?.id}/comments`">查看评论
          </router-link>
          <router-view></router-view>

  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
const route=useRoute();
const articleId=route.params.id;
const articles =[
{
        id:1,
        title:"如何学习vue3",
        content:"如何学习vue，vue3如何学习"
    },
    {
        id:2,
        title:"理解Vue Router",
        content:"理解Vue Router，Router如何学习"
    }
];
const article =articles.find((a) => a.id ===Number(articleId));

</script>