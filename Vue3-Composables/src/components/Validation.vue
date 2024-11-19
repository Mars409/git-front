<template>  
    <div class="form-container">  
      <form @submit.prevent="handleSubmit">  
        <div class="form-group">  
          <label for="email">电子邮箱：</label>  
          <input  
            type="email"  
            id="email"  
            v-model="formState.values.email"  
            @blur="validateField('email')"  
            class="form-input"  
          />  
          <span v-if="getFieldError('email')" class="error-message">{{ getFieldError('email') }}</span>  
        </div>  
        <div class="form-group">  
          <label for="password">密码：</label>  
          <input  
            type="password"  
            id="password"  
            v-model="formState.values.password"  
            @blur="validateField('password')"  
            class="form-input"  
          />  
          <span v-if="getFieldError('password')" class="error-message">{{ getFieldError('password') }}</span>  
        </div>  
        <div class="form-actions">  
          <button type="submit" class="submit-button">提交</button>  
          <button type="button" @click="resetForm" class="reset-button">重置</button>  
        </div>  
      </form>  
    </div>  
  </template>  
    
  <script lang="ts">  
  import { defineComponent } from 'vue';  
  import { useFormValidation } from '../composables/useFormValidation';  
    
  export default defineComponent({  
    name: 'FormComponent',  
    setup() {  
      const initialValues = {  
        email: '',  
        password: '',  
      };  
    
      const validationRules = {  
        email: (value: string) => (!value ? '请输入电子邮箱' : !/\S+@\S+\.\S+/.test(value) ? '电子邮箱格式无效' : null),  
        password: (value: string) => (!value ? '请输入密码' : value.length < 6 ? '密码长度至少为6个字符' : null),  
      };  
    
      const { formState, validateField, validateForm, resetForm, setValue, getFieldError } = useFormValidation(initialValues, validationRules);  
    
      const handleSubmit = () => {  
        if (validateForm()) {  
          alert('表单提交成功！');  
          // 处理表单提交逻辑  
        } else {  
          alert('请修正表单中的错误。');  
        }  
      };  
    
      return {  
        formState,  
        validateField,  
        validateForm,  
        resetForm,  
        setValue,  
        getFieldError,  
        handleSubmit,  
      };  
    },  
  });  
  </script>  
    
  <style scoped>  
  .form-container {  
    max-width: 400px;  
    margin: 0 auto;  
    padding: 20px;  
    border: 1px solid #ccc;  
    border-radius: 8px;  
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);  
  }  
    
  .form-group {  
    margin-bottom: 15px;  
  }  
    
  .form-input {  
    width: 100%;  
    padding: 10px;  
    box-sizing: border-box;  
    border: 1px solid #ccc;  
    border-radius: 4px;  
  }  
    
  .error-message {  
    color: red;  
    font-size: 12px;  
    margin-top: 5px;  
  }  
    
  .form-actions {  
    display: flex;  
    justify-content: space-between;  
  }  
    
  .submit-button,  
  .reset-button {  
    padding: 10px 20px;  
    border: none;  
    border-radius: 4px;  
    cursor: pointer;  
  }  
    
  .submit-button {  
    background-color: #4caf50;  
    color: white;  
  }  
    
  .reset-button {  
    background-color: #f44336;  
    color: white;  
  }  
    
  .submit-button:hover,  
  .reset-button:hover {  
    opacity: 0.9;  
  }  
  </style>