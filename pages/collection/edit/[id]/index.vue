<script setup>
  definePageMeta({
    title: "Edit Collection",
  });

  const type = {
    Shirt:  "Shirt",
    Pants: "Pants",
    Jacket: "Jacket",
    Hood: "Hood",
  };

  const sizes = {
    XS:  "XS",
    S: "S",
    M: "M",
    L: "L",
    XL: "XL",
    XXL: "XXL",
    Free: "Free"
  };

  const status = {
    inStock:  "In Stock",
    outStock: "Out of Stock",
    orderStock: "Ordered",
    newStock: "New Arrival",
  };

  const paramID = useRoute().params.id;

  const form = ref({
	stockName: "",
	stockType: "",
	stockSize: "",
	stockQuantity: "",
	stockTotal: "",
	stockStatus: "",
	stockImage: "",
	});


const { data } = await useFetch("/api/collection/getstock", {
	method: "GET",
	query: {
		stockID: paramID,
	},
});

if (data.value.statusCode == 200) {
	form.value.stockName = data.value.data.stockName;
	form.value.stockType = data.value.data.stockType;
	form.value.stockSize = data.value.data.stockSize;
	form.value.stockQuantity = data.value.data.stockQuantity;
	form.value.stockTotal = data.value.data.stockTotal;
	form.value.stockStatus = data.value.data.stockStatus;
	form.value.stockImage = data.value.data.stockImage;
	} else {
		alert("Tiada Stock dengan ID ini");
	}

const submit = async () => {
  if (form.value.stockName == "" || form.value.stockStatus == "") {
    return;
  }

  try {
	const { data } = await useFetch("/api/collection/edit", {
		method: "POST",
		body: {
			stockID: paramID,
			stockName: form.value.stockName,
			stockType: form.value.stockType,
			stockSize: form.value.stockSize,
			stockQuantity: form.value.stockQuantity,
			stockTotal: form.value.stockTotal,
			stockStatus: form.value.stockStatus,
			stockImage: form.value.stockImage,
		},
	});

	if (data.value.statusCode == 200) {
		alert("Success");
		window.location.href = "/collection";
	} else {
		alert("Failed");
	}

	} catch(error) {
		return;
	}
};

</script>
<template>
  <div>
    <LayoutsBreadcrumb />

    <rs-card>
      <template #header>
        Collection
      </template>
      <template #body>
        <!-- Edit Form  -->
        <FormKit type="form" :action="false" @submit="submit" :incomplete-message="false">
          <!-- Input Name -->
          <div class="flex flex-row items-center">
            <div class="w-1/2 pr-2">
              <FormKit v-model="form.stockName" type="text" label="Name" validation="required" validation-visibility="dirty" class="w-48">
                <template #label>
                  <label
                    class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                  >
                    Name <span class="text-danger">*</span>
                  </label>
                </template>
              </FormKit>
            </div>
            <div class="w-1/2 pl-2"> <!-- Input Type -->
              <FormKit v-model="form.stockType" type="select" label="Type" validation="required" validation-visibility="dirty" :options="type">
                <template #label>
                  <label
                    class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                  >
                    Type <span class="text-danger">*</span>
                  </label>
                </template>
              </FormKit>
            </div>
          </div>

          <!-- Input Size -->
          <FormKit v-model="form.stockSize" type="radio" label="Size" validation="required" validation-visibility="dirty" :options="sizes" class="inline"/>

          <!-- Input Quantity -->
          <div class="flex flex-row items-center">
            <div class="w-1/2 pr-2">
              <FormKit v-model="form.stockQuantity" type="number" label="Quantity" validation="required" validation-visibility="dirty">
                <template #label>
                  <label
                    class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                  >
                    Quantity <span class="text-danger">*</span>
                  </label>
                </template>
              </FormKit>
            </div>
            <div class="w-1/2 pl-2">
              <!-- Input Total -->
              <FormKit v-model="form.stockTotal" type="number" label="Ordered" validation="required" validation-visibility="dirty">
                <template #label>
                  <label
                    class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                  >
                    Total <span class="text-danger">*</span>
                  </label>
                </template>
              </FormKit>
            </div>
          </div>

          <!-- Input Status -->
          <div class="flex flex-row items-center">
            <div class="w-1/2 pr-2">
              <FormKit v-model="form.stockStatus" type="select" label="Status" validation="required" validation-visibility="dirty" :options="status">
                <template #label>
                  <label
                    class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                  >
                    Status <span class="text-danger">*</span>
                  </label>
                </template>
              </FormKit>
            </div>
            <div class="w-1/2 pl-2">
              <!-- Input Image -->
              <!--<FormKit v-model="form.stockImage" type="file" label="Image" accept=".png,.jpg,.jpeg"></FormKit>-->
            </div>
          </div>

        </FormKit>
      </template>
    </rs-card>
  </div>
</template>
