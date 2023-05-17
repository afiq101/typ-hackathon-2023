<script setup>
  definePageMeta({
    title: "Collection",
  });

  // const data = [
  //   {
  //     id: 1,
  //     name: "Shirt 1",
  //     image: "img",
  //     type: "Shirt",
  //     size: "M",
  //     quantity: 25,
  //     status: "In Stock",
  //   },
  //   {
  //     id: 2,
  //     name: "Shirt 2",
  //     image: "img",
  //     type: "Shirt",
  //     size: "M",
  //     quantity: 25,
  //     status: "In Stock",
  //   },
  //   {
  //     id: 3,
  //     name: "Shirt 3",
  //     image: "img",
  //     type: "Pants",
  //     size: "M",
  //     quantity: 25,
  //     status: "Ordered",
  //   },
  //   {
  //     id: 4,
  //     name: "Shirt 4",
  //     image: "img",
  //     type: "Jacket",
  //     size: "M",
  //     quantity: 25,
  //     status: "Out of Stock",
  //   },
  //   {
  //     id: 5,
  //     name: "Shirt 5",
  //     image: "img",
  //     type: "Hood",
  //     size: "M",
  //     quantity: 25,
  //     status: "New Arrival",
  //   },
  // ];

  const {data: stockData} = await useFetch("/api/collection/list", {
    method: "GET",
  });

  console.log(stockData);
