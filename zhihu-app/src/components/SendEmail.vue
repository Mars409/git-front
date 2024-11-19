<template>
    <div class="send-email">
      <email-form  @send="handleSend"/>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import EmailForm from './EmailForm.vue';
   import axios from 'axios'

//   // 定义一个表单提交的数据对象
// const submitData = ref(null);
  
//   // 处理子组件传递的数据
// const handleSubmit = (data:any) => {
//     submitData.value = data;
// }

  
  const sendMail = ref(null);
  
  const handleSend = (data:any) => {
    sendMail.value = data;
    axios.post("http://localhost:8080/mail",sendMail.value).then(res=>{
        console.log('邮件发送成功！')
    })
  };
  </script>
  
  <style scoped>
  .send-email {
    text-align: center;
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
  }
  
  .sent-mail {
    background: #eef2f7;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
  }
  
  .sent-mail h3 {
    color: #333;
    margin-bottom: 10px;
  }
  
  .sent-mail p {
    font-size: 16px;
    color: #666;
    margin: 5px 0;
  }
  
  .sent-mail p strong {
    color: #333;
  }
  </style>