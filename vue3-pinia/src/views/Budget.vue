<template>
  <div>
    <h1>记账应用</h1>
    <form @submit.prevent="addTransaction">
      <input v-model="newTransaction.description" type="text" placeholder="描述" />
      <input v-model="newTransaction.amount" type="number" placeholder="金额" required />
      <select v-model="newTransaction.category">
        <option value="income">收入</option>
        <option value="expense">支出</option>
      </select>
      <button type="submit">添加记录</button>
    </form>
    <ul>
      <li v-for="transaction in transactions" :key="transaction.id">
        {{ transaction.amount }} - {{ transaction.category }}
        <button @click="deleteTransaction(transaction.id)">删除</button>
      </li>
    </ul>
    <div>
      <h2>总收入: {{ totalIncome }}</h2>
      <h2>总支出: {{ totalExpenses }}</h2>
      <h2>当前余额: {{ currentBalance }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useBudgetStore } from '../stores/useBudgetStore';

interface Transaction {
  description: string;
  amount: number;
  category: 'income' | 'expense';
}

const store = useBudgetStore();
const newTransaction = ref<Transaction>({ description: '',amount: 0, category: 'income' });

const transactions = computed(() => store.transactions);

const addTransaction = () => {
  store.addTransaction(newTransaction.value.amount, newTransaction.value.category);
  newTransaction.value.amount = 0; // 重置表单
};
const deleteTransaction = (id) => {
  store.deleteTransaction(id);
};

const totalIncome = computed(() => store.totalIncome);
const totalExpenses = computed(() => store.totalExpenses);
const currentBalance = computed(() => store.currentBalance);
</script>

<style scoped>
/* 全局样式 */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  margin: 0;
  padding: 20px;
}

/* 标题样式 */
h1 {
  text-align: center;
  color: #333;
}

/* 表单样式 */
form {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 输入框样式 */
input[type="text"],
input[type="number"],
select {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 200px;
}

/* 按钮样式 */
button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

/* 列表样式 */
ul {
  list-style-type: none;
  padding: 0;
}

/* 列表项样式 */
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

/* 统计信息样式 */
div {
  text-align: center;
  margin-top: 20px;
}

/* 删除按钮样式 */
.delete-button {
  background-color: #dc3545;
}

.delete-button:hover {
  background-color: #c82333;
}
</style>