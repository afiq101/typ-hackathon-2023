<script setup>
definePageMeta({
  title: "Register",
  layout: "empty",
  middleware: ["redirect-dashboard"],
});

const togglePasswordVisibility = ref(false);
const togglePasswordVisibility2 = ref(false);

const formKeeper = ref({
  keeperName: "",
  keeperPassword: "",
  keeperUsername: "",
  keeperEmail: "",
  keeperAddress: "",
  keeperPhone: "",
});

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
      alert("Register Success");
      await navigateTo("/login");
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
  <div class="flex-none md:flex justify-center text-center items-center h-screen">
    <div class="w-full md:w-3/4 lg:w-1/2 xl:w-2/6">
      <rs-card class="h-screen md:h-auto px-10 md:px-16 py-12 md:py-20 mb-0">
        <h3 class="mb-4">Sign Up</h3>
        <p class="text-slate-500 mb-6 col-sp">
          Please fill in the form to create an account.
        </p>
        <FormKit type="form" :actions="false" @submit="submitData" :incomplete-message="false">
          <FormKit v-model="formKeeper.keeperName" type="text" label="Keeper Name" validation="required"
            validation-visibility="dirty" :validation-messages="{
              required: 'Keeper name cannot be empty',
            }" :classes="{
  outer: 'col-span-2',
  label: 'text-left',
  messages: 'text-left',
}">
          </FormKit>

          <FormKit v-model="formKeeper.keeperPassword" type="password" label="Password" validation="required"
            validation-visibility="dirty" :validation-messages="{
              required: 'Password cannot be empty',
            }" :classes="{
  outer: 'col-span-2',
  label: 'text-left',
  messages: 'text-left',
}">
          </FormKit>

          <FormKit v-model="formKeeper.keeperUsername" type="text" label="Username" validation="required"
            validation-visibility="dirty" :validation-messages="{
              required: 'Username cannot be empty',
            }" :classes="{
  outer: 'col-span-2',
  label: 'text-left',
  messages: 'text-left',
}">
          </FormKit>

          <FormKit v-model="formKeeper.keeperPhone" type="text" label="Phone Number" validation="required"
            validation-visibility="dirty" :validation-messages="{
              required: 'Phone Number cannot be empty',
            }" :classes="{
  outer: 'col-span-2',
  label: 'text-left',
  messages: 'text-left',
}" />
          <FormKit v-model="formKeeper.keeperEmail" type="email" label="Email" validation="required"
            validation-visibility="dirty" :validation-messages="{
              required: 'Email cannot be empty',
            }" :classes="{
  outer: 'col-span-2',
  label: 'text-left',
  messages: 'text-left',
}" />
          <FormKit v-model="formKeeper.keeperAddress" type="textarea" label="Address" rows="4" validation="required"
            validation-visibility="dirty" :validation-messages="{
              required: 'Address cannot be empty',
            }" :classes="{
  outer: 'col-span-2',
  label: 'text-left',
  messages: 'text-left',
}" />

          <div class="float-right">
            <rs-button> Submit </rs-button>

          </div>

        </FormKit>

        <p class="mt-3 text-center text-slate-500">
          Already have an account?
          <NuxtLink to="/login" class="text-primary hover:underline">Login</NuxtLink>
        </p>
      </rs-card>
    </div>
  </div>
</template>
