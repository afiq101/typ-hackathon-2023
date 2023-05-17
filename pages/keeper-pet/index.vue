<script setup>
definePageMeta({
  title: "Pet Keeper",
  layout: "empty",
});

const showModalTop = ref(false);

const form = ref({
  ownerName: "",
  ownerUsername: "",
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
</script>
<template>
  <rs-modal title="This is a modal" position="top" v-model="showModalTop" :ok-callback="clickOK" >
    <FormKit type="form" :actions="false" @submit="hantor" :incomplete-message="false">
      <FormKit v-model="form.customerName" type="text" label="Customer Name" validation="required"
        validation-visibility="dirty" :validation-messages="{
          required: 'Customer name cannot be empty',
        }">
        <template #label>
          Name<span class="text-red-500">*</span>
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
      <FormKit v-model="form.customerAddress" type="textarea" label="Address" rows="5" />

      <!-- <rs-button> Submit </rs-button> -->
    </FormKit>
  </rs-modal>

  <div>

    <div class="flex-1 bg-violet-500 col-span-1 ">
      <div class="flex justify-between grid-cols-1  items-center bg-red-200">
        <!-- image logo -->
        <img src="/img/logo.png" alt="logo" class="w-20 h-20" />
        <div class="flex grid-cols-1 gap-4 pr-8">
          <div>Home</div>
          <div>About Us</div>
          <div @click="showModalTop = true">Register</div>
          <div>Login</div>
        </div>

      </div>

      <div class="grid grid-flow-col justify-stretch pt-10 pb-10 h-80">
        <div class="bg-warning"></div>
        <div class="bg-red">You can make difference in their lives.</div>
      </div>
    </div>

    <div class="flex justify-center grid-cols-3 p-8 ">

      <div class="w-32 flex flex-col items-center ">
        <span>Today's Adoption</span>
        <span class="justify-center">8</span>
      </div>

      <div class="w-32 flex flex-col items-center ">
        <span>Total Pets</span>
        <span class="justify-center">10</span>
      </div>

      <div class="w-32 flex flex-col items-center ">
        <span>Total Registered Owner</span>
        <span class="justify-center">40</span>

      </div>
    </div>
    <div class="flex grid-cols-1">

      <p>Find and adopt</p>
      <rs-dropdown title="State">
        <rs-dropdown-item> Option 1 </rs-dropdown-item>
        <rs-dropdown-item> Option 2 </rs-dropdown-item>
        <rs-dropdown-item> Option 3 </rs-dropdown-item>
      </rs-dropdown>

    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 ml-6">
      <rs-card v-for="(val, index) in petData" class="p-5 relative bg-black">
        <img :src="val.image" alt="image" class="w-full h-48 object-cover rounded-lg" />

        <!-- <rs-badge
          variant="warning"
          class="absolute top-3 -right-3"
        >
          Featured
        </rs-badge> -->
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
