<script setup>
  definePageMeta({
    title: "Add New Collection",
  });

  const type = [
    "Shirt",
    "Pants",
    "Jacket",
    "Hood",
  ];

  const sizes = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "Free",
  ];

  const status = [
    "In Stock",
    "Out of Stock",
    "Ordered",
    "New Arrival",
    "Unknown",
  ];
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
        <FormKit type="form"  :action="false" @submit="submit" :incomplete-message="false">
          <!-- Input Name -->
          <div class="flex flex-row items-center">
            <div class="w-1/2 pr-2"> 
              <FormKit type="text" label="Name" validation="required" validation-visibility="dirty" class="w-48">
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
              <FormKit type="select" label="Type" validation="required" validation-visibility="dirty" :options="type">
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
          <FormKit type="radio" label="Size" validation="required" validation-visibility="dirty" :options="sizes" class="inline"/>
          
          <!-- Input Quantity -->
          <div class="flex flex-row items-center">
            <div class="w-1/2 pr-2"> 
              <FormKit type="number" label="Quantity" validation="required" validation-visibility="dirty">
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
              <FormKit type="number" label="Ordered" validation="required" validation-visibility="dirty">
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
              <FormKit type="select" label="Status" validation="required" validation-visibility="dirty">
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
              <FormKit type="file" label="Image" accept=".png,.jpg,.jpeg"></FormKit>
            </div>
          </div>

        </FormKit>
      </template>
    </rs-card>
  </div>
</template>
      