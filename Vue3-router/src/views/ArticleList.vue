<template>
    <div>
        <h2>文章列表</h2>
        <div style="height: 200px;">
            <p>这里是非常长的页面内容。</p>
        </div>
        <ul>
            <li v-for="article in articles" :key="article.id">
               <router-link :to="`/articles/${article.id}`">
                {{ article.title }}
               </router-link>
            </li>
        </ul>
    
    </div>
</template>

<script setup lang="ts">

const articles = [
    {
        id: 1,
        title: "如何学习Vue3",
    },
    {
        id: 2,
        title: "理解Vue Router"
    }
]
</script>

<script lang="ts">
export default {
    beforeRouteEnter(to, from, next) {
        console.log(to, from);
        console.log("进入该页面之前的检查");
        next();
    }
}

</script>

<style scoped>

</style>