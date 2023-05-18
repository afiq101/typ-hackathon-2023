<script setup>
import { useUserStore } from "~/stores/user";
import { DateTime } from "luxon";
import moment from "moment";

definePageMeta({
  title: "Expense List",
});



const dt = DateTime.now();

const userStore = useUserStore();
const field = ["Amount (RM)", "Description", "Category" , "Date"];
const table = ref([]);
let total = 0;

const dateFormat = (value) => {
  return moment(value).format("DD/MM/YYYY");
};

const { data: listingExpense } = await useFetch("/api/expense/getExpense", {
  method: "POST",
  body: {
    username: userStore.username,
  }
});
if (listingExpense.value.data != null) {
  
  for (let i = 0; i < listingExpense.value.data.length; i++) {
    total = total + listingExpense.value.data[i].amount;
    table.value.push({ Amount: "RM " + listingExpense.value.data[i].amount, description: listingExpense.value.data[i].description, Category: listingExpense.value.data[i].catName , date: dateFormat(listingExpense.value.data[i].createdDate) })
  }
  console.log(total)
}

</script>
<template>
  <div>
    <LayoutsBreadcrumb />
    
  </div>
  <div class="flex justify-center p-3">
    <rs-card class=" p-5 flex justify-center"><div class="flex justify-center"><Icon name="uil:money-insert"></Icon></div><div class="pt-4 flex justify-center pb-3"><h4><strong>RM {{ total }}</strong></h4></div><div>Total Expenses This Month </div></rs-card>
  </div>
  <div>
    <rs-card>
      <div class="mx-5 py-5">
        <rs-table :field="field" :data="table" :options-advanced="{
                    sortable: true,
                    responsive: true,
                  }"
                  advanced>
        </rs-table>
      </div>
    </rs-card>
  </div>
</template>
      