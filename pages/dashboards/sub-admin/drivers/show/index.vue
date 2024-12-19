<template>
    <div>
      <!-- زر فتح المودال -->
      <button
        type="button"
        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="modal-example"
        data-hs-overlay="#modal-example"
      >
        Open Modal
      </button>
  
      <!-- استخدام المكون -->
      <ModalsModalAdd
        modalId="modal-example"
        title="Vertically Centered Modal"
        content="This is a vertically centered modal content."
      />
    </div>
  </template>
  
  
 