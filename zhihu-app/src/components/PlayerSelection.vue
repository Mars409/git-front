<template>
    <el-card class="player-selection">
      <h2>选择签约球员</h2>
      <el-checkbox-group v-model="selectedPlayerNames">
        <el-checkbox label="Lionel Messi">利昂内尔·梅西</el-checkbox>
        <el-checkbox label="Kylian Mbappe">基利安·姆巴佩</el-checkbox>
        <el-checkbox label="David Beckham">大卫·贝克汉姆</el-checkbox>
        <el-checkbox label="Frenkie de Jong">弗朗基·德容</el-checkbox>
        <el-checkbox label="Ronald Araujo">罗纳德·阿劳霍</el-checkbox>
      </el-checkbox-group>
      <el-button type="primary" class="sign-button" @click="signPlayers">签下球员</el-button>
    </el-card>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { ElCard, ElCheckbox, ElCheckboxGroup, ElButton } from 'element-plus';
  import 'element-plus/dist/index.css';
  
  const selectedPlayerNames = ref([]);
  
  const signPlayers = () => {
    if (selectedPlayerNames.value.length === 0) {
      alert('请选择至少一名球员进行签约');
      return;
    }
    alert(`你已选择签下以下球员：${selectedPlayerNames.value.join(', ')}`);
    // 这里可以添加进一步的逻辑，例如发送签约请求到服务器
  };
  </script>
  
  <style scoped>
  .player-selection {
    max-width: 500px;
    margin: 30px auto;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    overflow: hidden;
  }
  
  h2 {
    text-align: center;
    background-color: #4a90e2;
    color: #fff;
    padding: 15px 0;
    margin: 0;
  }
  
  .el-checkbox-group {
    margin: 20px;
  }
  
  .el-checkbox {
    display: block;
    margin-bottom: 10px;
  }
  
  .sign-button {
    width: 100%;
    background-color: #28a745;
    border-color: #28a745;
  }
  
  .sign-button:hover {
    background-color: #218838;
    border-color: #218838;
  }
  
  .el-card {
    box-shadow: none;
  }
  </style>