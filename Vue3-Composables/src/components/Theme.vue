<template>  
    <button @click="toggleTheme">  
      {{ isDark ? '切换到白天模式' : '切换到夜间模式' }}  
    </button>  
  </template>  
    
  <script>  
  import { defineComponent, ref } from 'vue';  
  import { useLocalStorage } from '@vueuse/core';  
    
  export default defineComponent({  
    name: 'ThemeSwitcher',  
    setup() {  
      // 使用 useLocalStorage 来持久化暗模式状态  
      const isDark = useLocalStorage('darkMode', false);  
    
      // 定义一个函数来切换主题  
      const toggleTheme = () => {  
        isDark.value = !isDark.value;  
          
        // 根据 isDark 的值来切换文档的类名  
        document.documentElement.classList.toggle('dark-theme', isDark.value);  
        document.documentElement.classList.toggle('light-theme', !isDark.value);  
      };  
    
      // 返回给模板使用的数据和方法  
      return {  
        isDark,  
        toggleTheme,  
      };  
    },  
  });  
  </script>  
    
  <style>  
  /* 这里可以添加按钮的样式 */  
  button {  
    padding: 10px 20px;  
    font-size: 16px;  
    cursor: pointer;  
  }  
    
  /* 全局样式，应该放在全局的 CSS 文件中，但为了演示放在这里 */  
  .light-theme {  
    background-color: #ffffff;  
    color: #000000;  
    /* 其他白天模式的样式 */  
  }  
    
  .dark-theme {  
    background-color: #000000;  
    color: #ffffff;  
    /* 其他夜间模式的样式 */  
  }  
    
  /* 注意：通常你不会在组件的 <style> 标签中定义全局样式，  
     而是会在一个单独的 CSS 文件中定义，并确保它在全局范围内被引入。  
     这里只是为了演示目的而放在这里。 */  
  </style>