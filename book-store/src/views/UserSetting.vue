<template>
    <div>
        <h3>用户个人设置</h3>
        <button @click="handleLayout">退出登录</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const handleLayout = () => {
    localStorage.removeItem("token");
    router.push("/login");
}
</script>

<style lang="scss" scoped>

</style>