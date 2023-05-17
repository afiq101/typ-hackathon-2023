<script setup>
import { ref } from "vue";
import { computed } from "vue";

definePageMeta({
  title: "Homepage",
});

const { data: blogData } = await useFetch("/api/bloganda/list", {
  method: "GET",
});

// console.log("blogData:", blogData);

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

// const blogData = ref([
//           {
//             blogID: 1,
//             blogName: "Lord of the Ring",
//             blogContent: "aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaaa aaaaaa aaaaaa aaaaa aaaaa",
//             blogAuthor: "JK Rowling",
//             blogTag: "book",
//           },{
//             blogID: 2,
//             blogName: "123",
//             blogContent: "aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaaa aaaaaa aaaaaa",
//             blogAuthor: "JK Rowling",
//             blogTag: "number",
//           },{
//             blogID: 1,
//             blogName: "abc",
//             blogContent: "aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaaa aaaaaa aaaaaa",
//             blogAuthor: "JK Rowling",
//             blogTag: "letters",
//           },{
//             blogID: 1,
//             blogName: "defs",
//             blogContent: "aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaaa aaaaaa aaaaaa",
//             blogAuthor: "JK Rowling",
//             blogTag: "letters",
//           },
//           {
//             blogID: 1,
//             blogName: "123",
//             blogContent: "aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaaa aaaaaa aaaaaa",
//             blogAuthor: "JK Rowling",
//             blogTag: "numbers",
//           },
//           {
//             blogID: 1,
//             blogName: "123",
//             blogContent: "aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaaa aaaaaa aaaaaa",
//             blogAuthor: "JK Rowling",
//             blogTag: "numbers",
//           },
//           {
//             blogID: 1,
//             blogName: "123",
//             blogContent: "aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaaa aaaaaa aaaaaa",
//             blogAuthor: "JK Rowling",
//             blogTag: "numbers",
//           },
//           {
//             blogID: 1,
//             blogName: "123",
//             blogContent: "aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaaa aaaaaa aaaaaa",
//             blogAuthor: "JK Rowling",
//             blogTag: "numbers",
//           },
//         ]);

        const tagData = ref([
          {
            tagID: 1,
            tagName: "book",
          },{
            tagID: 2,
            tagName: "number",
          },{
            tagID: 3,
            tagName: "letters",
          },{
            tagID: 4,
            tagName: "numbers",
          },
        ]);

const filterBlogs = computed(() => {
  if (filteredTag.value) {
    return blogData.value.filter((blog) => blog.blogTag === filteredTag.value);
  } else {
    return blogData.value;
  }
});
</script>

<template>
  <h2
    class="p-5 flex justify-between items-start md:items-center flex-col md:flex-row"
  >
    <h2>Homepage</h2>
    <nuxt-link to="/bloganda/create">
      <rs-button>
        <Icon name="material-symbols:add"></Icon>
        Create Blog
      </rs-button>
    </nuxt-link>
  </h2>

  <div class="flex justify-between">
    <div>
      <rs-card class="p-5">
        <span class="text-xl font-bold mb-10">List of blogs</span>
        <transition name="fade">
          <div class="flex justify-center" v-if="filterBlogs.length > 0">
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6">
              <nuxt-link
                v-for="blog in filterBlogs"
                :key="blog.blogID"
                :to="'/bloganda/' + blog.blogID"
              >
                <rs-card
                  class="p-5 relative"
                  v-for="(val, index) in blogData.data"
                >
                  <h5>
                    {{ val.blogName }}
                  </h5>
                  <p class="">
                    {{ val.blogContent }}
                  </p>
                  <br />
                  <br />
                  <span>Author: {{ val.blogAuthor }}</span>
                </rs-card>
              </nuxt-link>
            </div>
          </div>
          <div class="flex justify-center" v-else>
            <rs-card
              class="border border-gray-300 p-5 shadow-lg mb-4 mt-10 w-full"
            >
              No blogs found.
            </rs-card>
          </div>
        </transition>
      </rs-card>
    </div>
    <div>
      <rs-card class="px-15 py-5 ml-10 mr-5">
        <div class="flex justify-between items-center">
          <span class="text-xl font-bold mx-auto mb-5">Tags</span>
          <Icon
            name="fluent:arrow-reset-24-filled"
            class="ml-2 cursor-pointer mb-5"
            @click="resetTags"
          ></Icon>
        </div>

        <div class="flex justify-center">
          <div class="flex-row">
            <div v-for="tag in tagData" :key="tag.tagID" class="mr-2 mb-2">
              <rs-button class="w-full" @click="filterByTag(tag.tagName)"
                >{{ tag.tagName }}
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
