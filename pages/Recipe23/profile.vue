<script setup>
definePageMeta({
  title: "Profile",
});
</script>

<template>
  <body
    class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal"
  >
    <h5>
      <nuxt-link to="/Recipe23">
        <Icon
          class="fill-current hover:text-black"
          name="material-symbols:arrow-back-ios-new-rounded"
        >
        </Icon>
      </nuxt-link>
      UPDATE PROFILE
    </h5>
    <form class="mt-10">
      <div>
        <label for="username" class="block text-sm text-black-800" required
          >Username*</label
        >
        <input
          type="text"
          class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      
      <div class="mt-4">
        <label for="email" class="block text-sm text-black-800" required
          >Email*</label
        >
        <input
          type="email"
          class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div class="mt-4">
        <div>
          <label for="newpassword" class="block text-sm text-black-800" required
            >New Password*</label
          >
          <input
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
          Update
        </button>
      </div>
    </form>
  </body>
</template>
      