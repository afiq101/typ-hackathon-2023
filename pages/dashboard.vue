<script setup>
definePageMeta({
  title: "Dashboard",
  middleware: ["auth"], // This is for Login Auth for page
  requiresAuth: true, // This is use for Login Auth for page
});

const data1 = ref([]);
const data2 = ref([]);
const data3 = ref([]);
const data4 = ref([]);
var sparkline1Data = [47, 45, 54, 38, 56, 24, 65];
var sparkline2Data = [61, 35, 66, 41, 59, 25, 32];
var sparkline3Data = [25, 18, 36, 41, 43, 35, 14];
var sparkline4Data = [8, 16, 22, 41, 43, 35, 14];

const changeKey = ref(0);

let { data: petData } = await useFetch("/api/pet/list", {
  method: "GET",
});

const negeri = "";

const changeState = async (e) => {
  console.log('e', e);

  const { data: petData2 } = await useFetch("/api/pet/getPetState", {
    method: "GET",
    query: {
      petLocation: e,
    },
  });


  petData = petData2;
  console.log('petData', petData);
};

const showModalRequest = ref(false);


const requestAdopt = async (petId) => {
  console.log("petId", petId);
  showModalRequest.value = true;
  form.value.petID = petId;
};

const form = ref({
  dateAppointment: "",
  timeAppointment: "",
  petID: "",
});

const petID = "";

const time = [
  {
    label: "10:00 AM", value: "10"
  },
  {
    label: "10:30 AM", value: "1030"
  },
  {
    label: "11:00 AM", value: "11"
  },
  {
    label: "11:30 AM", value: "1130"
  },
  {
    label: "12:00 PM", value: "12"
  },
  {
    label: "12:30 PM", value: "1230"
  },
  {
    label: "01:00 PM", value: "13"
  },
  {
    label: "01:30 PM", value: "1330"
  },
  {
    label: "02:00 PM", value: "14"
  },
  {
    label: "02:30 PM", value: "1430"
  },
  {
    label: "03:00 PM", value: "15"
  },
  {
    label: "03:30 PM", value: "1530"
  },
  {
    label: "04:00 PM", value: "16"
  },
  {
    label: "04:30 PM", value: "1630"
  },
  {
    label: "05:00 PM", value: "17"
  },
  {
    label: "05:30 PM", value: "1730"
  },
  {
    label: "06:00 PM", value: "18"
  },
  {
    label: "06:30 PM", value: "1830"
  },
  {
    label: "07:00 PM", value: "19"
  },
  {
    label: "07:30 PM", value: "1930"
  },
  {
    label: "08:00 PM", value: "20"
  },

];

const submitDataRequest = async () => {

  console.log("petID", petID);
  console.log("form", form.value);
  // return;

  if (form.value.ownerName === "" || form.value.dateAppointment === "" || form.value.ownerEmail === "" || form.value.ownerAddress === "" || form.value.ownerPhone === "" || form.value.timeAppointment === "") {
    // $toast.error("Please fill in the book name");
    return;
  }

  try {
    const { data } = await useFetch("/api/request-adopt/add", {
      method: "POST",
      body: {
        ownerName: form.value.ownerName,
        dateAppointment: form.value.dateAppointment,
        timeAppointment: form.value.timeAppointment,
        ownerEmail: form.value.ownerEmail,
        ownerAddress: form.value.ownerAddress,
        ownerPhone: form.value.ownerPhone,
        adoptPetId: form.value.petID,
      }
    });

    console.log(data);

    if (data.value.statusCode == 200) {
      showModalRequest.value = false;
      alert("Register Success");
      // $toast.success(data.message);
    } else {
      // $toast.error(data.message);
      alert(data.value.message);
    }
  } catch (error) {
    console.log(error);
  }
};

const customers = [
  {
    name: "Iqmal",
    age: "25",
    city: "Kuala Lumpur",
    country: "Malaysia",
    totalPurchase: 1524,
    purchase: 23,
  },
  {
    name: "Adi",
    age: "45",
    city: "Pulau Pinang",
    country: "Malaysia",
    totalPurchase: 643,
    purchase: 14,
  },
  {
    name: "Raziq",
    age: "21",
    city: "Kelantan",
    country: "Malaysia",
    totalPurchase: 543,
    purchase: 12,
  },
  {
    name: "Haqeem",
    age: "19",
    city: "Negeri Sembilan",
    country: "Malaysia",
    totalPurchase: 258,
    purchase: 6,
  },
];

