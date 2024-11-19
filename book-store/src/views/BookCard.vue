<template>
  <div class="book-card">
    <h2>{{ book.title }}</h2>
    <p>{{ book.author }}</p>
    <router-link :to="{ name: 'BookDetail', params: { id: book.id } }">更多</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'BookCard',
  props: {
    book: {
      type: Object as PropType<{ id: string; title: string; author: string }>,
      required: true
    }
  }
});
</script>

<style scoped>
.book-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>