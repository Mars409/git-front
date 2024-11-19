<template>
  <ul>
      <li v-for="comment in article?.comments" key="comment.id">
          {{ comment.content }}
      </li>
  </ul>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
const route=useRoute();
const articleId=route.params.id;

const articles =[
  {
      id:1,
      title:"vue的学习",
      content:"vue学习的具体内容",
      comments :[
          {
              id:1,
              content:"Vue3语法很简洁"
          },
          {
              id:2,
              content:"Vue3功能很强大"
          }
      ]
  },
  {
      id:2,
      title:"router的理解",
      content:"router的具体内容",
      comments :[
          {
              id:1,
              content:"router内容1"
          },
          {
              id:2,
              content:"router内容2"
          }
      ]

  }
];
const article =articles.find((a) => a.id ===Number(articleId));
</script>