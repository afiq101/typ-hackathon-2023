<script setup>
definePageMeta({
  title: "Recipe",
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
              <a
                class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                href="#"
                >Recipe</a
              >
            </li>
            <li>
              <a
                class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                href="#"
                >About</a
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

        <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <a href="#">
            <img
              class="hover:grow hover:shadow-lg"
              src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            />
            <div class="pt-3 flex items-center justify-between">
              <p class="">Food Name</p>
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

        <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <a href="#">
            <img
              class="hover:grow hover:shadow-lg"
              src="https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            />
            <div class="pt-3 flex items-center justify-between">
              <p class="">Food Name</p>
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

        <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <a href="#">
            <img
              class="hover:grow hover:shadow-lg"
              src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            />
            <div class="pt-3 flex items-center justify-between">
              <p class="">Food Name</p>
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

        <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <a href="#">
            <img
              class="hover:grow hover:shadow-lg"
              src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            />
            <div class="pt-3 flex items-center justify-between">
              <p class="">Food Name</p>
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

        <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <a href="#">
            <img
              class="hover:grow hover:shadow-lg"
              src="https://images.unsplash.com/photo-1467949576168-6ce8e2df4e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            />
            <div class="pt-3 flex items-center justify-between">
              <p class="">Food Name</p>
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

        <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <a href="#">
            <img
              class="hover:grow hover:shadow-lg"
              src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            />
            <div class="pt-3 flex items-center justify-between">
              <p class="">Food Name</p>
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

        <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <a href="#">
            <img
              class="hover:grow hover:shadow-lg"
              src="https://images.unsplash.com/photo-1550837368-6594235de85c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            />
            <div class="pt-3 flex items-center justify-between">
              <p class="">Food Name</p>
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

        <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <a href="#">
            <img
              class="hover:grow hover:shadow-lg"
              src="https://images.unsplash.com/photo-1551431009-a802eeec77b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
            />
            <div class="pt-3 flex items-center justify-between">
              <p class="">Food Name</p>
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
      