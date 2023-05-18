<script setup>
import { useUserStore } from "~/stores/user";
import { PieChart, usePieChart } from "vue-chart-3";
import axios from "axios";

definePageMeta({
  title: "Dashboard",
  middleware: ["auth"], // This is for Login Auth for page
  requiresAuth: true, // This is use for Login Auth for page
});

const userStore = useUserStore();
const changeKey1 = ref(0);
const changeKey2 = ref(0);

const series1 = ref([
  {
    name: "Series 1",
    data: [],
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
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
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

const series2 = ref([0]);

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
  labels: [`${month} Expense`],
}));

const categories = ref([]);

const monthlyLimit = ref(0);
const monthlyRemaining = ref(0);

// CURRENT MONTH IN WORD
const month = new Date().toLocaleString("default", { month: "long" });

// CURRENT YEAR
const year = new Date().getFullYear();

const dashData = async () => {
  let data = JSON.stringify({
    user: userStore.username,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/api/dashboard/data",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    console.log("data: ", response.data);

    if (response.data.statusCode == 200) {
      monthlyLimit.value = response.data.data.perMonth;
      monthlyRemaining.value = response.data.data.remaining;
      updateSeries2Value(response.data.data.percentage.toFixed(2) || 0);

      series1.value = [
        {
          name: "Total Expense",
          data: response.data.data.expensesByMonth,
        },
      ];

      console.log(response.data.data.catExpenses);

      // PUSH INTO CATEGORUES ARRAY
      response.data.data.catExpenses.forEach((element) => {
        categories.value.push({
          name: element.CAT,
          amount: element.AMOUNT || 0,
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
};

function updateSeries2Value(value) {
  series2.value = [value];
}

function numberFormat(value) {
  return parseFloat(value).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

onMounted(() => {
  setTimeout(() => {
    changeKey1.value++;
    changeKey2.value++;
  }, 500);

  dashData();
});
</script>

<template>
  <div>
    <rs-card class="p-4">
      <div class="grid grid-cols-12 gap-2">
        <div class="col-span-8">
          <div class="grid grid-cols-12 gap-2">
            <div class="col-span-12">
              <h4 class="ml-4">Expenses per month in <span class="text-primary">{{ year }}</span></h4>
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
        <div class="col-span-4 border-l">
          <div class="flex justify-between">
            <h4 class="ml-4">Budget</h4>

            <nuxt-link :to="`/permonth`">
              <rs-button size="sm">Set Budget</rs-button>
            </nuxt-link>
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
              <h5 class="text-primary font-semibold">
                RM {{ numberFormat(monthlyLimit) }}
              </h5>
              <span>Monthly limit</span>
            </div>
            <div class="flex flex-col text-center">
              <h5 class="text-primary font-semibold">
                RM {{ numberFormat(monthlyRemaining) }}
              </h5>
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
            name="material-symbols:category-outline"
            size="50"
            color="primary"
          ></Icon>
        </span>

        <br />

        <div class="mt-3">
          <span> {{ data.name }}</span>
          <h5 class="text-primary font-semibold">
            RM {{ numberFormat(data.amount) }}
          </h5>
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
