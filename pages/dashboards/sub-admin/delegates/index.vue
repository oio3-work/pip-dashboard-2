<template>
  <div>
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto [&amp;::-webkit-scrollbar]:w-0">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
            <!-- Header -->
            <div class="px-6 py-4 gap-3 flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
              <div>
                <h2 class="text-xl font-semibold text-gray-800 dark:text-neutral-200">{{ tableiformation.title }}</h2>
                <p class="text-sm mt-1 text-gray-600 dark:text-neutral-400">{{ tableiformation.describtion }}</p>
              </div>

              <div class="mr-auto">
                <a class="py-2 transform hover:scale-105 duration-500 ease-in-out px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                  <Icon class="shrink-0 size-4 md:size-5" :name="tableiformation.buttonHeader.iconName"></Icon>
                  {{ tableiformation.buttonHeader.title }}
                </a>
              </div>
            </div>
            <!-- End Header -->

            <!-- Table -->
            <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead class="bg-gray-50 dark:bg-neutral-900/30">
                <tr>
                  <th v-for="(tableItemHeader, index) in tableItemsHeader" :key="index" scope="col" class="px-6 py-3 md:px-1 md:py-2 text-start">
                    <div :class="index == 0 ? 'ps-6' : ''" class="flex items-center gap-x-2">
                      <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200"> {{ tableItemHeader.label }} </span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody class="divide-y h-20 overflow-hidden divide-gray-200 dark:divide-neutral-700">
                <tr  v-for="(tableContentItem, index) in tableContentItems" :key="index">
                 
                  <td class="size-px whitespace-nowrap" v-for="(item, index) in tableContentItem" :key="index">
                    <div class="px-6 py-3 md:px-1 md:py-2">
                      <span class="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{{ tableContentItem.name }}</span>
                    </div>
                  </td>

                  <!-- <td class="ps-6 size-px whitespace-nowrap">
                    <div class="px-6 py-3 md:px-1 md:py-2">
                      <span class="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{{ tableContentItem.id }}</span>
                    </div>
                  </td>
                  <td class="size-px whitespace-nowrap">
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
                      <div class="inline-flex border border-gray-200 rounded-full dark:border-neutral-700">
                        <button @click="openEditModal(tableContentItem)" aria-controls="modal-edit-delegates" data-hs-overlay="#modal-edit-delegates" type="button" class="transition-all inline-flex shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 dark:text-neutral-500 dark:hover:bg-blue-900 dark:hover:text-blue-200">
                          <Icon class="shrink-0 size-4" name="lucide:edit-2" />
                        </button>
                        <button  aria-controls="modal-remove-delegates" data-hs-overlay="#modal-remove-delegates" @click="openRemoveModal(tableContentItem)" type="button" class="transition-all inline-flex shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-red-100 hover:text-red-800 dark:text-neutral-500 dark:hover:bg-red-900 dark:hover:text-red-200">
                          <Icon class="shrink-0 size-4" name="pajamas:remove" />
                        </button>
                      </div>
                    </div>
                  </td> -->
                </tr>
              </tbody>
            </table>
            <!-- End Table -->

            <!-- Footer -->
            <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
              <div>
                <p class="text-sm text-gray-600 dark:text-neutral-400">
                  page <span class="font-semibold text-gray-800 dark:text-neutral-200">{{ tableiformation.pages.now }} / {{ tableiformation.pages.length }}</span>
                </p>
              </div>

              <div>
                <div class="inline-flex gap-x-2">
                  <button type="button" @click="prevPageTableData" class="py-1.5 px-2 transition-all hover:translate-x-1 hover:opacity-70 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                    <Icon name="ooui:arrow-next-ltr"></Icon>
                    Prev
                  </button>

                  <button type="button" @click="nextPageTableData" class="py-1.5 px-2 transition-all hover:-translate-x-1 hover:opacity-70 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                    Next
                    <Icon name="ooui:arrow-next-rtl"></Icon>
                  </button>
                </div>
              </div>
            </div>
            <!-- End Footer -->
          </div>
        </div>
      </div>
    </div>

    <!-- modal edit  -->
    <div id="modal-edit-delegates" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="modal-edit-delegates-label">
      <div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
        <div class="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
            <h3 id="modal-edit-delegates-label" class="font-medium text-gray-800 dark:text-white">تعديل مندوب</h3>
            <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#modal-edit-delegates">
              <span class="sr-only">Close</span>
              <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
          <div class="p-4 overflow-y-auto">
            <div class="space-y-5">
              <p class="text-gray-800 w-full text-center dark:text-neutral-400">تعديل تفاصيل المندوبين</p>

              <!-- Floating Input -->
              <div v-for="(modalEditValue, index) in modalEditValues" :key="index">
                <div v-if="modalEditValue.type == 'input'" class="relative mt-1">
                  <input type="text" id="hs-floating-input-text-value" class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2" :value="modalEditValue.value" />
                  <label for="hs-floating-input-text-value" class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500">{{ modalEditValue.lable }}</label>
                </div>

                <div v-if="modalEditValue.type == 'Radio'">
                  <div class="grid sm:grid-cols-2 gap-2">
                    <label for="hs-radio-in-form" class="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                      <input type="radio" name="hs-radio-in-form" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-in-form" :checked="modalEditValue.value == 'ذكر'" />
                      <span class="text-sm text-gray-500 ms-3 dark:text-neutral-400">ذكر</span>
                    </label>

                    <label for="hs-radio-in-form" class="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                      <input type="radio" name="hs-radio-in-form" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-checked-in-form" :checked="modalEditValue.value == 'انثى'" />
                      <span class="text-sm text-gray-500 ms-3 dark:text-neutral-400">انثى</span>
                    </label>
                  </div>
                </div>
              </div>
              <!-- End Floating Input -->
            </div>
          </div>
          <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#modal-edit-delegates">خروج</button>
            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">حفظ التعديل</button>
          </div>
        </div>
      </div>
    </div>
    <!-- ===========  modal edit   ===========  -->

    <!-- modal remove -->
    <div id="modal-remove-delegates" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="modal-remove-delegates-label">
      <div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
        <div class="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
            <h3 id="modal-remove-delegates-label" class="font-medium text-gray-800 dark:text-white">حذف مندوب</h3>
            <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#modal-remove-delegates">
              <span class="sr-only">Close</span>
              <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
          <div class="p-4 overflow-y-auto">
            <div class="space-y-5 text-center">
              <p class="text-gray-800 w-full font-medium text-xl  dark:text-neutral-400">هل تريد فعلا حذف ؟<br /></p>
              <span class=" py-1 px-3 inline-flex items-center gap-x-1 font-medium bg-red-100 text-red-800 rounded-full dark:bg-red-500/10 dark:text-red-500">المندوب :    {{ modalRemoveValues[1].value }}  
                 <Icon name="material-symbols-light:delete-outline-rounded"></Icon>
             </span>
            </div>
          </div>
          <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#modal-remove-delegates">الغاء</button>
            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">حذف</button>
          </div>
        </div>
      </div>
    </div>
    <!-- ===========  modal remove  ===========  -->
  </div>
