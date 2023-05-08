<script setup>
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  FreeMode,
} from "swiper";
definePageMeta({
  title: "Home",
});

const baseAnimeAPI = "https://kitsu.io/api/edge";
const modules = [Pagination, Scrollbar, A11y, Autoplay];
const modules2 = [Scrollbar, A11y, FreeMode];

const trendingAnimeList = ref([]);
const animeList = ref([]);

// const mangaList = ref([]);

// Get Trending Anime List
const { data: TAList } = await useFetch(`${baseAnimeAPI}/trending/anime`, {
  method: "GET",
  headers: {
    "Content-Type": "application/vnd.api+json",
    Accept: "application/vnd.api+json",
  },
});

trendingAnimeList.value = TAList.value?.data;

// Get Anime List
const { data: AList } = await useFetch(`${baseAnimeAPI}/anime`, {
  method: "GET",
  headers: {
    "Content-Type": "application/vnd.api+json",
    Accept: "application/vnd.api+json",
  },
});

animeList.value = AList.value?.data;

console.log("trendingAnimeList.value", trendingAnimeList.value);
console.log("animeList.value", animeList.value);

// const getMangaListSorting = await useFetch(`${baseAnimeAPI}/trending/manga`, {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/vnd.api+json",
//     Accept: "application/vnd.api+json",
//   },
// });

// const respGetMangaListSorting = getMangaListSorting.data?.value;
// mangaList.value = respGetMangaListSorting.data;
// console.log("mangaList.value", mangaList.value);
</script>
<template>
  <div>
    <p class="mb-6">
      <span class="text-2xl font-semibold">Trending Anime</span> <br />
      <span class="text-gray-500 dark:text-gray-400">
        See what's trending in the anime community right now.
      </span>
    </p>

    <swiper
      class="rounded-lg relative mb-8"
      :modules="modules"
      :slides-per-view="1"
      :spaceBetween="30"
      :centeredSlides="true"
      :pagination="{
        dynamicBullets: true,
      }"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide v-for="(val, index) in trendingAnimeList">
        <rs-card class="!mb-0 h-[450px]">
          <div
            class="card-container rounded-lg bg-no-repeat bg-cover bg-center h-[450px]"
            :style="{
              'background-image':
                'url(' + val.attributes.coverImage?.original + ')',
            }"
          >
            <span
              class="rating absolute top-2 right-2 bg-yellow-500 rounded-full text-white py-1 px-2 flex justify-center items-center"
            >
              <Icon name="ic:round-star-rate" size="16px"></Icon>
              {{ val.attributes.averageRating }}
            </span>
            <div
              class="title-container w-full absolute bottom-7 left-0 text-white z-10 px-6 flex justify-between items-center"
            >
              <div>
                <h2>
                  {{ val.attributes.canonicalTitle }}
                </h2>

                <p>
                  {{ val.attributes.showType }} •
                  {{
                    val.attributes.status == "finished" ? "Finished" : "Ongoing"
                  }}
                </p>

                <p>
                  {{ val.attributes.episodeCount || "???" }} Episodes •
                  {{ val.attributes.episodeLength }} Minutes
                </p>
              </div>
              <div>
                <nuxt-link :to="`/anime/${val.id}`">
                  <rs-button
                    variant="danger-outline"
                    class="hover:!bg-red-400/10 !px-8 !py-3"
                    >Details</rs-button
                  >
                </nuxt-link>
              </div>
            </div>
          </div>
        </rs-card>
      </swiper-slide>
    </swiper>

    <p class="mb-6 flex justify-between items-center">
      <span class="text-xl font-semibold">List of Anime</span>
      <nuxt-link to="/"> See All </nuxt-link>
    </p>

    <swiper
      class="rounded-lg relative"
      :modules="modules2"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        '1080': {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }"
      :pagination="{
        clickable: true,
      }"
      :freeMode="true"
    >
      <swiper-slide class="my-5" v-for="(val, index) in animeList">
        <nuxt-link :to="`/anime/${val.id}`">
          <rs-card class="relative !mb-0 duration-300 hover:scale-105">
            <div
              class="rounded-lg h-[400px] bg-no-repeat bg-cover bg-top cursor-pointer"
              :style="{
                'background-image':
                  'url(' + val.attributes.posterImage?.small + ')',
              }"
            ></div>

            <div class="p-3">
              <p class="overflow-hidden truncate w-full">
                {{ val.attributes.canonicalTitle }}
                <br />
                <client-only>
                  <div>
                    <Icon
                      v-for="(val, index) in Math.round(
                        val.attributes.averageRating / 20
                      )"
                      name="ic:round-star-rate"
                      size="16px"
                      class="text-yellow-400"
                    ></Icon>
                    <Icon
                      v-for="(val, index) in 5 -
                      Math.round(val.attributes.averageRating / 20)"
                      name="ic:round-star-rate"
                      size="16px"
                      class="text-gray-400"
                    ></Icon>
                  </div>
                </client-only>
              </p>
            </div>
          </rs-card>
        </nuxt-link>
      </swiper-slide>
    </swiper>

    <!-- <rs-tab fill>
      <rs-tab-item title="Trending Anime" :padding="false">
        <div class="grid grid-cols-3 gap-8 my-5">
          <rs-card class="relative !mb-0" v-for="(val, index) in trendingAnimeList">
            <div
              class="rounded-lg h-[400px] bg-no-repeat bg-cover bg-center"
              :style="{
                'background-image':
                  'url(' + val.attributes.posterImage?.medium + ')',
              }"
            >
              <span
                class="rating absolute top-2 right-2 bg-yellow-500 rounded-full text-white py-1 px-2 flex justify-center items-center"
              >
                <Icon name="ic:round-star-rate" size="16px"></Icon>
                {{ val.attributes.averageRating }}
              </span>
              {{ val.attributes.canonicalTitle }}
            </div>
          </rs-card>
        </div>
      </rs-tab-item>
      <rs-tab-item title="Trending Manga" :padding="false">
        <div class="grid grid-cols-3 gap-8 my-5">
          <rs-card class="relative !mb-0" v-for="(val, index) in mangaList">
            <div
              class="rounded-lg h-[400px] bg-no-repeat bg-cover bg-center"
              :style="{
                'background-image':
                  'url(' + val.attributes.posterImage?.medium + ')',
              }"
            >
              <span
                class="rating absolute top-2 right-2 bg-yellow-500 rounded-full text-white py-1 px-2 flex justify-center items-center"
              >
                <Icon name="ic:round-star-rate" size="16px"></Icon>
                {{ val.attributes.averageRating }}
              </span>
              {{ val.attributes.canonicalTitle }}
            </div>
          </rs-card>
        </div>
      </rs-tab-item>
    </rs-tab> -->
  </div>
</template>

<style lang="scss" scoped>
:deep(.card-container:after) {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, #0d0e0f 100%);
}
</style>
