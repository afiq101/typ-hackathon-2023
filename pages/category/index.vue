<script setup>
import { useUserStore } from "~/stores/user";
import axios from "axios";

definePageMeta({
  title: "Cateogry",
  middleware: ["auth"], // This is for Login Auth for page
  requiresAuth: true, // This is use for Login Auth for page
});

const userStore = useUserStore();
const { $swal } = useNuxtApp();

const changedata = ref(false);
const field = ["No", "Category", "Description", "Status", "Action"];
const list = ref([]);

const getList = async () => {
  let data = JSON.stringify({
    user: userStore.username,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/api/category/list",
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

const deleteCat = async (id) => {
  $swal
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    .then(async (result) => {
      if (result.isConfirmed) {
        let data = JSON.stringify({
          user: userStore.username,
          id: id,
        });

        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "http://localhost:3000/api/category/delete",
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };

        await axios
          .request(config)
          .then((response) => {
            console.log("delete: ", response.data);

            if (response.data.statusCode === 200)
              $swal.fire("Deleted!", response.data.message, "success");
            else $swal.fire("Error!", response.data.message, "error");
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(async () => {
            location.reload();
          });
      }
    });
};

onMounted(async () => {
  await getList();
});
</script>

<template>
  <div>
    <!-- <rs-card class="p-4"> -->

    <div class="flex justify-between">
      <h4>Category</h4>
    </div>

    <rs-card class="py-3 mt-3">
      <div class="flex justify-between mb-3">
        <p class="ml-2 my-auto">
          Total of <b>{{ list.length }}</b> categor{{
            list.length > 1 ? "ies" : "y"
          }}
        </p>
        <nuxt-link :to="`/category/create`">
          <rs-button size="md" class="mr-3" variant="success">
            <Icon name="material-symbols:add-rounded" class="mr-1"> </Icon>
            Add new</rs-button
          >
        </nuxt-link>
      </div>

      <rs-table
        v-if="list.length > 0"
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
        <template v-slot:Status="data">
          <rs-badge
            :variant="data.value.catStatus === 'ACTIVE' ? 'success' : 'danger'"
            :pill="true"
          >
            {{ data.value.catStatus }}
          </rs-badge>
        </template>
        <template v-slot:Action="data">
          <div class="flex gap-2">
            <nuxt-link :to="`/category/${data.value.catId}`">
              <rs-button size="sm" variant="success">
                <Icon name="material-symbols:edit" size="15"></Icon>
              </rs-button>
            </nuxt-link>

            <rs-button
              size="sm"
              variant="danger"
              @click="deleteCat(data.value.catId)"
            >
              <Icon name="material-symbols:delete-forever" size="15"></Icon>
            </rs-button>
          </div>
        </template>
      </rs-table>

      <span v-else>No record to show</span>
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
