<script setup>
  import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

  // Gambar for Slideshow
  import slide1 from "../../assets/img/clothes/banner1.png";
  import slide2 from "../../assets/img/clothes/banner2.png";
  import slide3 from "../../assets/img/clothes/banner3.png";
  import slide4 from "../../assets/img/clothes/banner4.png";
  import slide5 from "../../assets/img/clothes/banner1.png";
  
  
  import img1 from "../../assets/img/clothes/shirt2.jpeg";

  definePageMeta({
    title: "Wardrobe",

    // mounted(){
    //   calcStatStock()
    // },
  });

  

  const modules = [Navigation, Pagination, Scrollbar, A11y];
  const countInStock = ref(0);
  const countOutStock = ref(0);
  const countOrdered = ref(0);
  const countNew = ref(0);

  //const pic = ref("rapunzel.jpg");
  

  // const data = [
  //   {
  //     id: 1,
  //     name: "Pink Dress",
  //     image: img,
  //     type: "Shirt",
  //     size: "M",
  //     quantity: 25,
  //     status: "In Stock",
  //   },
  //   {
  //     id: 2,
  //     name: "Shirt 2",
  //     image: img1,
  //     type: "Shirt",
  //     size: "M",
  //     quantity: 25,
  //     status: "In Stock",
  //   },
  //   {
  //     id: 3,
  //     name: "Shirt 3",
  //     image: img1,
  //     type: "Shirt",
  //     size: "M",
  //     quantity: 25,
  //     status: "Ordered",
  //   },
  //   {
  //     id: 4,
  //     name: "Shirt 4",
  //     image: img1,
  //     type: "Shirt",
  //     size: "M",
  //     quantity: 25,
  //     status: "Out of Stock",
  //   },
  //   {
  //     id: 5,
  //     name: "Shirt 5",
  //     image: img1,
  //     type: "Shirt",
  //     size: "M",
  //     quantity: 25,
  //     status: "New Arrival",
  //   },
  // ];

  // click card In Stock summary to open the list In Stock
  function showInStock(){
    var x = document.getElementById("myInStock");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  // click card Out of Stock summary to open the list Out of Stock
  function showOutStock(){
    var x = document.getElementById("myOutStock");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  // click card Ordered summary to open the list Ordered
  function showOrderStock(){
    var x = document.getElementById("myOrderStock");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  // click card New Arrival summary to open the list New Arrival
  function showNewStock(){
    var x = document.getElementById("myNewStock");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  const {data: stockData} = await useFetch("/api/collection/list", {
    method: "GET",
  });

  // count total of each status to be display in summary
  

    for(var i=0; i<stockData.length; i++) {
      if(stockData.stockStatus == "inStock")
      {
        countInStock++;
        
      }
      else if(stockData.stockStatus == "outStock")
      {
        countOutStock++;
        
      }
      else if(stockData.stockStatus == "orderStock")
      {
        countOrdered++;
        
      }
      else if(stockData.stockStatus == "newStock")
      {
        countNew++;
        
      }
    };
    console.log( countInStock);
    console.log(countNew);
    console.log(countOrdered);
    console.log(countOutStock);

 

</script>
<template>
  <div>
    <LayoutsBreadcrumb />

    <!-- <img :src="`../../assets/img/clothes/${pic}`"/> -->
    <br><br><br>
    
    <!-- Slideshow -->
    <swiper
        :modules="modules"
        :slides-per-view="1"
        :centeredSlides="true"
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        navigation
        class=""
        object-fit: cover

    >
      <!-- <swiper-slide v-for="n in 10" :key="n">
        {{ n }}
      </swiper-slide> -->
      <swiper-slide><img :src="slide1"   class=""/></swiper-slide>
      <swiper-slide><img :src="slide2" class=""/></swiper-slide>
      <swiper-slide><img :src="slide3" class=""/></swiper-slide>
      <swiper-slide><img :src="slide4" class=""/></swiper-slide>
      <swiper-slide><img :src="slide5" class=""/></swiper-slide>
    </swiper>
    <br><br><br>
    
    <!-- Card Stock By Status with total Stocks -->
    <p class="text-center text-purple-700">Double click here to view the stocks</p><br>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6">
      <rs-card class="p-5 relative bg-primary" @click="showInStock()">
        <h5 class="text-2xl">In Stock</h5>
        <p class="text-right text-7xl"> 1{{ countInStock }}</p>
      </rs-card>
      <rs-card class="p-5 relative bg-purple-800" @click="showOutStock()">
        <h5 class="text-2xl">Out of Stock</h5>
        <p class="text-right text-7xl"> {{ countOutStock }}</p>
      </rs-card>
      <rs-card class="p-5 relative bg-purple-800" @click="showOrderStock()">
        <h5 class="text-2xl">Ordered</h5>
        <p class="text-right text-7xl"> {{ countOrdered }}</p>
      </rs-card>
      <rs-card class="p-5 relative bg-purple-800" @click="showNewStock()">
        <h5 class="text-2xl">New Arrival</h5>
        <p class="text-right text-7xl"> {{ countNew }}</p>
      </rs-card>
    </div>

    <!-- Display In Stock -->
    <div id="myInStock" hidden>
      <p class="text-center text-purple-700">Click back the card to close the view</p><br>
      <rs-card>
        <template #header>
          <div class="bg-success">
            <h5 class="text-3xl mx-8 text-white">In Stock</h5>
          </div>
        </template>
        <template #body>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6">
            <div v-for="(val, index) in stockData.data" :key="index">
              <rs-card class="p-5 relative" v-if="val.stockStatus == 'inStock'">
                <rs-badge class="float-right" variant="success" v-if="val.stockStatus == 'inStock'">In Stock</rs-badge>
                <br><br>
                <h6 class="text-2xl">{{ val.stockName }}</h6>
                <br>
                <div class="mx-8">
                  <img :src="img1" class="h-64 "/>
                </div>
                <br>
                <p class="text-xl">Type: {{ val.stockType }}</p>
                <p class="text-xl">Size: {{val.stockSize}} </p>
                <p class="text-right text-7xl"> {{val.stockQuantity}} <span class="text-xl">Qty</span></p>
                <br>
              </rs-card>
            </div>
          </div>
        </template>
      </rs-card>
    </div>

    <!-- Display Out Stock -->
    <div id="myOutStock" hidden>
      <p class="text-center text-purple-700">Click back the card to close the view</p><br>
      <rs-card>
        <template #header>
          <div class="bg-danger">
            <h5 class="text-3xl mx-8 text-white">Out Stock</h5>
          </div>
        </template>
        <template #body>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6">
            <div v-for="(val, index) in stockData.data" :key="index">
              <rs-card class="p-5 relative" v-if="val.stockStatus == 'outStock'">
                <rs-badge class="float-right" variant="danger" v-if="val.stockStatus == 'outStock'">Out of Stock</rs-badge>
                <br><br>
                <h6 class="text-2xl">{{ val.stockName }}</h6>
                <br>
                <div class="mx-8">
                  <img :src="img1" class="h-64 "/>
                </div>
                <br>
                <p class="text-xl">Type: {{ val.stockType }}</p>
                <p class="text-xl">Size: {{val.stockSize}} </p>
                <p class="text-right text-7xl"> {{val.stockQuantity}} <span class="text-xl">Qty</span></p>
                <br>
              </rs-card>
            </div>
          </div>
        </template>
      </rs-card>
    </div>

    <!-- Display Order Stock -->
    <div id="myOrderStock" hidden>
      <p class="text-center text-purple-700">Click back the card to close the view</p><br>
      <rs-card >
        <template #header>
          <div class="bg-warning">
            <h5 class="text-3xl mx-8 text-white">Otder Stock</h5>
          </div>
        </template>
        <template #body>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6">
            <div v-for="(val, index) in stockData.data" :key="index">
              <rs-card class="p-5 relative" v-if="val.stockStatus == 'orderStock'">
                <rs-badge class="float-right" variant="warning" v-if="val.stockStatus == 'orderStock'">Ordered</rs-badge>
                <br><br>
                <h6 class="text-2xl">{{ val.stockName }}</h6>
                <br>
                <div class="mx-8">
                  <img :src="img1" class="h-64 "/>
                </div>
                <br>
                <p class="text-xl">Type: {{ val.stockType }}</p>
                <p class="text-xl">Size: {{val.stockSize}} </p>
                <p class="text-right text-7xl"> {{val.stockQuantity}} <span class="text-xl">Qty</span></p>
                <br>
              </rs-card>
            </div>
          </div>
        </template>
      </rs-card>
    </div>

    <!-- Display New Stock -->
    <div id="myNewStock" hidden>
      <p class="text-center text-purple-700">Click back the card to close the view</p><br>
      <rs-card >
        <template #header>
          <div class="bg-info">
            <h5 class="text-3xl mx-8 text-white">New Stock</h5>
          </div>
        </template>
        <template #body>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6">
            <div v-for="(val, index) in stockData.data" :key="index">
              <rs-card class="p-5 relative" v-if="val.stockStatus == 'newStock'">
                <rs-badge class="float-right" variant="info" v-if="val.stockStatus == 'newStock'">New Arrival</rs-badge>
                <br><br>
                <h6 class="text-2xl">{{ val.stockName }}</h6>
                <br>
                <div class="mx-8">
                  <img :src="img1" class="h-64 "/>
                  <!-- <img :src="val.stockImage" class="h-64 "/> -->
                </div>
                <br>
                <p class="text-xl">Type: {{ val.stockType }}</p>
                <p class="text-xl">Size: {{val.stockSize}} </p>
                <p class="text-right text-7xl"> {{val.stockQuantity}} <span class="text-xl">Qty</span></p>
                <br>
              </rs-card>
            </div>
          </div>
        </template>
      </rs-card>
    </div>

  </div>
</template>
