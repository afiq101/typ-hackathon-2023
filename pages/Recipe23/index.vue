<script setup>
definePageMeta({
  title: "Recipe23",
});

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const modules = [Navigation, Pagination, Scrollbar, A11y];
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
                >Ranking</a
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

    <swiper
      :modules="modules"
      :slides-per-view="1"
      :centeredSlides="true"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      navigation
    >
      <swiper-slide>
        <img
          style="width: 1450px; height: 800px"
          src="@@/assets/img/Recipe23/carousel/cookbook1.jpg"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          style="width: 1450px; height: 800px"
          src="@@/assets/img/Recipe23/carousel/cookbook2.jpeg"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          style="width: 1450px; height: 800px"
          src="@@/assets/img/Recipe23/carousel/cookbook3.jpg"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          style="width: 1450px; height: 800px"
          src="@@/assets/img/Recipe23/carousel/food1.jpg"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          style="width: 1450px; height: 800px"
          src="@@/assets/img/Recipe23/carousel/food2.jpg"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          style="width: 1450px; height: 800px"
          src="@@/assets/img/Recipe23/carousel/food3.jpg"
        />
      </swiper-slide>
    </swiper>

    <section class="bg-white py-8">
      <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <nav id="store" class="w-full z-30 top-0 px-6 py-1">
          <div
            class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3"
          >
            <p
              class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
            >
              recipe
            </p>

            <div class="flex items-center" id="store-nav-content">
              <a
                class="pl-3 inline-block no-underline hover:text-black"
                href="#"
              >
                more
                <Icon
                  class="fill-current hover:text-black"
                  name="material-symbols:east-rounded"
                ></Icon>
              </a>
            </div>
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
              <svg
                class="h-6 w-6 fill-current text-gray-500 hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z"
                />
              </svg>
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
              <svg
                class="h-6 w-6 fill-current text-gray-500 hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z"
                />
              </svg>
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
              <svg
                class="h-6 w-6 fill-current text-gray-500 hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z"
                />
              </svg>
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
              <svg
                class="h-6 w-6 fill-current text-gray-500 hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z"
                />
              </svg>
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
              <svg
                class="h-6 w-6 fill-current text-gray-500 hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z"
                />
              </svg>
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
              <svg
                class="h-6 w-6 fill-current text-gray-500 hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z"
                />
              </svg>
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
              <svg
                class="h-6 w-6 fill-current text-gray-500 hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z"
                />
              </svg>
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
              <svg
                class="h-6 w-6 fill-current text-gray-500 hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section class="container mx-auto bg-white py-8 border-t border-gray-400">
      <div class="container py-8 px-6 mx-auto">
        <a
          class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
          href="#"
        >
          About
        </a>

        <p class="mt-8 mb-8">
          This template is inspired by the stunning nordic minamalist design -
          in particular:
          <br />
          <a
            class="text-gray-800 underline hover:text-gray-900"
            href="http://savoy.nordicmade.com/"
            target="_blank"
            >Savoy Theme</a
          >
          created by
          <a
            class="text-gray-800 underline hover:text-gray-900"
            href="https://nordicmade.com/"
            >https://nordicmade.com/</a
          >
          and
          <a
            class="text-gray-800 underline hover:text-gray-900"
            href="https://www.metricdesign.no/"
            target="_blank"
            >https://www.metricdesign.no/</a
          >
        </p>

        <p class="mb-8">
          Lorem ipsum dolor sit amet, consectetur
          <a href="#">random link</a> adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra
          maecenas accumsan lacus vel facilisis volutpat. Vitae aliquet nec
          ullamcorper sit. Nullam eget felis eget nunc lobortis mattis aliquam.
          In est ante in nibh mauris. Egestas congue quisque egestas diam in.
          Facilisi nullam vehicula ipsum a arcu. Nec nam aliquam sem et tortor
          consequat. Eget mi proin sed libero enim sed faucibus turpis in. Hac
          habitasse platea dictumst quisque. In aliquam sem fringilla ut.
          Gravida rutrum quisque non tellus orci ac auctor augue mauris.
          Accumsan lacus vel facilisis volutpat est velit egestas dui id. At
          tempor commodo ullamcorper a. Volutpat commodo sed egestas egestas
          fringilla. Vitae congue eu consequat ac.
        </p>
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
                  >Home</a><br>
                  <a
                    class="inline-block no-underline hover:text-black hover:underline py-1"
                    href="#"
                  >Recipe</a><br>
                  <a
                    class="inline-block no-underline hover:text-black hover:underline py-1"
                    href="#"
                  >About</a>
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
      