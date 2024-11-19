<template>
    <div>
        <h2>用户登录</h2>
        <button @click="handleLogin">登录</button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const handleLogin = () => {
    //编程式导航
    localStorage.setItem("token","hello123");
    router.push("/user/profile")
}
</script>
