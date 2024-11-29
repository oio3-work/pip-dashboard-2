<template>
  <div dir="rtl" class="bg-gray-50 dark:bg-neutral-900">
    <HeaderTemplate />
    <BreadcrumbTemplate />
    <SidebarTemplate />

    <!-- Content -->
    <div class="h-dvh w-full lg:ps-64">
      <div class="p-4 sm:p-6 ">
       <NuxtPage/>
      </div>
    </div>

    <!-- End Content -->
  </div>
</template>
