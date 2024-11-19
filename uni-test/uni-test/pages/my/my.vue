<template>
  <view class="container">
    <view class="header">
      <text class="title">个人中心</text>
    </view>
    <view class="list">
      <view class="list-item">
        <text>昵称</text>
        <text class="extra">mqxu</text>
      </view>
      <view class="list-item">
        <text>云盘容量</text>
        <text class="extra">50GB/100GB</text>
      </view>
    </view>

    <view class="section">
      <text class="section-title">操作</text>
      <view class="list">
        <view class="list-item" @click="navigateToSetting('账户设置')">
          <text>账户设置</text>
        </view>
        <view class="list-item" @click="navigateToSetting('帮助与反馈')">
          <text>帮助与反馈</text>
        </view>
        <view class="list-item" @click="navigateToSetting('关于')">
          <text>关于</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
function navigateToSetting(setting) {
  uni.showToast({ title: `跳转到${setting}` })
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
.list {
  margin-top: 10px;
  background-color: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;
}
.list-item {
  padding: 15px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
}
.list-item:last-child {
  border-bottom: none;
}
.extra {
  color: #888;
}
.section-title {
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0 10px;
}
</style>