<template>
  <!-- best Customers  -->
  <div class="flex-1 mt-4 text-center">
    <p
      class="border border-dashed   border-gray-500/30 dark:border-neutral-300/35 relative bg-transparent -skew-y-2 text-gray-500  dark:text-neutral-500  p-1 mb-1 font-semibold tracking-wide text-lg"
    >
      أفضل الزبائن
    </p>

    <ul
      class="text-start overflow-y-scroll h-36 mt-2 [&::-webkit-scrollbar]:w-0 divide-y divide-gray-500/30 dark:divide-neutral-500/30 text-gray-500 dark:text-neutral-300 p-2"
    >
      <li  v-for="(itemCustomer, index) in bestCustomers"  :key="index" class="flex py-2">

        <Icon v-if="index + 1 < 4" class="ml-1 size-7" :name=" index + 1 == 1 ?  'noto:1st-place-medal' : index + 1 == 2 ?  'noto:2nd-place-medal': 'noto:3rd-place-medal' ">
        </Icon>
        <span v-else class="ml-1 size-7 text-lg text-yellow-600"># {{index + 1 }}</span>
        <span class="line-clamp-1">{{ itemCustomer.name }}</span>
        <div
          class="flex mr-auto gap-1 text-teal-800 dark:text-teal-500 border-b border-teal-800/50 dark:border-teal-500/50"
        >
          <span>{{itemCustomer.orders}}</span>
          <Icon class="size-4 mt-1.5" name="lucide:package-check"></Icon>
        </div>



      </li>
     
    </ul>
  </div>
  <!-- ===========  best Customers   ===========  -->
</template>

<script setup>
 import bestCustomers from './script'
</script>
