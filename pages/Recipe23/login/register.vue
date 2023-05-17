<script setup>
definePageMeta({
  title: "Register",
});

const form = ref({
  username: "",
  email: "",
  password: "",
  Npassword:"",
});

const submit = async () => {

  if (form.value.password != form.value.Npassword) {
    alert("Password and New Password not match");
    return;
  }
  else{
      try {
      const data = await useFetch("/api/recipe23/register", {
        method: "POST",
        body: {
          usernameR: form.value.username,
          passwordR: form.value.password,
          emailR: form.value.email,
        },
      });


      if (!data) {
        console.log("Data display: " , data);
        alert("Failed");
      } else {
        alert("Success");
        window.location.href = `/login`;
      }
    } catch (error) {
      console.log("Error display: " , error);

    }
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
      <nuxt-link to="/Recipe23/login">
        <Icon
          class="fill-current hover:text-black"
          name="material-symbols:arrow-back-ios-new-rounded"
        ></Icon>
      </nuxt-link>
      <h1
        class="text-3xl font-semibold text-center text-purple-700"
        style="font-family: 'Lobster Two', cursive"
      >
        Sign Up!
      </h1>

      <form class="mt-6">
        <div>
          <label for="username" class="block text-sm text-black-800" required
            >Username*</label
          >
          <input
          v-model="form.username"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div class="mt-4">
          <label for="email" class="block text-sm text-black-800" required
            >Email*</label
          >
          <input
          v-model="form.email"
            type="email"
            class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div class="mt-4">
          <div>
            <label
              for="newpassword"
              class="block text-sm text-black-800"
              required
              >New Password*</label
            >
            <input
            v-model="form.password"
              type="password"
              class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>
        <div class="mt-4">
          <div>
            <label
              for="repeatpassword"
              class="block text-sm text-black-800"
              required
              >Repeat Password*</label
            >
            <input
            v-model="form.Npassword"
              type="password"
              class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>
        <div class="mt-6">
          <button
          @click.prevent="submit"
            class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>