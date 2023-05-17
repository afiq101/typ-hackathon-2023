<script setup>
definePageMeta({
  title: "Expense",
});
</script >

<template>
  <div>
    <LayoutsBreadcrumb />
  </div>
  <rs-card>
    <div class="wrapper">
      <h1>Expense Tracker</h1>
      <form v-on:submit.prevent="addExpense">
        <div class="form-group">
          <label for="description">Description:</label>
          <input type="text" id="description" v-model="description" required />
        </div>
        <div class="form-group">
          <label for="amount">Amount:</label>
          <input type="number" id="amount" v-model="amount" required />
        </div>
        <button type="submit">Add Expense</button>
      </form>
      <div class="expense-table">
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(expense, index) in expenses" :key="index">
              <td>{{ expense.description }}</td>
              <td>RM{{ expense.amount }}</td>
            </tr>
          </tbody>
        </table>
        <div class="total-expenses">
          <p>Total Expenses Today: RM{{ totalExpenses }}</p>
        </div>
      </div>
    </div>
  </rs-card>
</template >

<script>
import { computed, ref } from 'vue'

export default {
  name: 'ExpenseTracker',
  setup() {
    const expenses = ref([])
    const description = ref('')
    const amount = ref()

    const addExpense = () => {
      expenses.value.push({ description: description.value, amount: Number(amount.value) })
      description.value = ''
      amount.value = 0
    }

    const totalExpenses = computed(() => {
      return expenses.value.reduce((total, expense) => total + expense.amount, 0)
    })



    return {
      expenses,
      description,
      amount,
      addExpense,

      totalExpenses
    }
  }
}
</script>

<style>
.wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

form {
  display: inline-block;
  text-align: left;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="number"] {
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  box-sizing: border-box;
}

button[type="submit"] {
  background-color: #4169E1;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
}

table,
th,
td {
  border: 1px solid black;
  padding: 8px;
}

th {
  background-color: #4169E1;
  color: #fff;
}

.total-expenses {
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
}
</style>
