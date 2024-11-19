<template>
  <div>
    <h1>登录</h1>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="用户名" />
      <input v-model="password" type="password" placeholder="密码" />
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const username = '';
        const password = '';

        function login() {
            // 登录逻辑
        }

        return { username, password, login };
    }
});
</script>