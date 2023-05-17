<script setup>
definePageMeta({
  title: "Pet Keeper",
  layout: "empty",
});

const showModalTop = ref(false);

const form = ref({
  ownerName: "",
  ownerPassword: "",
  ownerUsername: "",
  ownerEmail: "",
  ownerAddress: "",
  ownerPhone: "",
});

const petData = ref([
  {
    id: 1,
    name: "Oyen",
    color: "Orange",
    description: "Manja",
    status: "Active",
    image: "/img/test-meow.jpeg",
  }
]);

// const { data: bookData } = await useFetch("/api/book/list", {
//   method: "GET",
// });

// console.log(bookData);

const submitData = async () => {

  if (form.value.ownerName === "" || form.value.ownerUsername === "" || form.value.ownerEmail === "" || form.value.ownerAddress === "" || form.value.ownerPhone === "") {
    // $toast.error("Please fill in the book name");
    return;
  }

  try {
    const { data } = await useFetch("/api/keeper/add", {
      method: "POST",
      body: {
        ownerName: form.value.ownerName,
        ownerPassword: form.value.ownerPassword,
        ownerUsername: form.value.ownerUsername,
        ownerEmail: form.value.ownerEmail,
        ownerAddress: form.value.ownerAddress,
        ownerPhone: form.value.ownerPhone,
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
</script>
<template>
  <rs-modal title="Register" position="top" v-model="showModalTop">
    <FormKit type="form" :actions="false" @submit="submitData" :incomplete-message="false">
      <FormKit v-model="form.ownerName" type="text" label="Customer Name" validation="required"
        validation-visibility="dirty" :validation-messages="{
          required: 'Customer name cannot be empty',
        }">
      </FormKit>

      <FormKit v-model="form.ownerPassword" type="password" label="Password" validation="required"
        validation-visibility="dirty" :validation-messages="{
          required: 'Customer name cannot be empty',
        }">
      </FormKit>

      <FormKit v-model="form.ownerUsername" type="text" label="Username" validation="required"
        validation-visibility="dirty" :validation-messages="{
          required: 'Username cannot be empty',
        }">
      </FormKit>

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

  <div>

    <div class=" flex-1 bg-violet-500 col-span-1 ">
      <div class=" flex justify-between grid-cols-1 items-center bg-red-200">
        <!-- image logo -->
        <img src="@@/assets/img/logo/mewonity_logo_1.png" alt="logo" class="w-35 h-20" />
        <div class="flex grid-cols-1 gap-4 pr-8">
          <div>
            <rs-button>
              Home
            </rs-button>
          </div>
          <div>
            <rs-button>
              About Us
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

    <div class="flex justify-center grid-cols-3 p-8 ">

      <div class="w-32 flex flex-col items-center">
        <div class="h-10">
          <h4>Today's Adoption</h4>
        </div>
        <span class="justify-center pt-6">8</span>
      </div>
      <div class="w-32 flex flex-col items-center ">
        <div class="h-10">
          <h4>Total Pets</h4>
        </div>
        <span class="justify-center pt-6">10</span>
      </div>

      <div class="w-32 flex flex-col items-center ">
        <div class="h-10">
          <h4>Total Registered Owner</h4>
        </div>
        <span class="justify-center pt-6">40</span>

      </div>

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
      <rs-card v-for="(val, index) in petData" class="p-5 relative bg-black">
        <img :src="val.image" alt="image" class="w-full h-48 object-cover rounded-lg" />
        <h5>
          {{ val.name }}
          <!-- test -->
        </h5>
        <p class="">
          <!-- test -->
          {{ val.color }}
        </p>
        <br />
        <br />
        <!-- <span>Author: {{ val.bookAuthor }}</span> -->
        <span> {{ val.description }}</span>


        <!-- <nuxt-link :to="`/bookstore/edit/${val.bookID}`"> -->
        <rs-button size="sm" class="mt-2"> Click Me ! </rs-button>
        <!-- </nuxt-link> -->
      </rs-card>
    </div>
  </div>
</template>
