<script setup>
import { useUserStore } from "~/stores/user";
import axios from "axios";
import moment from "moment";

definePageMeta({
  title: "New Cateogry",
  middleware: ["auth"], // This is for Login Auth for page
  requiresAuth: true, // This is use for Login Auth for page
});

const userStore = useUserStore();
const { $swal } = useNuxtApp();

const amount = ref("");

const progress = ref(false);

const field = ["Amount", "Date", "Status"];
const list = ref([]);

// GET BUDGET HISTORY

const getList = async () => {
  let data = JSON.stringify({
    user: userStore.username,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/api/budget/history",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios
    .request(config)
    .then((response) => {
      console.log("list: ", response.data);

      if (response.data.statusCode === 200) {
        list.value = response.data.data;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const setNewBudget = async () => {
  progress.value = true;

  if (!amount.value) {
    $swal.fire({
      title: "Error!",
      text: "Amount is required",
      icon: "error",
    });

    return;
  }

  let data = JSON.stringify({
    user: userStore.username,
    amount: amount.value,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/api/budget/set",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios
    .request(config)
    .then(async (response) => {
      console.log("list: ", response.data);

      if (response.data.statusCode === 200) {
        $swal.fire({
          position: "center",
          title: "Success",
          text: response.data.message,
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });

        location.reload();
      } else
        $swal.fire({
          title: "Error!",
          text: response.data.message,
          icon: "error",
        });
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      progress.value = false;
    });
};

const dateFormat = (value) => {
  return moment(value).format("DD/MM/YYYY");
};

onMounted(() => {
  getList();
});
</script>

<template>
  <div>
    <!-- <rs-card class="p-4"> -->

    <div class="flex justify-between">
      <h4>Set budget</h4>
    </div>

    <rs-card class="p-5 mt-3">
      <p>* This page enable you to set your monthly budget</p>

      <div class="mt-3">
        <FormKit type="text" label="Amount" v-model="amount" />
      </div>
      <div class="flex justify-end gap-2">
        <nuxt-link :to="`/dashboard`">
          <rs-button class="mt-3" variant="danger">Cancel</rs-button>
        </nuxt-link>

        <rs-button
          class="mt-3"
          variant="success"
          @click="setNewBudget"
          :disabled="progress"
          >Save</rs-button
        >
      </div>
    </rs-card>

    <div class="flex justify-between mt-3 mb-3">
      <h4>Budget history</h4>
    </div>

    <rs-card v-if="list.length > 0">
      <rs-table
        :field="field"
        :data="list"
        :options="{
          variant: 'default',
          striped: true,
          bordered: true,
          borderless: true,
          hover: true,
          fixed: false,
        }"
        basic
      >
        <template v-slot:Amount="data">
          <span class="text-primary font-semibold"
            >RM {{ data.value.bhAmount }}</span
          >
        </template>
        <template v-slot:Date="data">
          <span>{{ dateFormat(data.value.bhCreatedDate) }}</span>
        </template>
        <template v-slot:Status="data">
          <rs-badge
            :variant="data.value.bhStatus === 'ACTIVE' ? 'success' : 'danger'"
            :pill="true"
          >
            {{ data.value.bhStatus }}
          </rs-badge>
        </template>
      </rs-table>
    </rs-card>

    <rs-card v-else class="p-3 text-center">
      You have not set a budget yet.
    </rs-card>
  </div>
</template>

<style scoped>
.rs-card {
  transition: transform 0.3s ease;
}

.hover-card:hover {
  transform: scale(1.1);
}
</style>
