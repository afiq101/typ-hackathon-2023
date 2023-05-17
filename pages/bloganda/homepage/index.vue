<script setup>
definePageMeta({
  title: "Homepage",
});

function truncateContent(content) {
  const words = content.split(' ');
  const truncated = words.slice(0, 4).join(' ');
  if (words.length > 4) {
    return truncated + '...';
  } else {
    return truncated;
  }
}

const blogData = ref([
          {
            blogID: 1,
            blogName: "Lord of the Ring",
            blogContent: "aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaaa aaaaaa aaaaaa aaaaa aaaaa",
            blogAuthor: "JK Rowling",
            bookFeatured: true,
          },{
            blogID: 2,
            blogName: "123",
            blogContent: "aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaaa aaaaaa aaaaaa",
            blogAuthor: "JK Rowling",
            bookFeatured: false,
          },{
            blogID: 1,
            blogName: "abc",
            blogContent: "aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaaa aaaaaa aaaaaa",
            blogAuthor: "JK Rowling",
            bookFeatured: false,
          },{
            blogID: 1,
            blogName: "defs",
            blogContent: "aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaaa aaaaaa aaaaaa",
            blogAuthor: "JK Rowling",
            bookFeatured: true,
          },
          {
            blogID: 1,
            blogName: "123",
            blogContent: "aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaaa aaaaaa aaaaaa",
            blogAuthor: "JK Rowling",
            bookFeatured: false,
          },
          {
            blogID: 1,
            blogName: "123",
            blogContent: "aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaaa aaaaaa aaaaaa",
            blogAuthor: "JK Rowling",
            bookFeatured: false,
          },
          {
            blogID: 1,
            blogName: "123",
            blogContent: "aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaaa aaaaaa aaaaaa",
            blogAuthor: "JK Rowling",
            bookFeatured: false,
          },
          {
            blogID: 1,
            blogName: "123",
            blogContent: "aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaaa aaaaaa aaaaaa",
            blogAuthor: "JK Rowling",
            bookFeatured: false,
          },
        ]);
        
</script>
<template>
  <h2 class="p-5 flex justify-between items-start md:items-center flex-col md:flex-row">
    <h2>Homepage</h2>
    <nuxt-link to="/bloganda/create">
      <rs-button>
        <Icon name="material-symbols:add"></Icon>
        Create Blog
      </rs-button>
    </nuxt-link>
  </h2>

  <div>
    <rs-card class="p-5">
      <span class="text-xl font-bold mb-10">List of blogs</span>
      <div class="flex justify-center">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6">
          <nuxt-link v-for="blog in blogData" :key="blog.blogID" :to="'/blog/' + blog.blogID">
            <rs-card class="border border-gray-300 p-5 shadow-lg mb-4 mt-10 w-full">
              <h5 class="text-md">{{ blog.blogName }}</h5>
              <p class="py-5">{{ truncateContent(blog.blogContent) }}</p>
              <h6 class="text-sm">{{ blog.blogAuthor }}</h6>
            </rs-card>
          </nuxt-link>
        </div>
      </div>
    </rs-card>
  </div>
</template>




