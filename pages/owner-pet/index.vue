<script setup>
definePageMeta({
  title: "Customer",
})
const field = ["Id", "Name","Type","Breed", "Gender", "Status", "Action"]
const { data: petData } = useFetch("/api/pet/getPetKeeper", {
  method: "GET",
})

  console.log(petData)


</script>
<template>
  <div>
    <p
      class="flex justify-between items-start md:items-center mb-4 flex-col md:flex-row"
    >
      <span class="text-2xl font-bold">Pet Keeper</span>
      <nuxt-link to="owner-pet/newpet">
        <rs-button>
          <Icon name="material-symbols:add"></Icon>
          Add New
        </rs-button>
      </nuxt-link>
    </p>
    <rs-card
      class="flex-wrap justify-between p-10 bg-white text-black rounded-md flex-col"
    >
      <rs-table
        :field="field"
        :data="petData.data"
        :options="{
          variant: 'default',
          striped: true,
          bordered: true,
          borderless: true,
          hover: true,
          fixed: false,
        }"
        advanced
      >
        <template v-slot:Action="data">
          <nuxt-link :to="`/editcustomer/${data.value.customerID}`">
            <rs-button>Edit</rs-button>
          </nuxt-link>
        </template>
      </rs-table>
    </rs-card>
  </div>
</template>
