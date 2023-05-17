<script setup>
import { PieChart, usePieChart } from "vue-chart-3";

definePageMeta({
  title: "Dashboard",
  middleware: ["auth"], // This is for Login Auth for page
  requiresAuth: true, // This is use for Login Auth for page
});

const changeKey1 = ref(0);
const changeKey2 = ref(0);

const series1 = ref([
  {
    name: "Series 1",
    data: [30, 40, 35, 50, 49, 60, 70, 91],
  },
]);

const chartOptions1 = computed(() => ({
  chart: {
    id: "apexChart",
    toolbar: {
      show: false,
    },
  },
  legend: {
    position: "top",
  },
  theme: {
    mode: "light",
    palette: "palette1",
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
    },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        legend: {
          position: "bottom",
        },
      },
    },
  ],
}));

const series2 = ref([60]);

const chartOptions2 = computed(() => ({
  colors: ["#20E647"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "70%",
        background: "#293450",
      },
      track: {
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 4,
          opacity: 0.15,
        },
      },
      dataLabels: {
        name: {
          offsetY: -10,
          color: "#fff",
          fontSize: "13px",
        },
        value: {
          color: "#fff",
          fontSize: "30px",
          show: true,
        },
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      gradientToColors: ["#87D4F9"],
      stops: [0, 100],
    },
  },
  stroke: {
    lineCap: "round",
  },
  labels: ["Goals"],
}));

const categories = [
  {
    name: "Shopping",
    amount: 100,
  },
  {
    name: "Saving",
    amount: 500,
  },
  {
    name: "Groceries",
    amount: 500,
  },
  {
    name: "Loans",
    amount: 500,
  },
];

onMounted(() => {
  setTimeout(() => {
    changeKey1.value++;
    changeKey2.value++;
  }, 500);
});
</script>

<template>
  <div>
    <LayoutsBreadcrumb />

    <rs-card class="p-4">
      <div class="grid grid-cols-12 gap-2">
        <div class="col-span-8">
          <div class="grid grid-cols-12 gap-2">
            <div class="col-span-12">
              <h4 class="ml-4">Expenses per month</h4>
            </div>
          </div>
          <div class="grid grid-cols-12 mt-5">
            <div class="col-span-12">
              <VueApexCharts
                :key="changeKey1"
                width="100%"
                height="300"
                type="bar"
                :options="chartOptions1"
                :series="series1"
              ></VueApexCharts>
            </div>
          </div>
        </div>
        <div class="col-span-4">
          <div class="flex justify-between">
            <h4 class="ml-4">Budget</h4>

            <rs-button size="sm">Set Budget</rs-button>
          </div>

          <VueApexCharts
            :key="changeKey2"
            width="100%"
            height="300"
            type="radialBar"
            :options="chartOptions2"
            :series="series2"
          ></VueApexCharts>

          <div class="flex justify-around">
            <div class="flex flex-col text-center">
              <h5 class="text-primary font-semibold">$ 50,000</h5>
              <span>Monthly limit</span>
            </div>
            <div class="flex flex-col text-center">
              <h5 class="text-primary font-semibold">$ 3,000</h5>
              <span>Remaining</span>
            </div>
          </div>
        </div>
      </div>
    </rs-card>

    <!-- <rs-card class="p-4"> -->
    <h4>Categories with Biggest Expenses</h4>

    <div class="grid grid-cols-12 gap-3 mt-3">
      <rs-card
        class="col-span-6 sm:col-span-2 p-3 text-center hover-card"
        v-for="(data, index) in categories"
        :key="index"
      >
        <span class="text-primary">
          <Icon
            name="material-symbols:fastfood"
            size="50"
            color="primary"
          ></Icon>
        </span>

        <br />

        <div class="mt-3">
          <span> {{ data.name }}</span>
          <h5 class="text-primary font-semibold">$ {{ data.amount }}</h5>
        </div>
      </rs-card>
    </div>
    <!-- </rs-card> -->
  </div>
</template>

<style scoped>
.rs-card {
  transition: transform 0.3s ease;
}

.hover-card:hover {
  transform: scale(1.1);
}
</style>
