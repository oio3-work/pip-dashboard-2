const addModal = ref(null);
let fieldsAddConfig = [
  { name: "id", label: "id", type: "text", visble: false },
  { name: "name", label: "الاسم", type: "text", visble: true },
  { name: "address", label: "السكن", type: "text", visble: true },
  { name: "phone", label: "الرقم", type: "number", visble: true },
  { name: "gender", label: "الجنس", type: "radio", visble: true },
];
let isLoadingAdd = ref(false);