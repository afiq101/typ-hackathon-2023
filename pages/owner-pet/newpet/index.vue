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

  const form = ref({
      petName: "",
      petType: "",
      petBreed: "",
      petDescription: "",
      vaccinationStatus: "",
      dewormStatus: "",
      petGender: "",
      petLocation: "",
      petHealth: "",
      petStatus: "",
      petFee: "",
      petColor: "",
})

  const submit = async () => {
  try {
    const { data } = await useFetch("/api/pet-owner/new", {
      method: "POST",
      body: {
        petName: form.value.petName,
        petType: form.value.petType,
        petBreed: form.value.petBreed[0],
        petDescription: form.value.petDescription,
        vaccinationStatus: form.value.vaccinationStatus,
        dewormStatus: form.value.dewormStatus,
        petGender: form.value.petGender,
        petLocation: form.value.petLocation,
        petHealth: form.value.petHealth,
        petStatus: form.value.petStatus,
        petFee: form.value.petFee,
        petColor: form.value.petColor,
      },
    })

    if (data.value.statusCode == 200) {
      alert("Success")
      window.location.href = `/owner-pet`
    } else {
      alert("Failed")
    }
  } catch (error) {
    return
  }
}
  
</script>
<template>
  <div>
    <LayoutsBreadcrumb />

    <rs-card
      class="flex-wrap justify-between p-10 bg-white text-black rounded-md flex-col"
    >
      <FormKit
        type="form"
        :actions="false"
        @submit="submit"
        :incomplete-message="false"
      >
        <FormKit v-model="form.petName" type="text" label="Pet Name" />

        <FormKit v-model="form.petType" type="select" label="Pet Type" :options="pettype" />

        <FormKit v-model="form.petDescription" type="textarea" label="Description" />

        <Label
          class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500 dark:formkit-invalid:text-danger"
          >Breed</Label
        >
        <v-select v-model="form.petBreed" label="" name="Breed" :options="breed" multiple></v-select>

        <FormKit v-model="form.petCondition" type="text" label="Pet Condition" />

        <FormKit
          v-model="form.petGender"
          type="radio"
          label="Gender"
          help="Choose your pet gender"
          :options="gender"
        />

        <FormKit
          v-model="form.vaccinationStatus"
          type="radio"
          label="Vaccination Status"
          help="Is your pet has completed vaccination cycle?"
          :options="vaccineStatus"
        />

        <FormKit
          v-model="form.dewormStatus"
          type="radio"
          label="Deworm Status"
          help="Is your pet has taken deworm medicine?"
          :options="deworm"
        />

        <FormKit v-model="form.petLocation" type="select" label="State" :options="negeri" />

        <FormKit v-model="form.petFee" type="mask" label="Adoption Fee (RM)" mask="##.##" />

        <FormKit v-model="form.petStatus" type="select" label="Status" :options="statuslist" />
      </FormKit>

      <rs-button @click="submit">Save</rs-button>
    </rs-card>
  </div>
</template>
