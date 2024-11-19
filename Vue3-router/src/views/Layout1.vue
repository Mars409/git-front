<template>
  <nav>
    <router-link to="/home">首页</router-link>
    <router-link to="/articles">文章</router-link>
    <router-link to="/user">我的</router-link>
  </nav>
  <router-view></router-view>
  <!-- <router-view v-slot="{Component}">
        1234
        <transition name="fade" mode="out-in">
            <component :is="Component"></component>
        </transition>
    </router-view> -->
</template>

<script setup></script>

<style scoped>
/* 定义路由导航样式 */
a {
  margin: 10px;
  text-decoration: none;
  color: #3baee0;
  padding: 5px 10px;
}
/* 自定义路由激活样式 */
.router-link-active {
  background-color: #3baee0;
  color: white;
  font-weight: bold;
}
</style>
