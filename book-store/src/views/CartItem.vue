<template>
  <div class="cart-item">
    <h3>{{ item.title }}</h3>
    <p>{{ item.price }}元</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'CartItem',
  props: {
    item: {
      type: Object as PropType<{ id: string; title: string; price: number }>,
      required: true
    }
  }
});
</script>

<style scoped>
.cart-item h3 {
  margin: 0;
}
.cart-item p {
  margin: 0;
}
</style>