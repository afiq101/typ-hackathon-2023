<script setup>
definePageMeta({
  title: "Pet Keeper",
  layout: "empty",
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
  <div >
    <LayoutsBreadcrumb />
    <p
      class="flex justify-end md:items-center mb-4 flex-col md:flex-row"
    >
      <!-- <nuxt-link to="/bookstore/add"> -->
        <rs-button>
          <Icon name="material-symbols:add"></Icon>
          Add New
        </rs-button>
      <!-- </nuxt-link> -->
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6">
      <rs-card v-for="(val, index) in petData" class="p-5 relative bg-black">
        <rs-badge
          variant="warning"
          class="absolute top-3 -right-3"
        >
          Featured
        </rs-badge>
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
        <span> {{val.description}}</span>

        <img :src="val.image" alt="image" class="w-full h-48 object-cover" />

        <!-- <nuxt-link :to="`/bookstore/edit/${val.bookID}`"> -->
          <rs-button size="sm" class="mt-2"> Edit </rs-button>
        <!-- </nuxt-link> -->
      </rs-card>
    </div>
  </div>
</template>
