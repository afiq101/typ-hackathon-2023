<script setup>
import { ref } from "vue";
import { computed } from "vue";

definePageMeta({
  title: "Homepage",
});

const { data: blogData } = await useFetch("/api/bloganda/list", {
  method: "GET",
});

const filterBlogs = computed(() => {
  if (filteredTag.value) {
    return blogData.value.filter((blog) => blog.blogTag === filteredTag.value);
  } else {
    return blogData.value;
  }
});

function truncateContent(content) {
  const words = content.split(" ");
  const truncated = words.slice(0, 4).join(" ");
  if (words.length > 4) {
    return truncated + "...";
  } else {
    return truncated;
  }
}

let filteredTag = ref(null);

function filterByTag(tagName) {
  filteredTag.value = tagName;
}

function resetTags() {
  filteredTag.value = null;
}

const tagData = ref([
  {
    tagID: 1,
    tagName: "project",
  }, {
    tagID: 2,
    tagName: "idea",
  }, {
    tagID: 3,
    tagName: "off topic",
  },
]);


// console.log("blogData:", blogData);





</script>

<template>
  <h2 class="p-5 flex justify-between items-start md:items-center flex-col md:flex-row">
    <h2>Blogs</h2>
    <nuxt-link to="/bloganda/create">
      <rs-button>
        <Icon name="material-symbols:add"></Icon>
        Create Blog
      </rs-button>
    </nuxt-link>
  </h2>
  <div class="flex justify-between">
    <div>
      <rs-card class="bg-slate-300 p-5 ">
        <span class="text-xl font-bold mb-10">List of blogs</span>

        <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6">
          <nuxt-link v-for="(val, index) in  blogData.data " :key="val.blogID" :to="`/bloganda/edit/${ val.blogID }`">
            <rs-card class="bg-slate-200 flex p-5 relative h-full w-full border ">
              <h5>{{ val.blogName }}</h5>
              <p class="my-5">{{ truncateContent(val.blogContent) }}</p>
              <div class="absolute bottom-2 right-2">
                <span>{{ val.blogAuthor }}</span>
              </div>
            </rs-card>
          </nuxt-link>
        </div>
      </rs-card>
    </div>
    <div>
      <rs-card class="px-15 py-5 ml-10 mr-5 bg-red-50">
        <div class="flex justify-between items-center">
          <span class="text-xl font-bold mx-auto mb-5">Tags</span>
          <Icon name="fluent:arrow-reset-24-filled" class="ml-2 cursor-pointer mb-5" @click=" resetTags "></Icon>
        </div>

        <div class="flex justify-center">
          <div class="flex-row">
            <div v-for=" tag  in  tagData " :key=" tag.tagID " class="mr-2 mb-2">
              <rs-button class="w-full mx-2" @click="filterByTag(tag.tagName)">{{ tag.tagName }}
              </rs-button>
            </div>
          </div>
        </div>
      </rs-card>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>