</script>
<template>
  <div>
    <LayoutsBreadcrumb />

    <!-- Button Add New Collection/Stock -->
    <nuxt-link :to="'/collection/add' ">
      <rs-button class="float-right">
        <Icon name="mdi:plus"></Icon>
         Add
      </rs-button>
    </nuxt-link>
    <br><br><br>

    <Icon name="ph:t-shirt-duotone">Shirt</Icon>
    <Icon name="icon-park-outline:clothes-pants"></Icon>
    <Icon name="ph:dress-duotone"></Icon>
    <Icon name="icon-park-outline:clothes-sweater"></Icon>
    <Icon name="icon-park-twotone:clothes-hoodie"></Icon>

    <!-- Tab Collection by Type Stock -->
    <rs-tab variant="primary" type="card" justify="left">
      <rs-tab-item title="All">
        <div class="bg-slate-100 rounded-lg">
          <p class="text-4xl mx-8"> All</p>
        </div>
        <br>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6">
          <rs-card class="p-5 relative" v-for="(val, index) in stockData.data" :key="index">
            <rs-badge class="float-right" variant="success" v-if="val.stockStatus == 'inStock'">In Stock</rs-badge>
            <rs-badge class="float-right" variant="danger" v-else-if="val.stockStatus == 'outStock'">Out of Stock</rs-badge>
            <rs-badge class="float-right"  variant="warning" v-else-if="val.stockStatus == 'orderStock'">Ordered</rs-badge>
            <rs-badge class="float-right" variant="info" v-else-if="val.stockStatus == 'newStock'">New Arrival</rs-badge>
            <br><br>
              <h6 class="text-2xl">{{ val.stockName }}</h6>
              <br>
              <div class="mx-8">
                <img :src="val.stockImage" class="h-64 "/>
              </div>
              <br>
              <p class="text-xl">Type: {{ val.stockType }}</p>
              <p class="text-xl">Size: {{val.stockSize}} </p>
              <p class="text-right text-7xl"> {{val.stockQuantity}} <span class="text-xl">Qty</span></p>
              <br>
              <nuxt-link :to="`/collection/edit/${val.stockID}`">
                <rs-button size="md" class="mt-2">
                  Edit
                </rs-button>
              </nuxt-link>
          </rs-card>
        </div>
      </rs-tab-item>
      <rs-tab-item title="Shirt">
        <div class="bg-slate-100 rounded-lg">
          <p class="text-4xl mx-8"> Shirt</p>
        </div>
        <br>
        <div v-for="(val, index) in stockData.data" :key="index">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6">
            <rs-card class="p-5 relative" v-if="val.stockType == 'Shirt'">
              <rs-badge class="float-right" variant="success" v-if="val.stockStatus == 'inStock'">In Stock</rs-badge>
              <rs-badge class="float-right" variant="danger" v-else-if="val.stockStatus == 'outStock'">Out of Stock</rs-badge>
              <rs-badge class="float-right"  variant="warning" v-else-if="val.stockStatus == 'orderStock'">Ordered</rs-badge>
              <rs-badge class="float-right" variant="info" v-else-if="val.stockStatus == 'newStock'">New Arrival</rs-badge>
              <br><br>
              <h6 class="text-2xl">{{ val.stockName }}</h6>
              <br>
              <div class="mx-8">
                <img :src="val.stockImage" class="h-64 "/>
              </div>
              <br>
              <p class="text-xl">Type: {{ val.stockType }}</p>
              <p class="text-xl">Size: {{val.stockSize}} </p>
              <p class="text-right text-7xl"> {{val.stockQuantity}} <span class="text-xl">Qty</span></p>
              <br>
              <nuxt-link :to="`/collection/edit/${val.stockID}`">
                <rs-button size="md" class="mt-2">
                  Edit
                </rs-button>
              </nuxt-link>
            </rs-card>
          </div>
        </div>
      </rs-tab-item>
      <rs-tab-item title="Pants">
        <div class="bg-slate-100 rounded-lg">
          <p class="text-4xl mx-8"> Pants</p>
        </div>
        <br>
        <div v-for="(val, index) in stockData.data" :key="index">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6">
            <rs-card class="p-5 relative" v-if="val.stockType == 'Pants'">
              <rs-badge class="float-right" variant="success" v-if="val.stockStatus == 'inStock'">In Stock</rs-badge>
              <rs-badge class="float-right" variant="danger" v-else-if="val.stockStatus == 'outStock'">Out of Stock</rs-badge>
              <rs-badge class="float-right"  variant="warning" v-else-if="val.stockStatus == 'orderStock'">Ordered</rs-badge>
              <rs-badge class="float-right" variant="info" v-else-if="val.stockStatus == 'newStock'">New Arrival</rs-badge>
              <br><br>
              <h6 class="text-2xl">{{ val.stockName }}</h6>
              <br>
              <div class="mx-8">
                <img :src="val.stockImage" class="h-64 "/>
              </div>
              <br>
              <p class="text-xl">Type: {{ val.stockType }}</p>
              <p class="text-xl">Size: {{val.stockSize}} </p>
              <p class="text-right text-7xl"> {{val.stockQuantity}} <span class="text-xl">Qty</span></p>
              <br>
              <nuxt-link :to="`/collection/edit/${val.stockID}`">
                <rs-button size="md" class="mt-2">
                  Edit
                </rs-button>
              </nuxt-link>
            </rs-card>
          </div>
        </div>
      </rs-tab-item>
      <rs-tab-item title="Jacket">
        <div class="bg-slate-100 rounded-lg">
          <p class="text-4xl mx-8"> Jacket</p>
        </div>
        <br>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6">
          <div  v-for="(val, index) in stockData.data" :key="index">
            <rs-card class="p-5 relative" v-if="val.stockType == 'Jacket'">
              <rs-badge class="float-right" variant="success" v-if="val.stockStatus == 'inStock'">In Stock</rs-badge>
              <rs-badge class="float-right" variant="danger" v-else-if="val.stockStatus == 'outStock'">Out of Stock</rs-badge>
              <rs-badge class="float-right"  variant="warning" v-else-if="val.stockStatus == 'orderStock'">Ordered</rs-badge>
              <rs-badge class="float-right" variant="info" v-else-if="val.stockStatus == 'newStock'">New Arrival</rs-badge>
              <br><br>
              <h6 class="text-2xl">{{ val.stockName }}</h6>
              <br>
              <div class="mx-8">
                <img :src="val.stockImage" class="h-64 "/>
              </div>
              <br>
              <p class="text-xl">Type: {{ val.stockType }}</p>
              <p class="text-xl">Size: {{val.stockSize}} </p>
              <p class="text-right text-7xl"> {{val.stockQuantity}} <span class="text-xl">Qty</span></p>
              <br>
              <nuxt-link :to="`/collection/edit/${val.stockID}`">
                <rs-button size="md" class="mt-2">
                  Edit
                </rs-button>
              </nuxt-link>
            </rs-card>
          </div>
        </div>
      </rs-tab-item>
      <rs-tab-item title="Hood">
        <div class="bg-slate-100 rounded-lg">
          <p class="text-4xl mx-8"> Hood</p>
        </div>
        <br>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6">
          <div  v-for="(val, index) in stockData.data" :key="index">
            <rs-card class="p-5 relative" v-if="val.stockType == 'Hood'">
              <rs-badge class="float-right" variant="success" v-if="val.stockStatus == 'inStock'">In Stock</rs-badge>
              <rs-badge class="float-right" variant="danger" v-else-if="val.stockStatus == 'outStock'">Out of Stock</rs-badge>
              <rs-badge class="float-right"  variant="warning" v-else-if="val.stockStatus == 'orderStock'">Ordered</rs-badge>
              <rs-badge class="float-right" variant="info" v-else-if="val.stockStatus == 'newStock'">New Arrival</rs-badge>
              <br><br>
              <h6 class="text-2xl">{{ val.stockName }}</h6>
              <br>
              <div class="mx-8">
                <img :src="val.stockImage" class="h-64 "/>
              </div>
              <br>
              <p class="text-xl">Type: {{ val.stockType }}</p>
              <p class="text-xl">Size: {{val.stockSize}} </p>
              <p class="text-right text-7xl"> {{val.stockQuantity}} <span class="text-xl">Qty</span></p>
              <br>
              <nuxt-link :to="`/collection/edit/${val.stockID}`">
                <rs-button size="md" class="mt-2">
                  Edit
                </rs-button>
              </nuxt-link>
            </rs-card>
          </div>
        </div>
      </rs-tab-item>
    </rs-tab>
  </div>
</template>
