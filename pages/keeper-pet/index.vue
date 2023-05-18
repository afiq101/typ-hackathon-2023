<script setup>
definePageMeta({
  title: "Pet Keeper",
  layout: "empty",
});

const showModalTop = ref(false);
const showModalRequest = ref(false);

const petID = "";

const form = ref({
  ownerName: "",
  dateAppointment: "",
  timeAppointment: "",
  ownerEmail: "",
  ownerAddress: "",
  ownerPhone: "",
  petID: "",
});

const formKeeper = ref({
  keeperName: "",
  keeperPassword: "",
  keeperUsername: "",
  keeperEmail: "",
  keeperAddress: "",
  keeperPhone: "",
});

const time = [
  {
    label: "10:00 AM", value: "10"
  },
  {
    label: "10:30 AM", value: "1030"
  },
  {
    label: "11:00 AM", value: "11"
  },
  {
    label: "11:30 AM", value: "1130"
  },
  {
    label: "12:00 PM", value: "12"
  },
  {
    label: "12:30 PM", value: "1230"
  },
  {
    label: "01:00 PM", value: "13"
  },
  {
    label: "01:30 PM", value: "1330"
  },
  {
    label: "02:00 PM", value: "14"
  },
  {
    label: "02:30 PM", value: "1430"
  },
  {
    label: "03:00 PM", value: "15"
  },
  {
    label: "03:30 PM", value: "1530"
  },
  {
    label: "04:00 PM", value: "16"
  },
  {
    label: "04:30 PM", value: "1630"
  },
  {
    label: "05:00 PM", value: "17"
  },
  {
    label: "05:30 PM", value: "1730"
  },
  {
    label: "06:00 PM", value: "18"
  },
  {
    label: "06:30 PM", value: "1830"
  },
  {
    label: "07:00 PM", value: "19"
  },
  {
    label: "07:30 PM", value: "1930"
  },
  {
    label: "08:00 PM", value: "20"
  },

];


const { data: petData } = await useFetch("/api/pet/list", {
  method: "GET",
});

console.log(petData);

const submitData = async () => {

  if (formKeeper.value.keeperName === "" || formKeeper.value.keeperPassword === "" || formKeeper.value.keeperUsername === "" || formKeeper.value.keeperAddress === "" || formKeeper.value.keeperPhone === "") {
    // $toast.error("Please fill in the book name");
    return;
  }

  try {
    const { data } = await useFetch("/api/keeper/add", {
      method: "POST",
      body: {
        keeperName: formKeeper.value.keeperName,
        keeperPassword: formKeeper.value.keeperPassword,
        keeperUsername: formKeeper.value.keeperUsername,
        keeperEmail: formKeeper.value.keeperEmail,
        keeperAddress: formKeeper.value.keeperAddress,
        keeperPhone: formKeeper.value.keeperPhone,
      }
    });

    console.log(data);

    if (data.value.statusCode == 200) {
      showModalTop.value = false;
      alert("Register Success");
      // $toast.success(data.message);
    } else {
      // $toast.error(data.message);
      alert(data.value.message);
    }
  } catch (error) {
    console.log(error);
  }
};

const submitDataRequest = async () => {

  console.log("petID", petID);
  console.log("form", form.value);
  // return;

  if (form.value.ownerName === "" || form.value.dateAppointment === "" || form.value.ownerEmail === "" || form.value.ownerAddress === "" || form.value.ownerPhone === "" || form.value.timeAppointment === "") {
    // $toast.error("Please fill in the book name");
    return;
  }

  try {
    const { data } = await useFetch("/api/request-adopt/add", {
      method: "POST",
      body: {
        ownerName: form.value.ownerName,
        dateAppointment: form.value.dateAppointment,
        timeAppointment: form.value.timeAppointment,
        ownerEmail: form.value.ownerEmail,
        ownerAddress: form.value.ownerAddress,
        ownerPhone: form.value.ownerPhone,
        adoptPetId: form.value.petID,
      }
    });

    console.log(data);

    if (data.value.statusCode == 200) {
      showModalRequest.value = false;
      alert("Register Success");
      // $toast.success(data.message);
    } else {
      // $toast.error(data.message);
      alert(data.value.message);
    }
  } catch (error) {
    console.log(error);
  }
};

const requestAdopt = async (petId) => {
  console.log("petId", petId);
  showModalRequest.value = true;
  form.value.petID = petId;
};


