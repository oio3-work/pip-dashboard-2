<template>
  <div>
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto [&amp;::-webkit-scrollbar]:w-0">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
            <!-- Header -->
            <div class="px-6 py-4 gap-3 flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
              <div>
                <h2 class="text-xl font-semibold text-gray-800 dark:text-neutral-200">{{ tableHeaderInformation.titleTable }}</h2>
                <p class="text-sm mt-1 text-gray-600 dark:text-neutral-400">{{ tableHeaderInformation.describtion }}</p>
              </div>

              <div class="mr-auto">
                <butto @click="tableHeaderInformation.buttonHeader.func" class="py-2 transform hover:scale-105 duration-500 ease-in-out px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700">
                  <Icon class="shrink-0 size-4 md:size-5" :name="tableHeaderInformation.buttonHeader.iconName"></Icon>
                  {{ tableHeaderInformation.buttonHeader.lable }}
                </butto>
              </div>
            </div>
            <!-- End Header -->

            <!-- Table -->
            <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead class="bg-gray-50 dark:bg-neutral-900/30">
                <tr>
                  <th v-for="(header, index) in headers" :key="index" scope="col" class="px-6 py-3 md:px-1 md:py-2 text-center">
                    <div :class="index == 0 ? 'ps-6' : ''" class="flex items-center gap-x-2">
                      <span class="text-sm font-medium tracking-wide text-gray-800 dark:text-neutral-200"> {{ header }} </span>
                    </div>
                  </th>

                  <th v-if="actions" scope="col" class="px-6 py-3 md:px-1 md:py-2 text-start">
                    <div class="flex items-center gap-x-2">
                      <span class="text-sm font-medium tracking-wide text-gray-800 dark:text-neutral-200"> العمليات </span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody class="divide-y h-20 overflow-hidden divide-gray-200 dark:divide-neutral-700">
                <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
                  <td v-for="(value, colIndex) in row" :key="colIndex" :class="colIndex == 0 ? 'ps-6' : ''" class="size-px whitespace-nowrap">
                    <div class="px-6 py-3 md:px-1 md:py-2">
                      <span :class="colIndex == 1 ? 'text-gray-800 dark:text-neutral-200 font-semibold' : 'text-gray-500 dark:text-neutral-500 font-medium '" class="block text-sm  ">{{ value }}</span>
                    </div>
                  </td>

                 
                   <!-- operatior -->
                  <td class="size-px whitespace-nowrap">
                    <div class="px-6 py-3 md:px-1 md:py-2">
                      <div class="inline-flex border border-gray-200 rounded-full dark:border-neutral-700">
                                  
                        <button  v-for="(action, actionIndex) in actions" :key="actionIndex" @click="action.func(row)" :class="`hover:bg-${action.color}-100 hover:text-${action.color}-800 dark:hover:bg-${action.color}-900 dark:hover:text-${action.color}-200`" class="transition-all inline-flex shrink-0 justify-center items-center size-8 rounded-full text-gray-500  dark:text-neutral-500 ">
                          <Icon class="shrink-0 size-4" :name="action.icon" />
                        </button>

                      </div>
                    </div>
                  </td> 
                 <!-- ===========  operatior  ===========  -->
                </tr>
              </tbody>
            </table>
            <!-- End Table -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  tableHeaderInformation: {
    type: Object,
    required: true,
  },
  headers: {
    type: Array,
    required: true,
  },
  rows: {
    type: Array,
    required: true,
  },
  actions: {
    type: Array,
    default: null,
  },
 
});
</script>