const randomizeArray = function (arg) {
  var array = arg.slice();
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

data1.value.push({
  name: "Revenues",
  data: randomizeArray(sparkline1Data),
});

data2.value.push({
  name: "Users",
  data: randomizeArray(sparkline2Data),
});

data3.value.push({
  name: "Products",
  data: randomizeArray(sparkline3Data),
});

data4.value.push({
  name: "Viewers",
  data: randomizeArray(sparkline4Data),
});

const chartOptions = computed(() => ({
  chart: {
    type: "area",
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: "smooth",
  },
  fill: {
    opacity: 1,
  },
  labels: [...Array(7).keys()].map((n) => `2022-06-0${n + 1}`),
  xaxis: {
    type: "datetime",
  },
}));

// Radial Chart

const radialData = ref([44, 55, 67, 83]);

const chartOptionsRadial = computed(() => ({
  chart: {
    height: 350,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        style: {
          colors: "#9CA3AF",
        },
        name: {
          offsetY: 30,
          fontSize: "18px",
        },
        value: {
          offsetY: -15,
          fontSize: "30px",
        },
        total: {
          show: true,
          label: "Total",
          formatter: function (w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return 249;
          },
        },
      },
    },
  },
  labels: ["Product A", "Product B", "Product C", "Product D"],
  stroke: {
    lineCap: "round",
  },
}));

// Transaction Graph
const transactionData = ref([
  {
    name: "Bill A",
    data: [...Array(12).keys()].map((n) => Math.round(Math.random() * 100)),
  },
  {
    name: "Bill B",
    data: [...Array(12).keys()].map((n) => Math.round(Math.random() * 100)),
  },
]);

const chartOptionsTransaction = computed(() => ({
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  colors: ["#6366F1", "#F97316"],
  yaxis: {
    labels: {
      style: {
        colors: "#9CA3AF",
        fontSize: "12px",
      },
    },
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2022-01-01",
      "2022-02-01",
      "2022-03-01",
      "2022-04-01",
      "2022-05-01",
      "2022-06-01",
      "2022-07-01",
      "2022-08-01",
      "2022-09-01",
      "2022-10-01",
      "2022-11-01",
      "2022-12-01",
    ],
    labels: {
      style: {
        colors: "#9CA3AF",
        fontSize: "14px",
        fontWeight: 400,
      },
      datetimeFormatter: {
        month: "MMM",
      },
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    labels: {
      colors: "#9CA3AF",
      useSeriesColors: false,
    },
  },
  tooltip: {
    x: {
      format: "MMMM",
    },
  },
}));

onMounted(() => {
  setTimeout(() => {
    changeKey.value++;
  }, 500);
});

const options = [
  { label: "Johor", value: "Johor" },
  { label: "Kedah", value: "Kedah" },
  { label: "Kelantan", value: "Kelantan" },
  { label: "Melaka", value: "Melaka" },
  { label: "Negeri Sembilan", value: "Negeri Sembilan" },
  { label: "Pahang", value: "Pahang" },
  { label: "Perak", value: "Perak" },
  { label: "Perlis", value: "Perlis" },
  { label: "Pulau Pinang", value: "Pulau Pinang" },
  { label: "Selangor", value: "Selangor" },
  { label: "Terengganu", value: "Terengganu" },
];
</script>

