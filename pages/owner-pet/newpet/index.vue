<script setup>
definePageMeta({
  title: "New Pet",
})
const { $swal } = useNuxtApp()
const gender = ["Male", "Female"]
const statuslist = ["Active", "Inactive"]
const vaccineStatus = ["Yes", "No"]
const deworm = ["Yes", "No"]
const negeri = ["KL", "Selangor", "Negeri 9", "Kedah", "Pahang", "Perak"]
const pettype = ["Cat", "Dog"]
const breed = [
  "Domestic Short Hair",
  "Domestic Long Hair",
  "British Short Hair",
]
</script>
<template>
  <div>
    <LayoutsBreadcrumb />

    <rs-card
      class="flex-wrap justify-between p-10 bg-white text-black rounded-md flex-col"
    >
      <FormKit type="text" label="Pet Name" />

      <FormKit type="select" label="Pet Type" :options="pettype" />

      <FormKit type="textarea" label="Description" />

      <Label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500 dark:formkit-invalid:text-danger">Breed</Label>
      <v-select label="" name="Breed" :options="breed" multiple></v-select>

      <FormKit type="text" label="Pet Condition" />

      <FormKit
        type="radio"
        label="Gender"
        help="Choose your pet gender"
        :options="gender"
      />

      <FormKit
        type="radio"
        label="Vaccination Status"
        help="Is your pet has completed vaccination cycle?"
        :options="vaccineStatus"
      />

      <FormKit
        type="radio"
        label="Deworm Status"
        help="Is your pet has taken deworm medicine?"
        :options="deworm"
      />

      <FormKit type="select" label="State" :options="negeri" />

      <FormKit type="mask" label="Adoption Fee (RM)" mask="##.##" />

      <FormKit type="select" label="Status" :options="statuslist" />

      <rs-button @click="submit">Save</rs-button>
    </rs-card>
  </div>
</template>
