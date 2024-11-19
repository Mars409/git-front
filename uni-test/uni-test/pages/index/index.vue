<template>
  <view class="container">
    <view class="header">
      <text class="title">云端存储</text>
    </view>
    <view class="grid">
      <view class="grid-item" @click="navigateTo('照片')">
        <text>照片</text>
      </view>
      <view class="grid-item" @click="navigateTo('文件')">
        <text>文件</text>
      </view>
      <view class="grid-item" @click="navigateTo('视频')">
        <text>视频</text>
      </view>
      <view class="grid-item" @click="navigateTo('收藏')">
        <text>收藏</text>
      </view>
      <view class="grid-item" @click="navigateTo('回收站')">
        <text>回收站</text>
      </view>
      <view class="grid-item" @click="navigateTo('上传')">
        <text>上传</text>
      </view>
    </view>

    <view class="section">
      <text class="section-title">最近文件</text>
      <view class="list">
        <view class="list-item" v-for="(file, index) in recentFiles" :key="index">
          <text>{{ file.name }}</text>
          <text class="note">{{ file.date }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const recentFiles = ref([
  { name: '文件1.pdf', date: '2024-11-01' },
  { name: '照片.jpg', date: '2024-11-02' },
  { name: '视频.mp4', date: '2024-11-03' },
])

function navigateTo(category) {
  uni.showToast({ title: `点击了${category}` })
}
</script>

<style scoped>
.container {
  padding: 20px;
}
.header .title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.grid-item {
  width: 30%;
  height: 80px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.section {
  margin-top: 20px;
}
.section-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
.list {
  display: flex;
  flex-direction: column;
}
.list-item {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
}
.note {
  font-size: 12px;
  color: #888;
}
</style>