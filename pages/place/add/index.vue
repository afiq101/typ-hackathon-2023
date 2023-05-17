<script setup>
definePageMeta({
  title: "Add Place",
});

const center = ref([
  {
    lat: -6.175392,
    lng: 106.827153,
  },
]);

const markers = ref({
  lat: -6.175392,
  lng: 106.827153,
});

const form = ref({
  customerName: "",
  customerAddress: "",
  customerPhone: "",
  bookFeatured: false,
});

</script>
<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header> New Place </template>
      <template #body>
        <FormKit type="form" :actions="false" @submit="hantor" :incomplete-message="false">
          <FormKit v-model="form.customerName" type="text" label="Place Name" validation="required"
            validation-visibility="dirty" :validation-messages="{
              required: 'Customer name cannot be empty',
            }">
            <template #label>
              Customer Name<span class="text-red-500">*</span>
            </template>
          </FormKit>
          <FormKit v-model="form.customerPhone" type="text" label="Phone Number" validation="required"
            validation-visibility="dirty" :validation-messages="{
              required: 'Pengarang buku tidak boleh kosong',
            }" />
          <FormKit v-model="form.customerPhone" type="text" label="Email" validation="required"
            validation-visibility="dirty" :validation-messages="{
              required: 'Pengarang buku tidak boleh kosong',
            }" />

          <!-- please create 2 columns-->

          <div class="grid grid-cols-2 gap-3">
            <FormKit v-model="form.customerAddress" type="textarea" label="Address" rows="4" />
            <FormKit v-model="form.customerAddress" type="textarea" label="Address" rows="4" />

          </div>

          <rs-button> Submit </rs-button>
        </FormKit>

      </template>
    </rs-card>
  </div>
</template>
      