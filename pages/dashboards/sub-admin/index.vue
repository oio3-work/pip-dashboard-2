<template>
  <div>
    <button
      @click="openModal"
      class="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
    >
      Open Modal
    </button>

    <!-- Modal Component -->
    <PrelineModal
      :isVisible="isModalVisible"
      :title="modalTitle"
      id="exampleModal"
      @close="closeModal"
      @confirm="handleConfirm"
    >
      <p class="text-gray-700">This is dynamic content inside the modal!</p>
    </PrelineModal>
  </div>
</template>

<script>
 

export default {
 
  data() {
    return {
      isModalVisible: false,
      modalTitle: "Dynamic Modal Example",
    };
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    handleConfirm() {
      alert("Confirmed!");
      this.closeModal();
    },
  },
};
</script>
