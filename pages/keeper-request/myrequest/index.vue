<script setup>
definePageMeta({
  title: "My Adoption Request",
})
const field = ["Id", "Pet","From Owner","Appointment Date","Status", "Action"]
const { data: myrequest } = await useFetch("/api/request-adopt/myrequestlist", {
  method: "GET",
})

const data2 = ref([])

  console.log(myrequest.value)

  /*for(let i = 0; i < myrequest.value.length; i++){
    data2.push({
      Id:
    })
  }*/


</script>
<template>
  <div>
    <p
      class="flex justify-between items-start md:items-center mb-4 flex-col md:flex-row"
    >
      <span class="text-2xl font-bold">My Adoption Request</span>
      <nuxt-link to="/createcustomer2">
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
        :data="myrequest.data"
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
