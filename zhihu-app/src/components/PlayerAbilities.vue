<template>
    <el-card class="player-ability">
      <div class="ability-container">
        <h2>自定义球员能力值</h2>
        <div v-for="ability in abilities" :key="ability.name" class="ability-item">
          <div class="ability-label">{{ ability.name }}</div>
          <el-slider
            v-model="ability.value"
            :min="0"
            :max="100"
            :step="1"
            show-input
            show-stops
            class="ability-slider"
          ></el-slider>
        </div>
        <el-button type="primary" class="confirm-button" @click="sumAbilities">确定</el-button>
        <div v-if="totalAbility > 0" class="total-score">
          总能力值: {{ totalAbility }}
        </div>
      </div>
    </el-card>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { ElCard, ElSlider, ElButton } from 'element-plus';
  import 'element-plus/dist/index.css';
  
  interface Ability {
    name: string;
    value: number;
  }
  
  const abilities = ref<Ability[]>([
    { name: '射门', value: 50 },
    { name: '传球', value: 50 },
    { name: '身体对抗', value: 50 },
    { name: '脚下力量', value: 50 },
    { name: '速度', value: 50 },
  ]);
  
  const totalAbility = computed(() => {
    return abilities.value.reduce((total, ability) => total + ability.value, 0);
  });
  
  const sumAbilities = () => {
    alert(`总能力值: ${totalAbility.value}`);
  };
  </script>
  
  <style scoped>
  .player-ability {
    max-width: 600px;
    margin: 30px auto;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .ability-container {
    padding: 20px;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  
  .ability-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .ability-label {
    flex: 1;
    margin-right: 10px;
  }
  
  .ability-slider {
    flex: 3;
  }
  
  .confirm-button {
    width: 100%;
    margin-top: 20px;
    background-color: #409eff;
    border-color: #409eff;
  }
  
  .confirm-button:hover {
    background-color: #3085d6;
    border-color: #3085d6;
  }
  
  .total-score {
    margin-top: 20px;
    font-size: 18px;
    color: #409eff;
    font-weight: bold;
  }
  </style>