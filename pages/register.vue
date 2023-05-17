<script setup>
import axios from "axios";

definePageMeta({
  title: "Register",
  layout: "empty",
  middleware: ["redirect-dashboard"],
});

const { $swal } = useNuxtApp();
const username = ref("");
const email = ref("");
const password = ref("");
const repassword = ref("");

const togglePasswordVisibility = ref(false);
const togglePasswordVisibility2 = ref(false);

const register = async () => {
  // console.log("register data: ", data);

  let data = JSON.stringify({
    username: username.value,
    email: email.value,
    password: password.value,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/api/auth/register",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios
    .request(config)
    .then(async (response) => {
      console.log("register resp: ", response.data);

      if (response.data.statusCode === 200) {
        $swal.fire({
          position: "center",
          title: "Success",
          text: response.data.message,
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });

        await navigateTo("/login");
      } else
        $swal.fire({
          title: "Error!",
          text: response.data.message,
          icon: "error",
        });
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(async () => {});
};
</script>

<template>
  <div
    class="flex-none md:flex justify-center text-center items-center h-screen"
  >
    <div class="w-full md:w-3/4 lg:w-1/2 xl:w-2/6">
      <rs-card class="h-screen md:h-auto px-10 md:px-16 py-12 md:py-20 mb-0">
        <h3 class="mb-4">Sign Up</h3>
        <p class="text-slate-500 mb-6 col-sp">
          Please fill in the form to create an account.
        </p>
        <FormKit
          label="Username"
          type="text"
          v-model="username"
          label-class="text-left"
        />
        <FormKit
          label="Email"
          type="email"
          v-model="email"
          label-class="text-left"
        />
        <FormKit
          :type="togglePasswordVisibility ? 'text' : 'password'"
          label="Password"
          v-model="password"
          label-class="text-left"
        >
          <template #suffix>
            <div
              class="bg-gray-100 hover:bg-slate-200 dark:bg-slate-700 hover:dark:bg-slate-900 h-full rounded-r-md p-3 flex justify-center items-center cursor-pointer"
              @click="togglePasswordVisibility = !togglePasswordVisibility"
            >
              <Icon
                v-if="!togglePasswordVisibility"
                name="ion:eye-outline"
                size="19"
              ></Icon>
              <Icon v-else name="ion:eye-off-outline" size="19"></Icon>
            </div>
          </template>
        </FormKit>
        <FormKit
          :type="togglePasswordVisibility2 ? 'text' : 'password'"
          label="Re-enter Password"
          v-model="repassword"
          label-class="text-left"
        >
          <template #suffix>
            <div
              class="bg-gray-100 hover:bg-slate-200 dark:bg-slate-700 hover:dark:bg-slate-900 h-full rounded-r-md p-3 flex justify-center items-center cursor-pointer"
              @click="togglePasswordVisibility2 = !togglePasswordVisibility2"
            >
              <Icon
                v-if="!togglePasswordVisibility2"
                name="ion:eye-outline"
                size="19"
              ></Icon>
              <Icon v-else name="ion:eye-off-outline" size="19"></Icon>
            </div>
          </template>
        </FormKit>
        <FormKit
          type="checkbox"
          label="agreement"
          outer-class="col-span-1 md:col-span-2"
        >
          <template #label
            >I agree to the
            <a class="text-primary hover:underline ml-1">Term and Services</a>
          </template>
        </FormKit>

        <!-- <NuxtLink to="/" class="col-span-1 md:col-span-2"> -->
        <FormKit @click="register()" type="button" input-class="w-full"
          >Sign up</FormKit
        >
        <!-- </NuxtLink> -->

        <p class="mt-3 text-center text-slate-500">
          Already have an account?
          <NuxtLink to="/login" class="text-primary hover:underline"
            >Login</NuxtLink
          >
        </p>
      </rs-card>
    </div>
  </div>
</template>
