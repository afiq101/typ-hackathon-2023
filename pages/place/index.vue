<script setup>
definePageMeta({
  title: "Place",
});

const showModalTop = ref(false);

const form = ref({
  customerName: "",
  customerAddress: "",
  customerPhone: "",
  bookFeatured: false,
});

const data = [
  {
    id: 1,
    name: "Place 1",
    address: "Address 1",
    phone: "08123456789",
    email: "place@gmail.com",
    status: "Active",
    action: "Edit",
  }
];

</script>
<template>
  <div>
    <LayoutsBreadcrumb />

    <rs-card>

      <!-- <template #header>
        <h1 class="text-2xl font-semibold">Place</h1>
      </template> -->

      <template #body>

        <rs-modal title="This is a modal" position="top" v-model="showModalTop">
          <FormKit type="form" :actions="false" @submit="hantor" :incomplete-message="false">
            <FormKit v-model="form.customerName" type="text" label="Customer Name" validation="required"
              validation-visibility="dirty" :validation-messages="{
                required: 'Customer name cannot be empty',
              }">
              <template #label>
                Customer Name<span class="text-red-500">*</span>
              </template>
            </FormKit>
            <FormKit v-model="form.customerAddress" type="textarea" label="Customer Address" rows="10" />
            <FormKit v-model="form.customerPhone" type="text" label="Customer Phone Number" validation="required"
              validation-visibility="dirty" :validation-messages="{
                required: 'Pengarang buku tidak boleh kosong',
              }" />
            <rs-button> Submit </rs-button>
          </FormKit>
        </rs-modal>


        <br>
        <div class="flex">
          <div class="contents">
            <div class="flex-1">
              <nuxt-link :to="'/place/add'" class="btn btn-primary">
                <rs-button variant="primary" class="float-right">
                  <Icon name="material-symbols:add"></Icon>
                  Add
                </rs-button>
              </nuxt-link>

            </div>
          </div>
        </div>
        <!-- please create datatable of place using rs-table -->
        <rs-table :data="data" :options-advanced="{
          sortable: true,
          responsive: true,
        }" advanced>

          <template v-slot:status="data">
            <div>
              <rs-badge variant="success">Active</rs-badge>
            </div>
          </template>


          <template v-slot:action="data">
            <div class="flex justify-center">

              <rs-button variant="primary" class="float-right" @click="showModalTop = true">Edit</rs-button>
            </div>
          </template>
        </rs-table>


      </template>


    </rs-card>



  </div>
</template>
      