</script>
<template>
  <rs-modal title="Register" position="top" v-model="showModalTop">
    <FormKit type="form" :actions="false" @submit="submitData" :incomplete-message="false">
      <FormKit v-model="formKeeper.keeperName" type="text" label="Keeper Name" validation="required"
        validation-visibility="dirty" :validation-messages="{
          required: 'Keeper name cannot be empty',
        }">
      </FormKit>

      <FormKit v-model="formKeeper.keeperPassword" type="password" label="Password" validation="required"
        validation-visibility="dirty" :validation-messages="{
          required: 'Password cannot be empty',
        }">
      </FormKit>

      <FormKit v-model="formKeeper.keeperUsername" type="text" label="Username" validation="required"
        validation-visibility="dirty" :validation-messages="{
          required: 'Username cannot be empty',
        }">
      </FormKit>

      <FormKit v-model="formKeeper.keeperPhone" type="text" label="Phone Number" validation="required"
        validation-visibility="dirty" :validation-messages="{
          required: 'Phone Number cannot be empty',
        }" />
      <FormKit v-model="formKeeper.keeperEmail" type="email" label="Email" validation="required"
        validation-visibility="dirty" :validation-messages="{
          required: 'Email cannot be empty',
        }" />
      <FormKit v-model="formKeeper.keeperAddress" type="textarea" label="Address" rows="4" validation="required"
        validation-visibility="dirty" :validation-messages="{
          required: 'Address cannot be empty',
        }" />

      <div class="float-right">
        <rs-button> Submit </rs-button>

      </div>

    </FormKit>
    <template #footer></template>

  </rs-modal>


  <!-- Modal Request -->
  <rs-modal title="Adopt" position="top" v-model="showModalRequest">
    <FormKit type="form" :actions="false" @submit="submitDataRequest" :incomplete-message="false">
      <FormKit v-model="form.ownerName" type="text" label="Owner Name" validation="required" validation-visibility="dirty"
        :validation-messages="{
          required: 'Owner name cannot be empty',
        }">
      </FormKit>

      <FormKit v-model="form.dateAppointment" type="date" label="Date Appointment"
        help="Enter date (the date must be after 2020)" validation="required" validation-visibility="live" />

      <FormKit type="select" label="Time Appointment" :options="time" v-model="form.timeAppointment" />

      <FormKit v-model="form.ownerPhone" type="text" label="Phone Number" validation="required"
        validation-visibility="dirty" :validation-messages="{
          required: 'Phone Number cannot be empty',
        }" />
      <FormKit v-model="form.ownerEmail" type="email" label="Email" validation="required" validation-visibility="dirty"
        :validation-messages="{
          required: 'Email cannot be empty',
        }" />
      <FormKit v-model="form.ownerAddress" type="textarea" label="Address" rows="4" validation="required"
        validation-visibility="dirty" :validation-messages="{
          required: 'Address cannot be empty',
        }" />

      <div class="float-right">
        <rs-button> Submit </rs-button>

      </div>

    </FormKit>

    <template #footer></template>

  </rs-modal>

  <div class="bg-info">

    <div class=" flex-1 col-span-1 ">
      <div class=" flex justify-between grid-cols-1 items-center">
        <!-- image logo -->
        <img src="@@/assets/img/logo/mewonity_logo_1.png" alt="logo" class="w-35 h-20 pl-10" />
        <div class="flex grid-cols-1 gap-4 pr-8">
          <div>
            <rs-button >
              Home
            </rs-button>
          </div>
          <div>
            <rs-button @click="showModalTop = true">
              Register
            </rs-button>
          </div>
          <div>
            <nuxt-link to="/login">
              <rs-button>
                Login
              </rs-button>
            </nuxt-link>
          </div>
        </div>

      </div>

      <div class="grid grid-flow-col justify-stretch p-10 h-80">
        <div class=" flex justify-end ">
          <img src="@@/assets/img/meow_landingpage.png" alt="logo" class="h-70" />

        </div>
        <div class="flex bg-red-400">
          <h1>
            You can make difference in their lives.
          </h1>
        </div>
      </div>
    </div>

    <div class="flex justify-center grid-cols-3 p-8 gap-10">

      <rs-card>
        <div class="w-50 flex flex-col items-center">
          <div class="h-10">
            <h4>Today's Adoption</h4>
          </div>
          <span class="justify-center pt-10">8</span>
        </div>
      </rs-card>

      <rs-card>
        <div class="w-50 flex flex-col items-center ">
          <div class="h-10">
            <h4>Total Pets</h4>
          </div>
          <span class="justify-center pt-10">10</span>
        </div>
      </rs-card>

      <rs-card>
        <div class="w-50 flex flex-col items-center ">
          <div class="h-10">
            <h4>Total Registered Keeper</h4>
          </div>
          <span class="justify-center pt-10">40</span>

        </div>
      </rs-card>


    </div>
    <div class="flex grid-cols-1 p-6 justify-center items-center">

      <div class="w-40 ">
        <p>Find and adopt </p>

      </div>
      <div class="w-40 ">
        <rs-dropdown title="State" class="">
          <rs-dropdown-item> Selangor</rs-dropdown-item>
          <rs-dropdown-item> Kedah </rs-dropdown-item>
          <rs-dropdown-item> Negeri Sembilan </rs-dropdown-item>
        </rs-dropdown>
      </div>


    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 p-6">
      <rs-card v-for="(val, index) in petData.data" class="p-5 relative bg-black">
        <img :src="'../../img/' + val.petImage" alt="image" class="w-full h-48 object-cover rounded-lg" />
        <h5>
          {{ val.petName }}
          <!-- test -->
        </h5>
        <p class="">
          <!-- test -->
          {{ val.petColor }}
        </p>
        <br />
        <br />
        <!-- <span>Author: {{ val.bookAuthor }}</span> -->
        <span> {{ val.petDescription }}</span>


        <!-- <nuxt-link :to="`/bookstore/edit/${val.bookID}`"> -->
        <rs-button size="sm" class="mt-2" @click="requestAdopt(val.petID)"> Click Me ! </rs-button>
        <!-- </nuxt-link> -->
      </rs-card>
    </div>
  </div>
</template>
