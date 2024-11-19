import { ref, computed } from 'vue';  
import { useLocalStorage } from '@vueuse/core';  
  
export function useDarkMode() {  
  // 使用 localStorage 来持久化 darkMode 状态  
  const isDarkMode = useLocalStorage('darkMode', false); // 默认值为 false（白天模式）  
  
  // 计算属性来根据 darkMode 返回相应的类名  
  const themeClass = computed(() => (isDarkMode.value ? 'dark-theme' : 'light-theme'));  
  
  // 切换白天/夜间模式的函数  
  const toggleDarkMode = () => {  
    isDarkMode.value = !isDarkMode.value;  
  };  
  
  return {  
    themeClass,  
    toggleDarkMode,  
    isDarkMode, // 可选，用于在组件中直接访问 darkMode 状态  
  };  
}