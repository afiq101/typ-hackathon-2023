<script setup>
          definePageMeta({
            title: "Create Blog",
          });
        </script>
        <template>
          <div>
            <h1 class="text-2xl font-bold">Create Blog</h1>
            <div class="mt-5">
              <rs-card>
                
              </rs-card>
              <rs-button @click="createBlog">Create Blog</rs-button>
            </div>
          </div>
        </template>
      