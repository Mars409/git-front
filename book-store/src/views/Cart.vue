<template>
  <div>
    <h1>购物车</h1>
    <CartItem v-for="item in cartItems" :key="item.id" :item="item" @remove="removeFromCart" />
    <router-link to="/">继续购物</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CartItem from './CartItem.vue';

export default defineComponent({
    components: { CartItem },
    setup() {
        const cartItems = []; // 假设从 store 或 API 获取购物车数据

        function removeFromCart(itemId) {
            // 移除购物车的逻辑
        }

        return { cartItems, removeFromCart };
    }
});
</script>