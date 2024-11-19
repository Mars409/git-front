// src/stores/useBudgetStore.ts
import { defineStore } from 'pinia';

export const useBudgetStore = defineStore('budget', {
  state: () => ({
    transactions: [] as Array<{ id: number; amount: number; category: 'income' | 'expense' }>
  }),
  actions: {
    addTransaction(amount: number, category: 'income' | 'expense') {
      const transaction = {
        id: Date.now(),
        amount,
        category,
      };
      this.transactions.push(transaction);
    },
    deleteTransaction(id: number) {
      this.transactions = this.transactions.filter(transaction => transaction.id !== id);
    },
  },
  getters: {
    totalIncome: function () { 
      return this.transactions
        .filter(({ category }) => category === 'income')
        .reduce((total, { amount }) => total + amount, 0);
    },
    totalExpenses: function () { 
      return this.transactions
        .filter(({ category }) => category === 'expense')
        .reduce((total, { amount }) => total + amount,0);
    },
    currentBalance: function () { 
      return this.totalIncome - this.totalExpenses;
    },
  },
});