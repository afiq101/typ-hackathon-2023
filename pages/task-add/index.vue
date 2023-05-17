<script setup>
import { DateTime } from "luxon";

definePageMeta({
  title: "New Task",
});

const form = ref({
  name: "",
  description: "",
  startdate: "",
  enddate: "",
  status: ""
});

const status = [
  { label: "Active", value: 1 },
  { label: "Not Active", value: 0 }
];

//datetime picker
const dt = DateTime.now();
const datetime = dt.toFormat("yyyy-MM-dd'T'HH:mm");

const submit = async () => {
  try {

    const { data } = await useFetch("/api/task/add", {
      method: "POST",
      body: {
        vName       : form.value.name,
        vDescription: form.value.description,
        vStartDate  : form.value.startdate,
        vEndDate    : form.value.enddate,
        vStatus     : form.value.status
      },
    });

    if(data.value.statusCode == 200)
    {
      alert("Success");
    }
    else
    {
      alert("error");
    }
  } catch (error) {
    throw error;
  }
};

</script>

<template>
  <div>
    <rs-card>
      <template #header>
        <div class="px-5">
          <p class="flex justify-between items-start md:items-center mb-4 flex-col md:flex-row">
            <span class="text-2xl font-bold">New Task</span>
          </p>
        </div>
      </template>
      <template #body>
        <div class="px-5 pb-5">
          <FormKit type="form" :actions="false" @submit="submit" incomplete-message="false">
            <FormKit type="text" v-model="form.name" label="Name" validation="required" validation-visibility="dirty">
              <template #label>
                <label
                  class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">
                  Name <span class="text-danger">*</span>
                </label>
              </template>
            </FormKit>
            <FormKit type="textarea" v-model="form.description" placeholder="Enter task description" label="Description" />
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-6">
              <FormKit type="datetime-local" :value="datetime" v-model="form.startdate" label="Start Date" />
              <FormKit type="datetime-local" v-model="form.enddate" label="End Date" />
            </div>
            <FormKit type="select" v-model="form.status" label="Status" name="status">
              <option v-for="option in status" :value="option.value" :key="option.value">
                {{ option.label }}
              </option>
            </FormKit>
            <rs-button class="text-right"> Submit</rs-button>
          </FormKit>
        </div>
      </template>
    </rs-card>
  </div>
</template>
      