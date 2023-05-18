<script setup>
definePageMeta({
  title: "Info pet",
});


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
  petImage: "",
})

</script>
<template>
  <div>
    <LayoutsBreadcrumb />

    <rs-card class="flex-wrap justify-between p-10 bg-white text-black rounded-md flex-col">

      <div class="flex flex-row gap-6">
        <div class="w-20">
          <p class="font-bold">Image : </p>
        </div>
        <p>Hisham</p>
      </div>

      <div class="flex flex-row gap-6">
        <div class="w-20">
          <p class="font-bold">Pet Name : </p>
        </div>
        <p>Hisham</p>
      </div>

      <div class="flex flex-row gap-6">
        <div class="w-20">
          <p class="font-bold">Pet Type : </p>
        </div>
        <p>Hisham</p>
      </div>

      <div class="flex flex-row gap-6">
        <div class="w-21">
          <p class="font-bold">Description : </p>

        </div>
        <p>Hisham</p>
      </div>

      <div class="flex flex-row gap-6">
        <div class="w-20">
          <p class="font-bold">Breed : </p>

        </div>
        <p>Hisham</p>
      </div>

      <div class="flex flex-row gap-6">
        <p class="font-bold">Pet Condition : </p>
        <p>Hisham</p>
      </div>

      <div class="flex flex-row gap-6">
        <div class="w-20">
          <p class="font-bold">Gender : </p>
        </div>
        <p>Hisham</p>
      </div>

      <div class="flex flex-row gap-6">
        <p class="font-bold">Vaccination Status : </p>
        <p>Hisham</p>
      </div>

      <div class="flex flex-row gap-6">
        <div>
          <p class="font-bold">Deworm Status : </p>
        </div>
        <p>Hisham</p>
      </div>

      <div class="flex flex-row gap-6">
        <div class="w-20">
          <p class="font-bold">State : </p>
        </div>
        <p>Hisham</p>
      </div>

      <div class="flex flex-row gap-6">
        <p class="font-bold">Adoption Fee (RM) : </p>
        <p>Hisham</p>
      </div>

      <div class="flex flex-row gap-6">
        <div class="w-20">
          <p class="font-bold">Status : </p>
        </div>
        <p>Hisham</p>
      </div>

    </rs-card>
  </div>
</template>
      