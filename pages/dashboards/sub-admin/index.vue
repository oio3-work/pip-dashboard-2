<template>
  <div>
    <CustomTable :tableHeaderInformation="tableHeaderInformation" :headers="headers" :actions="tableActions" :rows="tableRows" />
    <button id="buttonModalAdd" type="button" class="hidden" aria-haspopup="dialog" aria-expanded="false" aria-controls="modal-add-delegates" data-hs-overlay="#modal-add-delegates">Open Modal</button>
    <button id="buttonModalEdit" type="button" class="hidden" aria-haspopup="dialog" aria-expanded="false" aria-controls="modal-edit-delegates" data-hs-overlay="#modal-edit-delegates">Open Modal</button>

    <!-- استخدام المكون -->
    <ModalsModalAdd modalId="modal-add-delegates" title="اضافة مندوب" content="ggg." :fields="fieldsAddConfig" @submit="handleSubmit" :loading="isLoadingAdd" />
  </div>
</template>

<script setup>
import { reactive } from "vue";
let tableHeaderInformation = {
  titleTable: "المندوبين",
  describtion: "اضافة مندوب , تعديل والمزيد ....",
  buttonHeader: {
    lable: "اضافة",
    iconName: "healthicons:truck-driver",
    func: () => {
      buttonModalAdd.click();
    },
  },
};

let fieldsAddConfig = [
  { name: "id", label: "id", type: "text", visble: false },
  { name: "name", label: "الاسم", type: "text", visble: true },
  { name: "address", label: "السكن", type: "text", visble: true },
  { name: "phone", label: "الرقم", type: "text", visble: true },
  { name: "gender", label: "الجنس", type: "radio", visble: true },
];
let isLoadingAdd = ref(false);
let headers = ["#", "الاسم", "السكن", "الرقم", "الجنس", "عدد المنتجات"];
let tableRows = [
  [1, "أحمد علي محمد", "بغداد - الكرادة", "07844320123", "ذكر", "50 - 100 - 200"],
  [2, "أحمد علي محمد", "بغداد - الكرادة", "07844320123", "ذكر", "56 - 666 - 598"],
  [3, "أحمد علي محمد", "بغداد - الكرادة", "07844320123", "ذكر", "24 - 143 - 567"],
];

const fieldsEditConfig = ref([
  { name: "id", label: "id", type: "text", value: "", visble: false },
  { name: "name", label: "الاسم", type: "text", value: "", visble: true },
  { name: "address", label: "السكن", type: "text", value: "", visble: true },
  { name: "phone", label: "الرقم", type: "text", value: "", visble: true },
  { name: "gender", label: "الجنس", type: "radio", value: "", visble: true },
]);
let tableActions = [
  {
    label: "تعديل",
    icon: "lucide:edit-2",
    color: "blue",
    func: (row) => {
      fieldsEditConfig.value[0].value = row[0];
      fieldsEditConfig.value[1].value = row[1];
      fieldsEditConfig.value[2].value = row[2];
      fieldsEditConfig.value[3].value = row[3];
      fieldsEditConfig.value[4].value = row[4];

      buttonModalEdit.click();

      // modalFields.value = [
      //   { name: "id", label: "id", type: "text", value: row[0], visble: false },
      //   { name: "name", label: "الاسم", type: "text", value: row[1], visble: true },
      //   { name: "address", label: "السكن", type: "text", value: row[2], visble: true },
      //   { name: "phone", label: "الرقم", type: "text", value: row[3], visble: true },
      //   { name: "gender", label: "الجنس", type: "radio", value: row[4], visble: true },
      // ];
      // showModal.value = true;
    },
  },
  {
    label: "حذف",
    icon: "pajamas:remove",
    color: "red",
    func: (row) => {
      alert("حذف: " + JSON.stringify(row));
    },
  },
];

const handleSubmit = (data) => {
  // console.log("Received data:", data);
  isLoadingAdd.value = true;

  setTimeout(() => {
    isLoadingAdd.value = false;
  }, 1000);
};

 
</script>
