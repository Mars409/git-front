<template>
  <div>
    <h1>{{ book.title }}</h1>
    <p>{{ book.description }}</p>
    <button @click="addToCart(book)">加入购物车</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    setup() {
        const route = useRoute();
        const book = { title: '示例书名', description: '书籍描述' }; // 这里可以根据 route.params.id 获取书籍信息

        function addToCart(book) {
            // 添加到购物车的逻辑
        }

        return { book, addToCart };
    }
});
</script>