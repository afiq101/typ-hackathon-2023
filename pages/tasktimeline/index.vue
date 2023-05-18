<script setup>
import { useUserStore } from "~/stores/user";

  definePageMeta({
    title: "Task Progress",
  });

  const userStore = useUserStore();
  //console.log(userStore.username);

  const { data: taskData } = await useFetch("/api/task/getTask", {
    method: "POST",
    body: {
      username: userStore.username,
    },
  });

  
  const transformedData = await taskData.value.data.map(item => ({
    x:item.taskDescription,
    y: [
      new Date(item.taskStartDate).getTime(),
      new Date(item.taskEndDate).getTime(),
    ],
  }))

  const rangeBarData = ref([
            {
              data: transformedData
            }
  ]);

  const chartOptionsRange = computed(() => ({
    chart: {
      height: 350,
      type: 'rangeBar'
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '80%'
      }
    },
    xaxis: {
      type: 'datetime'
    },
  }));

</script>





<template>
  <div>

        <rs-card class="flex-1">
          <template #header> Task Timeline </template>
          <template #body>
            <client-only>
              <VueApexCharts
                :key="changeKey"
                width="100%"
                height="300"
                name="rangeBar"
                :options="chartOptionsRange"
                :series="rangeBarData"
              ></VueApexCharts>
            </client-only>
          </template>
        </rs-card>
    
  </div>
</template>
      