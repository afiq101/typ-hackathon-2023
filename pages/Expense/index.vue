<script setup>
import { useUserStore } from "~/stores/user";
definePageMeta({
  title: "Expense",
});

const userStore = useUserStore();
const { $swal } = useNuxtApp();
const field = ["Description", "Amount (RM)"];
const options = ref([]);
const expenses = ref([]);
const amount = ref();
const description = ref();
const category = ref();

const { data: categoryName } = await useFetch("/api/category/getCategory", {
  method: "POST",
  body: {
    username: userStore.username,
  }
});

if (categoryName.value != null) {
  for (let i = 0; i < categoryName.value.data.length; i++) {
    options.value.push({ label: categoryName.value.data[i].catName, value: categoryName.value.data[i].catId })
  }
}


const submit = async () => {
  const { data } = await useFetch("/api/expense/insertExpense", {
    method: "POST",
    body: {
      amount: amount.value,
      description: description.value,
      category: category.value,
      username: userStore.username,
    },
  })
  console.log(data)

  if (data.value.statusCode == 200) {
    $swal.fire({
      position: "center",
      title: "Success",
      text: data.value.message,
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });
    expenses.value.push({ description: description.value, amount: "RM" + Number(amount.value) })
    amount.value = "";
    description.value = "";
  }
  else {
    $swal.fire({
      title: "Error!",
      text: data.value.message,
      icon: "error",
    });
  }
}


</script>

<template>
  <div>
    <LayoutsBreadcrumb />
  </div>
  <div>
    <rs-card>
      <div class="pt-4 pr-6 flex justify-end items-end md:items-center  flex-col md:flex-row">
        <p class="">
          <nuxt-link to="/expense-list">
            <rs-button>
              Check Today Spending
            </rs-button>
          </nuxt-link>
        </p>
      </div>
      <div class="wrapper">
        <h1>Expense Tracker</h1>
        <div class="pt-4">
          <FormKit type="number" label="Amount (RM)" v-model="amount" required />
          <FormKit type="text" label="Description" v-model="description" required />
          <FormKit type="select" label="Category" :options="options" v-model="category" />
          <div class="pt-6">
            <FormKit type="button" input-class="w-full p-5" outer-class="col-span-2" @click="submit">
              Add Expense
            </FormKit>
          </div>
        </div>
      </div>
      <div class="expense-table">
        <rs-table :field="field" :data="expenses" :options="{
          variant: 'default',
          striped: true,
          bordered: true,
          borderless: true,
          hover: true,
          fixed: false,
        }" basic>
        </rs-table>
      </div>
    </rs-card>
  </div>
</template>

<style>
.wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 3px;
  text-align: center;
}

.expense-table {
  text-align: center;
  padding-left: 90px;
  padding-right: 90px;
  padding-bottom: 40px;
}
</style>