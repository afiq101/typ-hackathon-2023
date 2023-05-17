<script setup>
  definePageMeta({
    title: "Add New Collection",
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

  // const sizes = [
  //   "XS",
  //   "S",
  //   "M",
  //   "L",
  //   "XL",
  //   "XXL",
  //   "Free",
  // ];
  
  // const status = [
  //   "In Stock",
  //   "Out of Stock",
  //   "Ordered",
  //   "New Arrival",
  //   "Unknown",
  // ];

  const form = ref({
    stockName: "",
    stockType: "",
    stockSize: "",
    stockQuantity: "",
    stockTotal: "",
    stockStatus: "",
    stockImage: "",
  });

  const submit = async () => {
    if (form.value.stockName == "" || form.value.stockStatus == "") {
      return;
    }

    try {
      const { data } = await useFetch("/api/collection/add", {
        method: "POST",
        body: {
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
        windows.location.href = "/collection";
      } else {
        alert("Failed");
      }

    } 
      catch(error) {
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

        <!-- Add Form  -->
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
              <FormKit v-model="form.stockTotal" type="number" label="Total" validation="required" validation-visibility="dirty">
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
              <!-- <FormKit v-model="form.stockImage" type="file" label="Image" accept=".png,.jpg,.jpeg"></FormKit> -->
            </div>
          </div>
		  <!--<rs-button> Submit </rs-button>-->
        </FormKit>
      </template>
    </rs-card>
  </div>
</template>
