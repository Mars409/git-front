<template>
    <div>
      <form>@submit.prevent="submitForm">
      <input type="text"placeholder="请输入用户名"/>
      <input type="text"placeholder="请输入邮箱"/>
      <input type="password"/>
      <button type="submit">注册</button>
      </form> 
    </div>
      </template>
  
      <script setup lang="ts">
      import { reactive } from "vue";
  
      const form = reactive({
      username:"admin",
      enaiL:"adninqq.com",
      password:"123456",
     });
  
      //阻止了表单的默认提交,自定义了表单的提交函数
      const submitForm=()=>{
          console.log("表单提交数据:",form);
      };
      </script>
  
      <style scoped></style>
      