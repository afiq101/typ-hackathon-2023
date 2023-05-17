<script setup>
definePageMeta({
  title: "Login",
});

const form = ref({
  username: "",
  email: "",
  password: "",
});

const submit = async () => {
  if (form.value.username == "" || form.value.password == "") {
    alert("Username and Password required");
  }
  try {
    const data = await useFetch("/api/recipe23/login", {
      method: "POST",
      body: {
        usernameR: form.value.username,
        passwordR: form.value.password,
      },
    });

    if (data.value.statusCode == 200) {
      alert("Success");
      window.location.href = `/Recipe23`;
    } else {
      console.log("Data display: " , form.value.username, form.value.password,);
      alert("Failed");

    }
  } catch (error) {
    console.log("Data display: " , form.value.username, form.value.password,);
    console.log("Error display: " , error);

  }
};
</script>

<template>
  <div
    class="relative flex flex-col justify-center min-h-screen overflow-hidden"
  >
    <div
      class="w-full p-6 m-auto bg-white border-t border-red-600 rounded shadow-lg shadow-black-800/50 lg:max-w-md"
    >
      <nuxt-link to="/Recipe23">
        <Icon
          class="fill-current hover:text-black"
          name="material-symbols:arrow-back-ios-new-rounded"
        ></Icon>
      </nuxt-link>
      <h1
        class="text-3xl font-semibold text-center text-purple-700"
        style="font-family: 'Lobster Two', cursive"
      >
        Recipe23
      </h1>

      <form class="mt-6">
        <div>
          <label for="username" class="block text-sm text-black-800">Username</label>
          <input
            v-model="form.username"
            type="text  "
            class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div class="mt-4">
          <div>
            <label for="password" class="block text-sm text-black-800"
              >Password</label
            >
            <input
            v-model="form.password"
              type="password"
              class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" class="text-xs text-gray-600 hover:underline"
            >Forget Password?</a
          >
          <div class="mt-6">
            <button
              class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              @click="submit"
              >
              Login
            </button>
          </div>
        </div>
      </form>

      <!-- START SOCIAL BUTTON FOR LOGIN -->
      <div class="mt-5 tracking-normal text-center">
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          class="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          style="background-color: #ffffff"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="currentColor"
            style="color: #1877f2"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
            />
          </svg>
        </button>

        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          class="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          style="background-color: #ffffff"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="currentColor"
            style="color: #000000"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            />
          </svg>
        </button>

        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          class="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          style="background-color: #ffffff"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="currentColor"
            style="color: #ea4335"
            viewBox="0 0 24 24"
          >
            <path
              d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <!-- END SOCIAL BUTTON FOR LOGIN -->

      <p class="mt-8 text-xs font-light text-center text-gray-700">
        Don't have an account?
        <nuxt-link
          to="/Recipe23/login/register"
          class="font-medium text-purple-600 hover:underline"
          >Sign up</nuxt-link
        >
      </p>
    </div>
  </div>
</template>