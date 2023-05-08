<script setup>
definePageMeta({
  title: "Anime Detail",
});

const id = useRoute().params?.id;

const baseAnimeAPI = "https://kitsu.io/api/edge";

const { data: animeDetail } = await useFetch(`${baseAnimeAPI}/anime/${id}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/vnd.api+json",
    Accept: "application/vnd.api+json",
  },
});

// const { data: characterList } = await useFetch(
//   `${baseAnimeAPI}/anime/${id}/characters`,
//   {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/vnd.api+json",
//       Accept: "application/vnd.api+json",
//     },
//   }
// );
</script>

<template>
  <div>
    {{ animeDetail }}
    <rs-card> </rs-card>
  </div>
</template>
