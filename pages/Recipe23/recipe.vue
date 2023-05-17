<script setup>
definePageMeta({
  title: "Recipe",
});

const { data: recipeData } = await useFetch("/api/recipe23/recipeList", {
  method: "GET",
});
</script>

<template>
  <body
    class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal"
  >
    <!--Nav-->
    <nav id="header" class="w-full z-30 top-0 py-1">
      <div
        class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3"
      >
      <nav>
          <ul
            class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0"
          >
            <li>
              <nuxt-link
                to="/Recipe23/recipe"
                class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                >Recipe</nuxt-link
              >
            </li>
            <!-- <li>
              <a
                class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                href="#"
                >Ranking</a
              >
            </li> -->
            <li>
              <a
                class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                href="#"
                >About</a
              >
            </li>
            <li>
              <nuxt-link
                to="/Recipe23/profile"
                class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                >Profile</nuxt-link
              >
            </li>
          </ul>
        </nav>

        <div
          class="flex text-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
        >
          <a href="/Recipe23"> RECIPE23 </a>
        </div>

        <div class="order-2 md:order-3 flex items-center" id="nav-content">
          <a class="inline-block no-underline hover:text-black" href="#">
            <nuxt-link to="/Recipe23/login">
              <Icon
                class="fill-current hover:text-black"
                name="ion:md-log-in"
              ></Icon>
            </nuxt-link>
          </a>
        </div>
      </div>
    </nav>

    <section class="bg-white py-8">
      <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <nav id="store" class="w-full z-30 top-0 px-6 py-1">
          <div
            class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3"
          >
            <p
              class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
            >
              lists of recipe
            </p>
            <nuxt-link to="/Recipe23/addRecipe">
              <rs-button>
                <Icon name="material-symbols:add"></Icon>
                Add Recipe
              </rs-button>
            </nuxt-link>
          </div>
        </nav>

        <div></div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6">
          <div v-for="(val, index) in recipeData.data" :key="index">

            <a href="#">
              <img
                class="hover:grow hover:shadow-lg"
                src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
              />
            <label class="bold" for="">Ingredient</label>
              <p class="limited-lines">{{ val.ingredient }}</p>
              <div class="pt-3 flex items-center justify-between">
                <p class="">{{ val.recipeName }}</p>
                <Icon
                  class="h-6 w-6 fill-current text-gray-500 hover:text-black"
                  name="material-symbols:download"
                ></Icon>
                <Icon
                  class="h-6 w-6 fill-current text-gray-500 hover:text-black"
                  name="material-symbols:favorite-outline"
                ></Icon>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <footer class="container mx-auto bg-white py-8 border-t border-gray-400">
      <div class="container flex px-3 py-8">
        <div class="w-full mx-auto flex flex-wrap">
          <div class="flex w-full lg:w-1/2">
            <div class="px-3 md:px-0">
              <h3 class="font-bold text-gray-900">Links</h3>
              <p class="py-4">
                <a
                  class="inline-block no-underline hover:text-black hover:underline py-1"
                  href="#"
                  >Home</a
                ><br />
                <a
                  class="inline-block no-underline hover:text-black hover:underline py-1"
                  href="#"
                  >Recipe</a
                ><br />
                <a
                  class="inline-block no-underline hover:text-black hover:underline py-1"
                  href="#"
                  >About</a
                >
              </p>
            </div>
          </div>

          <div class="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
            <div class="px-3 md:px-0">
              <h3 class="font-bold text-gray-900">Social</h3>
              <ul class="list-reset items-center pt-3">
                <li>
                  <a
                    class="inline-block no-underline hover:text-black hover:underline py-1"
                    href="#"
                  >
                    <Icon
                      class="fill-current hover:text-black"
                      name="devicon:facebook"
                    ></Icon
                  ></a>
                </li>
                <li>
                  <a
                    class="inline-block no-underline hover:text-black hover:underline py-1"
                    href="#"
                  >
                    <Icon
                      class="fill-current hover:text-black"
                      name="devicon:twitter"
                    ></Icon
                  ></a>
                </li>
                <li>
                  <a
                    class="inline-block no-underline hover:text-black hover:underline py-1"
                    href="#"
                  >
                    <Icon
                      class="fill-current hover:text-black"
                      name="skill-icons:instagram"
                    ></Icon
                  ></a>
                </li>
                <li>
                  <a
                    class="inline-block no-underline hover:text-black hover:underline py-1"
                    href="#"
                  >
                    <Icon
                      class="fill-current hover:text-black"
                      name="logos:youtube-icon"
                    ></Icon
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </body>
</template>

<style>
.limited-lines {
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Limit the number of lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
}</style>
      