<template>  
    <div :class="themeClass">  
      <h1>白天/夜间模式切换</h1>  
      <button @click="toggleDarkMode">  
        {{ isDarkMode ? '切换到白天模式' : '切换到夜间模式' }}  
      </button>  
    </div>  
  </template>  
    
  <script lang="ts">  
  import { defineComponent } from 'vue';  
  import { useDarkMode } from '../composables/useDarkMode';  
    
  export default defineComponent({  
    name: 'ThemeSwitcher',  
    setup() {  
      const { themeClass, toggleDarkMode, isDarkMode } = useDarkMode();  
    
      return {  
        themeClass,  
        toggleDarkMode,  
        isDarkMode,  
      };  
    },  
  });  
  </script>  
    
  <style>  
  /* 添加一些基本的样式来区分白天和夜间模式 */  
  .light-theme {  
    background-color: white;  
    color: black;  
  }  
    
  .dark-theme {  
    background-color: black;  
    color: white;  
  }  
    
  /* 可选的按钮样式 */  
  button {  
    padding: 10px 20px;  
    font-size: 16px;  
    cursor: pointer;  
  }  
  </style>