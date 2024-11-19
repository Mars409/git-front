<template>
    <div class="sms-component">
      <div class="sms-form">
        <label for="to">收件人:</label>
        <input v-model="smsState.to" type="text" placeholder="Enter phone number" id="to" />
  
        <label for="content">内容:</label>
        <textarea v-model="smsState.content" type="text" placeholder="Enter message" id="content"></textarea>
  
        <button @click="sendSms">发送</button>
      </div>
      <div v-if="smsState.sent" class="sent-indicator">
        <small>已发送</small>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useSms } from '../composables/useSms';
  
  const { smsState, sendSms } = useSms();
  </script>
  
  <style scoped>
  .sms-component {
    max-width: 300px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .sms-form {
    display: flex;
    flex-direction: column;
  }
  
  .sms-form label {
    margin-top: 10px;
  }
  
  .sms-form input,
  .sms-form textarea {
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .sms-form button {
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .sms-form button:hover {
    background-color: #0056b3;
  }
  
  .sent-indicator {
    margin-top: 10px;
    font-size: 0.8em;
    color: #4caf50;
  }
  </style>