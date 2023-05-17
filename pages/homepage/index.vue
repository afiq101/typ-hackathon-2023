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
            blogID: 1,
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
    <nuxt-link to="/bookstore/add">
      <rs-button>
        <Icon name="material-symbols:add"></Icon>
        Create Blog
      </rs-button>
    </nuxt-link>
  </h2>

  <div>
    <rs-card class="p-5">
      <span class="text-xl font-bold mb-10">List of blogs</span>
      <div class="flex justify-between items-start md:items-center p-4 flex-col md:flex-row">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6">
          <rs-card
            v-for="blog in blogData"
            :key="blog.blogID"
            class="border border-gray-300 p-5 shadow-lg relative" 
          >
            <h5 class = "text-md">{{ blog.blogName }}</h5>
             <p class = "py-5">{{ truncateContent(blog.blogContent) }}</p>
            <h6 class="absolute bottom-0 right-0 pr-1 pb-1 text-sm">{{ blog.blogAuthor }}</h6>
            <!-- Additional book details can be displayed here -->
          </rs-card>
        </div>
      </div>
    </rs-card>
  </div>
</template>


