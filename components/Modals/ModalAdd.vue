<template>
  <div :id="modalId" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" :aria-labelledby="`${modalId}-label`">
    <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
      <div class="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
          <h3 :id="`${modalId}-label`" class="font-bold text-gray-800 dark:text-white">
            {{ title }}
          </h3>
          <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" :data-hs-overlay="`#${modalId}`">
            <span class="sr-only">Close</span>
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div class="p-4 overflow-y-auto">
          <!-- Filds Inputs -->

          <div v-for="(field, index) in fields" :key="index" class="mb-4">
            <div v-if="field.type !== 'radio' && field.visble" class="relative mt-1">
              <input :readonly="loading"  v-model="formAddData[field.name]" :type="field.type" :id="`floating-input-${field.type}`" class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2" />
              <label :for="`floating-input-${field.type}`" class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500">{{ field.label }}</label>
            </div>
            <div v-if="field.type == 'radio'">
              <div class="grid sm:grid-cols-2 gap-2">
                <!-- ذكر -->
                <label for="radio-male" class="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  <input :disabled="loading" type="radio" name="hs-radio-gender" value="ذكر" id="radio-male" v-model="selectedGender" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" checked />
                  <span class="text-sm text-gray-500 ms-3 dark:text-neutral-400">ذكر</span>
                </label>

                <!-- انثى -->
                <label for="radio-female" class="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  <input :disabled="loading" type="radio" name="hs-radio-gender" value="انثى" id="radio-female" v-model="selectedGender" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                  <span class="text-sm text-gray-500 ms-3 dark:text-neutral-400">انثى</span>
                </label>
              </div>
            </div>
          </div>

          <!-- ===========  Filds Inputs  ===========  -->
        </div>
        <div class="flex justify-center items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
          <div v-if="loading" class=" cursor-wait opacity-60 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-800 shadow-sm bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:bg-neutral-700"><Icon class=" text-4xl " name="eos-icons:three-dots-loading"></Icon></div>
          <button v-if="!loading" type="button" class="py-2 px-8 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" :data-hs-overlay="`#${modalId}`">الغاء</button>
          <button v-if="!loading" type="button" @click="submitForm" class=" py-2 px-8 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">اضافة</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
const selectedGender = ref("ذكر");

defineProps({
  loading: Boolean,
  modalId: String,
  fields: Array,
  title: {
    type: String,
    default: "نموذج",
  },
});

// defineEmits(['submit']);
const emit = defineEmits();
emit("submit");
const formAddData = reactive({});

// watch(selectedGender, (newValue) => {
//   console.log(newValue);
// });

function submitForm () {
  console.log("Form Data:", formAddData);
  formAddData["gender"] = selectedGender.value;
  emit("submit", { ...formAddData });
  
  
};
</script>
