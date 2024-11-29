<template>
  <div dir="rtl" class="bg-gray-50 dark:bg-neutral-900 [&amp;::-webkit-scrollbar]:w-0">
    <HeaderTemplate />
    <BreadcrumbTemplate />
    <SidebarTemplate />

    <!-- Content -->
    <div class=" w-full lg:ps-64">
      <div class="p-4 sm:p-6  h-dvh ">
       <NuxtPage/>
      </div>
    </div>

    <!-- End Content -->
  </div>
</template>
