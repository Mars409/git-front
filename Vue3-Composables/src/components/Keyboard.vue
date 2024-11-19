<template>
    <div class="keyboard">
      <div v-for="(row, rowIndex) in keyboardLayout" :key="rowIndex" class="row">
        <div 
          v-for="key in row"
          :key="key"
          class="key"
          :class="{ 'pressed': isKeyPressed(key) }"
          @mousedown="handleKeyDown(key)"
          @mouseup="handleKeyUp(key)"
          @mouseleave="handleKeyUp(key)"
        >
          {{ key }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const pressedKeys = ref(new Set());
  
  const keyboardLayout = ref([
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
    ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift"],
    ["Ctrl", "Fn", "Alt", "Space", "Alt", "Fn", "Ctrl", "←", "↑", "→"]
  ]);
  
  function isKeyPressed(key) {
    return pressedKeys.value.has(key);
  }
  
  function handleKeyDown(key) {
    pressedKeys.value.add(key);
  }
  
  function handleKeyUp(key) {
    pressedKeys.value.delete(key);
  }
  </script>
  
  <style scoped>
  .keyboard {
    display: grid;
    grid-template-rows: repeat(5, auto);
    gap: 10px; /* Increased gap for row spacing */
    padding: 20px;
    background-color: #282c34;
    border-radius: 10px;
  }
  
  .row {
    display: grid;
    align-items: center;
    gap: 5px; /* Gap between keys in the same row */
  }
  
  .key {
    padding: 10px;
    background-color: #373c45;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 0.3s, transform 0.1s;
    cursor: pointer;
    text-align: center;
    display: inline-grid;
    place-items: center;
  }
  
  .key:hover {
    background-color: #4a4a4a;
    transform: translateY(-2px);
  }
  
  .key.pressed {
    background-color: #51c4f7;
    transform: translateY(0);
  }
  
  /* Adjust the number of columns and minmax for each row */
  .row:nth-child(1) {
    grid-template-columns: repeat(17, minmax(0, 1fr));
  }
  .row:nth-child(2) {
    grid-template-columns: repeat(15, minmax(0, 1fr));
  }
  .row:nth-child(3) {
    grid-template-columns: repeat(14, minmax(0, 1fr));
  }
  .row:nth-child(4) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
  .row:nth-child(5) {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  </style>