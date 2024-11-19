<template>
  <view class="container">
    <view class="section">
      <text class="section-title">上传队列</text>
      <view class="list">
        <view class="list-item" v-for="(upload, index) in uploadQueue" :key="index">
          <text>{{ upload.name }}</text>
          <text class="note">{{ upload.status }}</text>
        </view>
      </view>
    </view>

    <view class="section">
      <text class="section-title">下载队列</text>
      <view class="list">
        <view class="list-item" v-for="(download, index) in downloadQueue" :key="index">
          <text>{{ download.name }}</text>
          <text class="note">{{ download.status }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const uploadQueue = ref([
  { name: '文件A.pdf', status: '上传中...' },
  { name: '照片B.jpg', status: '等待中...' },
  { name: '视频C.mp4', status: '已完成' },
])

const downloadQueue = ref([
  { name: '文件X.pdf', status: '下载中...' },
  { name: '照片Y.jpg', status: '等待中...' },
  { name: '视频Z.mp4', status: '已完成' },
])
</script>

<style scoped>
.container {
  padding: 20px;
}
.section {
  margin-bottom: 20px;
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