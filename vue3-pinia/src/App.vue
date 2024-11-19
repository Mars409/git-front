<template>
    <nav class="navbar">
      <router-link to="/counter">计数器</router-link>
      <router-link to="/todo">待办清单</router-link>
      <router-link to="/budget">记账应用</router-link>
    </nav>
  
    <router-view></router-view>
  </template>
  
  <script setup lang="ts">
  
  </script>
  
  <style scoped>
/* 导航栏样式 */
.navbar {
  background-color: #f8f9fa; /* 浅灰色背景 */
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* 添加间距 */
}

/* 导航链接样式 */
.nav-link {
  color: #007bff; /* 蓝色文字 */
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 20px; /* 圆角边框 */
  transition: background-color 0.3s ease, color 0.3s ease;
  border: 2px solid transparent; /* 透明边框，用于悬停效果 */
}

/* 导航链接悬停效果 */
.nav-link:hover {
  background-color: #e7e9eb; /* 悬停时的浅灰色背景 */
  color: #0056b3; /* 悬停时的深蓝色文字 */
  border-color: #007bff; /* 悬停时的蓝色边框 */
}

/* 路由器视图样式 */
.router-view {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px; /* 圆角边框 */
  background-color: #ffffff;
}
</style>