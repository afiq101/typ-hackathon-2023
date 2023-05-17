<script setup>
import { useUserStore } from "~/stores/user";
definePageMeta({
  title: "Expense",
});

const userStore = useUserStore();
console.log(userStore.username)
const field = ["Amount(RM)", "Description"];
const data = [];

const form = ref({
  amount: "",
  description: "",
})

const submit = async () => {

  console.log(form.value)
 /*  if (form.value.bookName == "")
    return
  else {
    const { data } = await useFetch("/api/book/add", {
      method: "POST",
      body: {
        bookName: form.value.bookName,
        bookSynopsis: form.value.bookSypnosis,
      },

      
    })

    if(data.status == 200){
      alert("Berjaya")
    }
    else
    {
      alert("Failed")
    }
  } */
}

</script>

<template>
  <div>
    <LayoutsBreadcrumb />
  </div>
  <div>
    <rs-card>
      <div class="wrapper">
        <h1>Expense Tracker</h1>
        <FormKit type="form" :action="false" @submit="submit">
        <FormKit type="number" label="Amount (RM)" :name="amount" required/>
        <FormKit type="text" label="Description" :name="description" required/>
      </FormKit>
      </div>
      <div class="expense-table">
        <rs-table :field="field" :data="data" :options="{
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
  padding: 20px;
  text-align: center;
}



.expense-table {
  text-align: center;
  padding-left: 90px;
  padding-right: 90px;
  padding-bottom: 40px;
}
</style>