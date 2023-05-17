<script setup>
definePageMeta({
  title: "Manage Pet Owner",
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
    name: "Oyen",
    color: "Orange",
    description: "Manja",
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
            <FormKit v-model="form.customerName" type="text" label="Pet Name" validation="required"
              validation-visibility="dirty" :validation-messages="{
                required: 'Pet name cannot be empty',
              }">
              <template #label>
                Pet Name<span class="text-red-500"> *</span>
              </template>
            </FormKit>

            <FormKit v-model="form.customerName" type="text" label="Pet Color" validation="required"
              validation-visibility="dirty" :validation-messages="{
                required: 'Pet color cannot be empty',
              }">
              <template #label>
                Color<span class="text-red-500"> *</span>
              </template>
            </FormKit>

            <rs-button> Submit </rs-button>
          </FormKit>
        </rs-modal>


        <br>
        <div class="flex">
          <div class="contents">
            <div class="flex-1">
                <rs-button variant="primary" class="float-right" @click="showModalTop = true">
                  <Icon name="material-symbols:add"></Icon>
                  Add
                </rs-button>

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
      