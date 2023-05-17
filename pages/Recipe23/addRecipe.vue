<script setup>
definePageMeta({
  title: "Add Recipe",
});

const form = ref({
  recipename: "",
  recipeingredient: "",
});

const submit = async () => {

    try {
    const data = await useFetch("/api/recipe23/addRecipe", {
      method: "POST",
      body: {
        recipename: form.value.recipename,
        recipeingredient: form.value.recipeingredient,
      },
    });


    if (!data) {
      console.log("Data display: " , data);
      alert("Failed");
    } else {
      alert("Success");
      window.location.href = `/recipe23`;
    }
  } catch (error) {
    console.log("Error display: " , error);

  }

  
};

</script>

<template>
  <body
    class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal"
  >
    <h5>
      <nuxt-link to="/Recipe23/recipe">
        <Icon
          class="fill-current hover:text-black"
          name="material-symbols:arrow-back-ios-new-rounded"
        >
        </Icon>
      </nuxt-link>
      ADD RECIPE
    </h5>
    <form class="mt-10">
      <div>
        <label for="foodname" class="block text-sm text-black-800" required
          >Food Name*</label
        >
        <input
        v-model="form.recipename"
          type="text"
          class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div class="mt-4">
        <label for="details" class="block text-sm text-black-800" required
          >Food Details*</label
        >
        <textarea
        v-model="form.recipeingredient"
          type="text"
          class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <!-- <div class="mt-4">
        <label for="image" class="block text-sm text-black-800" required
          >Food Images*</label
        >
        <input
          type="image"
          class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div> -->
      <!-- <div class="col-md-6 mt-20">
        <label class="mb-0"><strong>Upload Food Images</strong></label>
        <input
          id="foodimage"
          type="text"
          class="form-control rounded-0"
          name="foodimage"
        />
        <input id="file" type="file" name="general[file]" />
      </div> -->

      <div class="mt-6">
        <button
          @click.prevent="submit"
          class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
        >
          Add
        </button>
      </div>
    </form>
  </body>
</template>