</template>

<script setup>
import { tableItemsHeader, tableContentItems, tableiformation, modalEditValues ,modalRemoveValues } from "./script";

 

async function nextPageTableData() {
  try {
    // const response = await fetch(apiUrl);
    // if (!response.ok) {
    //   throw new Error(`خطأ في استدعاء API: ${response.statusText}`);
    // }

    // const data = await response.json();
    const data = [
      {
        id: 5,
        name: "محمد محمود يوسف",
        phone: "07890325814",
        code: "11223344",
        gender: "ذكر",
        address: "كربلاء - شارع العباس",
        shop: "سوق المدينة",
        products: "25 - 50 - 100",
      },
      {
        id: 6,
        name: "هدى ناصر جاسم",
        phone: "07833123456",
        code: "22334455",
        gender: "أنثى",
        address: "ديالى - الخالص",
        shop: "سوق الخالص",
        products: "60 - 120 - 240",
      },
      {
        id: 6,
        name: "هدى ناصر جاسم",
        phone: "07833123456",
        code: "22334455",
        gender: "أنثى",
        address: "ديالى - الخالص",
        shop: "سوق الخالص",
        products: "60 - 120 - 240",
      },
    ];
    // تحديث البيانات في الجدول
    tableContentItems.splice(0, tableContentItems.length, ...data);
    tableiformation.pages.now = 3;
    // tableiformation.pages.length = 6
  } catch (error) {
    console.error("حدث خطأ أثناء تحديث البيانات:", error.message);
  }
}
async function prevPageTableData() {
  try {
    // const response = await fetch(apiUrl);
    // if (!response.ok) {
    //   throw new Error(`خطأ في استدعاء API: ${response.statusText}`);
    // }

    // const data = await response.json();
    const data = [
      {
        id: 5,
        name: "محمد محمود يوسف",
        phone: "07890325814",
        code: "11223344",
        gender: "ذكر",
        address: "كربلاء - شارع العباس",
        shop: "سوق المدينة",
        products: "25 - 50 - 100",
      },
      {
        id: 6,
        name: "هدى ناصر جاسم",
        phone: "07833123456",
        code: "22334455",
        gender: "أنثى",
        address: "ديالى - الخالص",
        shop: "سوق الخالص",
        products: "60 - 120 - 240",
      },
      {
        id: 6,
        name: "هدى ناصر جاسم",
        phone: "07833123456",
        code: "22334455",
        gender: "أنثى",
        address: "ديالى - الخالص",
        shop: "سوق الخالص",
        products: "60 - 120 - 240",
      },
    ];
    // تحديث البيانات في الجدول
    tableContentItems.splice(0, tableContentItems.length, ...data);
    tableiformation.pages.now = 2;
    // tableiformation.pages.length = 6
  } catch (error) {
    console.error("حدث خطأ أثناء تحديث البيانات:", error.message);
  }
}

function openEditModal(item) {
  const data = [
    {
      type: "",
      lable: "id",
      value: item.id,
    },
    {
      type: "input",
      lable: "الاسم",
      value: item.name,
    },
    {
      type: "input",
      lable: "السكن",
      value: item.address,
    },
    {
      type: "input",
      lable: "الرقم",
      value: item.phone,
    },
    {
      type: "Radio",
      lable: "الجنس",
      value: item.gender,
    },
  ];

  modalEditValues.splice(0, modalEditValues.length, ...data);
}
function openRemoveModal(item) {
  console.log(item);
  
  const data = [
    {
      type: "",
      lable: "id",
      value: item.id,
    },
    {
      type: "input",
      lable: "الاسم",
      value: item.name,
    },
    {
      type: "input",
      lable: "السكن",
      value: item.address,
    },
    {
      type: "input",
      lable: "الرقم",
      value: item.phone,
    },
    {
      type: "Radio",
      lable: "الجنس",
      value: item.gender,
    },
  ];

  modalRemoveValues.splice(0, modalRemoveValues.length, ...data);
  console.log(modalRemoveValues);
  
}

</script>
