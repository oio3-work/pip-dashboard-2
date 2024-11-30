<template>
  <div>
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto [&amp;::-webkit-scrollbar]:w-0">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
            <!-- Header -->
            <div class="px-6 py-4 gap-3 flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
              <div>
                <h2 class="text-xl font-semibold text-gray-800 dark:text-neutral-200">Users</h2>
                <p class="text-sm text-gray-600 dark:text-neutral-400">Add users, edit and more.</p>
              </div>

              <div class="mr-auto">
                <a class="py-2 transform hover:scale-105 duration-500 ease-in-out px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                  <Icon class="shrink-0 size-4 md:size-5" name="healthicons:truck-driver"></Icon>
                  Add user
                </a>
              </div>
            </div>
            <!-- End Header -->

            <!-- Table -->
            <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead class="bg-gray-50 dark:bg-neutral-800">
                <tr>
                  <th v-for="(tableItemHeader, index) in tableItemsHeader" :key="index" scope="col" class="px-6 py-3 md:px-1 md:py-2 text-start">
                    <div :class="index == 0 ? 'ps-6' : ''" class="flex items-center gap-x-2">
                      <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200"> {{ tableItemHeader.label }} </span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr v-for="(tableContentItem, index) in tableContentItems" :key="index">
                  <td class="ps-6 size-px whitespace-nowrap">
                    <div class="px-6 py-3 md:px-1 md:py-2">
                      <span class="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{{ tableContentItem.name }}</span>
                    </div>
                  </td>
                  <td class="size-px whitespace-nowrap">
                    <div class="px-6 py-3 md:px-1 md:py-2">
                      <span class="block text-sm text-gray-500 dark:text-neutral-500">{{ tableContentItem.address }}</span>
                    </div>
                  </td>
                  <td class="size-px whitespace-nowrap">
                    <div class="px-6 py-3 md:px-1 md:py-2">
                      <span class="block text-sm text-gray-500 dark:text-neutral-500">{{ tableContentItem.phone }}</span>
                    </div>
                  </td>
                  <td class="size-px whitespace-nowrap">
                    <div class="px-6 py-3 md:px-1 md:py-2">
                      <span class="block text-sm text-gray-500 dark:text-neutral-500">{{ tableContentItem.gender }}</span>
                    </div>
                  </td>
                  <td class="size-px whitespace-nowrap">
                    <div class="px-6 py-3 md:px-1 md:py-2">
                      <span class="block text-sm text-gray-500 dark:text-neutral-500">{{ tableContentItem.products }}</span>
                    </div>
                  </td>
                  <td class="size-px whitespace-nowrap">
                    <div class="px-6 py-3 md:px-1 md:py-2">
                      <div class="inline-flex border border-gray-200 rounded-full   dark:border-neutral-700">
                        <button type="button" class="transition-all inline-flex shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800  dark:text-neutral-500 dark:hover:bg-blue-900 dark:hover:text-blue-200 ">
                         <Icon class="shrink-0 size-4" name="lucide:edit-2"/>
                        </button>
                        <button type="button" class=" transition-all inline-flex shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-red-100 hover:text-red-800  dark:text-neutral-500 dark:hover:bg-red-900 dark:hover:text-red-200 ">
                        <Icon class="shrink-0 size-4" name="pajamas:remove"/>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- End Table -->

            <!-- Footer -->
            <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
              <div>
                <p class="text-sm text-gray-600 dark:text-neutral-400">
                  <span class="font-semibold text-gray-800 dark:text-neutral-200">12</span>
                  page
                </p>
              </div>

              <div>
                <div class="inline-flex gap-x-2">
                  <button type="button" class="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                    Prev
                  </button>

                  <button type="button" class="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                    Next
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <!-- End Footer -->
         
          </div>
        </div>    
      </div>
    </div>
  </div> 
  <Modal/>
</template>

<script setup>
import { tableItemsHeader, tableContentItems } from "./script";
</script>
