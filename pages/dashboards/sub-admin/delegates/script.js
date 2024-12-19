import { reactive } from "vue";

const tableiformation = {
  title: "المندوبين",
  describtion: "اضافة مندوب , تعديل والمزيد ....",
  buttonHeader: {
    title: "اضافة",
    iconName: "healthicons:truck-driver",
  },
  pages: {
    length: 6,
    now: 2,
  },
};
const tableItemsHeader = [
  { id: 0, label: "#", type: "id" },
  { id: 1, label: "الاسم", type: "name" },
  { id: 2, label: "السكن", type: "address" },
  { id: 3, label: "الرقم", type: "phone" },
  { id: 4, label: "الجنس", type: "gender" },
  { id: 5, label: "عدد المنتجات", type: "products" },
  { id: 6, label: "العمليات", type: "actions" },
];
const tableContentItems = reactive([
  {
    id: 1,
    name: "أحمد علي محمد", 
    address: "بغداد - الكرادة", 
    phone: "07844320123",
    gender: "ذكر",
    products: "50 - 100 - 200",
    actions: ["delete", "edit"],
  },
  {
    id: 2,
    name: "مريم سعيد حسين",
    phone: "07893546123",
    code: "@@123456",
    gender: "انثى",
    address: "البصرة - الشعيبة",
    shop: "سوبر ماركت الشعيبة",
    products: "30 - 60 - 120",
    actions: ["delete", "edit"],
  },
  {
    id: 3,
    name: "سامي عبد الله",
    phone: "07852345678",
    code: "123456789",
    gender: "ذكر",
    address: "النجف - حي الأمل",
    shop: "متجر المدى",
    products: "100 - 200 - 500",
    actions: ["delete", "edit"],
  },
  {
    id: 4,
    name: "نادية كريم محمد",
    phone: "07872654123",
    code: "987654321",
    gender: "انثى",
    address: "الموصل - حي العامل",
    shop: "ميني ماركت الموصل",
    products: "40 - 80 - 160",
    actions: ["delete", "edit"],
  },
  {
    id: 5,
    name: "محمد محمود يوسف",
    phone: "07890325814",
    code: "11223344",
    gender: "ذكر",
    address: "كربلاء - شارع العباس",
    shop: "سوق المدينة",
    products: "25 - 50 - 100",
    actions: ["delete", "edit"],
  },
  {
    id: 6,
    name: "هدى ناصر جاسم",
    phone: "07833123456",
    code: "22334455",
    gender: "انثى",
    address: "ديالى - الخالص",
    shop: "سوق الخالص",
    products: "60 - 120 - 240",
    actions: ["delete", "edit"],
  },
  {
    id: 6,
    name: "هدى ناصر جاسم",
    phone: "07833123456",
    code: "22334455",
    gender: "انثى",
    address: "ديالى - الخالص",
    shop: "سوق الخالص",
    products: "60 - 120 - 240",
    actions: ["delete", "edit"],
  },
]);

const modalEditValues = reactive([
  {
    type: "",
    lable: "id",
    value: 0,
  },
  {
    type: "input",
    lable: "الاسم",
    value: "-",
  },
  {
    type: "input",
    lable: "السكن",
    value: "-",
  },
  {
    type: "input",
    lable: "الرقم",
    value: 0,
  },
  {
    type: "Radio",
    lable: "الجنس",
    value: 1,
  },
]);

const modalRemoveValues = reactive([
  {
    type: "",
    lable: "id",
    value: 0,
  },
  {
    type: "input",
    lable: "الاسم",
    value: "-",
  },
  {
    type: "input",
    lable: "السكن",
    value: "-",
  },
  {
    type: "input",
    lable: "الرقم",
    value: 0,
  },
  {
    type: "Radio",
    lable: "الجنس",
    value: 1,
  },
]);

export { tableItemsHeader, tableContentItems, tableiformation, modalEditValues, modalRemoveValues };
