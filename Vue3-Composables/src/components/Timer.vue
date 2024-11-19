<!-- <template>
  <div>
    <h2>倒计时：{{ timer.time }}</h2>
    <button @click="timer.start">开始</button>
    <button @click="timer.stop">停止</button>
  </div>
</template>

<script setup>
import { useTimer } from '../composables/useTimer';

const timer = useTimer(10);
</script> -->
<template>
  <div class="timer-container">
    <h2 class="timer-title">倒计时：{{ timer.time }}</h2>
    <div class="button-group">
      <button class="btn" @click="timer.start">开始</button>
      <button class="btn" @click="timer.stop">停止</button>
      <button class="btn" @click="timer.reset">重置</button>
    </div>
  </div>
</template>

<script setup>
import { useTimer } from '../composables/useTimer';

const timer = useTimer(10);
</script>

<style scoped>
.timer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #282c34;
  color: #ffffff;
}

.timer-title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  font-size: 1rem;
  color: #282c34;
  background-color: #ffd700;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #ffec00;
}

/* Add media query for responsiveness */
@media (max-width: 768px) {
  .timer-title {
    font-size: 1.5rem;
  }

  .btn {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
}
</style>