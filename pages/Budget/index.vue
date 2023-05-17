<script setup>
definePageMeta({
  title: "Budget",
});

const budget = ref();
let essential = ref();
let discretionary = ref();
let saving = ref();

const calculate = async () => {
  essential.value = budget.value * 0.5;
  discretionary.value = budget.value * 0.3;
  saving.value = budget.value * 0.2;
}
</script>
<template>
  <div>
    <LayoutsBreadcrumb />
  </div>
  <div>
    <rs-card>
      <div class="p-10">
        <div class="wrapper ">
          <h1>Budget Suggester</h1>
          <div class="pt-4">
            <FormKit type="number" label="Amount to Budget (RM)" v-model="budget" required />
            <FormKit type="button" input-class="w-full" outer-class="col-span-2" @click="calculate">
              Calculate Budget
            </FormKit>
          </div>
        </div>
      </div>
      <div v-if="essential != null" class="pb-5">
        <div class="flex justify-center">
          <h4>Budget Suggestion</h4>
        </div>
        <div class="grid grid-cols-3 gap-4 ">
          <rs-card>
            <div class="flex justify-center">
              RM {{ essential }}
            </div>
            <div>
              
            </div>
          </rs-card>
          <rs-card>
            Discretionary
          </rs-card>
          <rs-card>
            Saving
          </rs-card>
        </div>
      </div>
    </rs-card>
  </div>
  <!-- <div class="flex justify-center">
          Essential: RM {{ essential }}
        </div>
        <div class="flex justify-center">
          Discretionary: RM{{ discretionary }}
        </div>
        <div class="flex justify-center">
          Saving: RM {{ saving }}
        </div> -->
</template>
<style>
.wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
</style>
      