<script setup>
definePageMeta({
  title: "Info pet",
});

const paramID = useRoute().params.id;

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

const { data } = await useFetch("/api/pet/getPet", {
  method: "GET",
  query: {
    petID: paramID,
  },
});

if (data.value.statusCode == 200) {
  form.value.petName = data.value.data.petName;
  form.value.petType = data.value.data.petType;
  form.value.petBreed = data.value.data.petBreed;
  form.value.petDescription = data.value.data.petDescription;
  form.value.vaccinationStatus = data.value.data.vaccinationStatus;
  form.value.dewormStatus = data.value.data.dewormStatus;
  form.value.petGender = data.value.data.petGender;
  form.value.petLocation = data.value.data.petLocation;
  form.value.petHealth = data.value.data.petHealth;
  form.value.petStatus = data.value.data.petStatus;
  form.value.petFee = data.value.data.petFee;
  form.value.petColor = data.value.data.petColor;
  form.value.petImage = data.value.data.petImage;
}

</script>
<template>
  <div>
    <LayoutsBreadcrumb />

    <rs-card class="flex-wrap justify-between p-10 bg-white text-black rounded-md flex-col">

      <div class="flex flex-row gap-6 mb-3">
        <div class="w-20">
          <p class="font-bold">Image : </p>
        </div>
        <img :src="'../../img/' + form.petImage" class="w-50 h-40 rounded-md">
      </div>

      <div class="flex flex-row gap-6 mb-3">
        <div class="w-20">
          <p class="font-bold">Pet Name : </p>
        </div>
        <p>{{ form.petName }}</p>

      </div>

      <div class="flex flex-row gap-6 mb-3">
        <div class="w-20">
          <p class="font-bold">Pet Type : </p>
        </div>
        <p>{{ form.petType }}</p>

      </div>

      <div class="flex flex-row gap-6 mb-3">
        <div class="w-21">
          <p class="font-bold">Description : </p>

        </div>
        <p>{{ form.petDescription }}</p>

      </div>

      <div class="flex flex-row gap-6 mb-3">
        <div class="w-20">
          <p class="font-bold">Breed : </p>

        </div>
        <p>{{ form.petBreed }}</p>

      </div>

      <div class="flex flex-row gap-6 mb-3">
        <p class="font-bold">Pet Condition : </p>
        <p>{{ form.petHealth }}</p>

      </div>

      <div class="flex flex-row gap-6 mb-3">
        <div class="w-20">
          <p class="font-bold">Gender : </p>
        </div>
        <p>{{ form.petGender }}</p>

      </div>

      <div class="flex flex-row gap-6 mb-3">
        <p class="font-bold">Vaccination Status : </p>
        <p>{{ form.vaccinationStatus }}</p>

      </div>

      <div class="flex flex-row gap-6 mb-3">
        <div>
          <p class="font-bold">Deworm Status : </p>
        </div>
        <p>{{ form.dewormStatus }}</p>

      </div>

      <div class="flex flex-row gap-6 mb-3">
        <div class="w-20">
          <p class="font-bold">State : </p>
        </div>
        <p>{{ form.petLocation }}</p>

      </div>

      <div class="flex flex-row gap-6 mb-3">
        <p class="font-bold">Adoption Fee (RM) : </p>
        <p>{{ form.petFee }}</p>

      </div>

      <div class="flex flex-row gap-6 mb-3">
        <div class="w-20">
          <p class="font-bold">Status : </p>


        </div>
        <rs-badge v-if="form.petStatus == 'Active'" class="bg-green-500 text-white rounded-md">
          {{ form.petStatus }}
        </rs-badge>
      </div>

    </rs-card>
  </div>
</template>
      