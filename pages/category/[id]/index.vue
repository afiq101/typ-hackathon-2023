<script setup>
import { useUserStore } from "~/stores/user";
import axios from "axios";

definePageMeta({
  title: "New Cateogry",
  middleware: ["auth"], // This is for Login Auth for page
  requiresAuth: true, // This is use for Login Auth for page
});

const userStore = useUserStore();
const { $swal } = useNuxtApp();

const catName = ref("");
const catDesc = ref("");
const catStatus = ref("");

var options = [
  {
    value: "ACTIVE",
    text: "ACTIVE",
  },
  {
    value: "INACTIVE",
    text: "INACTIVE",
  },
];

const progress = ref(false);
const getCat = async () => {
  let data = JSON.stringify({
    user: userStore.username,
    id: useRoute().params?.id,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/api/category/get",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios
    .request(config)
    .then((response) => {
      console.log("get resp: ", response.data);

      if (response.data.statusCode == 200) {
        catName.value = response.data.data.catName;
        catDesc.value = response.data.data.catDescription;
        catStatus.value = response.data.data.ACTIVE;
      } else {
        $swal.fire({
          title: "Error!",
          text: response.data.message,
          icon: "error",
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const addNewCategory = async () => {
  progress.value = true;

  if (!catName.value && !catDesc.value) {
    $swal.fire({
      title: "Error!",
      text: "Category name and description is required",
      icon: "error",
    });

    return;
  }

  let data = JSON.stringify({
    user: userStore.username,
    name: catName.value,
    description: catDesc.value,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/api/category/create",
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

        await navigateTo("/category");
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

onMounted(() => {
  getCat();
});
</script>

<template>
  <div>
    <!-- <rs-card class="p-4"> -->

    <div class="flex justify-between">
      <h4>Update Category:</h4>
    </div>

    <rs-card class="p-5 mt-3">
      <FormKit type="text" label="Category name" v-model="catName" />

      <FormKit type="text" label="Description" v-model="catDesc" />

      <FormKit
        type="select"
        label="Status"
        :options="options"
        v-model="catStatus"
      />

      <div class="flex justify-end gap-2">
        <nuxt-link :to="`/category`">
          <rs-button class="mt-3" variant="danger">Cancel</rs-button>
        </nuxt-link>

        <rs-button
          class="mt-3"
          variant="success"
          @click="addNewCategory"
          :disabled="progress"
          >Save</rs-button
        >
      </div>
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