<template>
  <div>
    <LayoutsBreadcrumb />


    <!-- Modal Request -->
    <rs-modal title="Adopt" position="top" v-model="showModalRequest">
      <FormKit type="form" :actions="false" @submit="submitDataRequest" :incomplete-message="false">

        <FormKit v-model="form.dateAppointment" type="date" label="Date Appointment"
          help="Enter date (the date must be after 2020)" validation="required" validation-visibility="live" />

        <FormKit type="select" label="Time Appointment" :options="time" v-model="form.timeAppointment" />


        <div class="float-right">
          <rs-button> Submit </rs-button>

        </div>

      </FormKit>

      <template #footer></template>

    </rs-modal>

    <!-- First Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-6">
      <!-- Summary Card #1 -->
      <rs-card>
        <div class="summary-1 pt-5 pb-3 px-5 flex items-center gap-4">
          <div class="p-5 flex justify-center items-center bg-primary/20 rounded-2xl">
            <Icon class="text-primary" name="ic:outline-attach-money"></Icon>
          </div>
          <div class="flex-1 truncate">
            <span class="block font-semibold text-xl leading-tight">
              RM 100,000</span>
            <span class="text-base font-semibold text-gray-500">Total Revenues</span>
          </div>
        </div>
        <client-only>
          <VueApexCharts :key="changeKey" width="100%" height="53" :options="{
            ...chartOptions,
            colors: ['#F43F5E'],
            yaxis: {
              min: 0,
              max: Math.max(...data1[0].data) + 10,
            },
          }" :series="data1"></VueApexCharts>
        </client-only>
      </rs-card>
      <!-- Summary Card #2 -->
      <rs-card>
        <div class="summary-2 pt-5 pb-3 px-5 flex items-center gap-4">
          <div class="p-5 flex justify-center items-center bg-indigo-100 rounded-2xl">
            <Icon class="text-indigo-500" name="ic:outline-account-circle"></Icon>
          </div>
          <div class="flex-1 truncate">
            <span class="block font-semibold text-xl leading-tight"> 512</span>
            <span class="text-base font-semibold text-gray-500">Total Users</span>
          </div>
        </div>
        <client-only>
          <VueApexCharts :key="changeKey" width="100%" height="53" :options="{
            ...chartOptions,
            colors: ['#6366F1'],
            yaxis: {
              min: 0,
              max: Math.max(...data2[0].data) + 10,
            },
          }" :series="data2"></VueApexCharts>
        </client-only>
      </rs-card>
      <!-- Summary Card #3 -->
      <rs-card>
        <div class="summary-3 pt-5 pb-3 px-5 flex items-center gap-4">
          <div class="p-5 flex justify-center items-center bg-orange-100 rounded-2xl">
            <Icon class="text-orange-500" name="ic:outline-shopping-bag"></Icon>
          </div>
          <div class="flex-1 truncate">
            <span class="block font-semibold text-xl leading-tight"> 20</span>
            <span class="text-base font-semibold text-gray-500">Total Products</span>
          </div>
        </div>
        <client-only>
          <VueApexCharts :key="changeKey" width="100%" height="53" :options="{
            ...chartOptions,
            colors: ['#F97316'],
            yaxis: {
              min: 0,
              max: Math.max(...data3[0].data) + 10,
            },
          }" :series="data3"></VueApexCharts>
        </client-only>
      </rs-card>
      <!-- Summary Card #4 -->
      <rs-card>
        <div class="summary-4 pt-5 pb-3 px-5 flex items-center gap-4">
          <div class="p-5 flex justify-center items-center bg-blue-100 rounded-2xl">
            <Icon class="text-blue-500" name="ic:outline-remove-red-eye"></Icon>
          </div>
          <div class="flex-1 truncate">
            <span class="block font-semibold text-xl leading-tight">
              2,452</span>
            <span class="text-base font-semibold text-gray-500">Total Viewers</span>
          </div>
        </div>
        <client-only>
          <VueApexCharts :key="changeKey" width="100%" height="53" :options="{
            ...chartOptions,
            colors: ['#3B82F6'],
            yaxis: {
              min: 0,
              max: Math.max(...data4[0].data) + 10,
            },
          }" :series="data4"></VueApexCharts>
        </client-only>
      </rs-card>
    </div>

    <div class="grid grid-cols-1 md:flex-row gap-x-6">
      <div class="flex-col">
        <!-- Graph -->
        <rs-card class="flex-1">
          <template #header> Pet </template>
          <template #body>

            <div class="flex grid-cols-1 p-6 justify-center items-baseline gap-6">


              <label class="items-center">
                <span class="text-gray-700">Choose State</span>
              </label>
              <FormKit type="select" :options="options" class="items-center" @change="changeState(negeri)"
                v-model="negeri" />

            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 p-6">
              <rs-card v-for="(val, index) in petData.data" class="p-5 relative border-2">
                <div class="flex-col justify-between">
                  <div>
                    <img :src="'img/' + val.petImage" alt="image" class="w-full h-48 object-cover rounded-lg" />
                    <h5>
                      {{ val.petName }}
                      <!-- test -->
                    </h5>
                    <p class="">
                      <!-- test -->
                      {{ val.petBreed }}
                    </p>
                    <br />
                    <p class="">
                      <!-- test -->
                      {{ val.petDescription }}
                    </p>
                    <br />
                    <!-- <span>Author: {{ val.bookAuthor }}</span> -->
                    <span> {{ val.petLocation }}</span>

                  </div>

                  <div class=" flex flex-row justify-center p-6 gap-5">
                    <!-- <nuxt-link :to="`/bookstore/edit/${val.bookID}`"> -->
                    <nuxt-link :to="`pet/pet-info/${val.petID}`">
                      <rs-button size="sm" @click="requestAdopt(val.petID)"> Info </rs-button>

                    </nuxt-link>
                    <rs-button size="sm" @click="requestAdopt(val.petID)"> Request </rs-button>
                    <!-- </nuxt-link> -->
                  </div>
                </div>

              </rs-card>
            </div>

          </template>
        </rs-card>
      </div>
    </div>
  </div>
</template>
