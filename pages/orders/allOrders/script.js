import { reactive } from "vue";
const tableItemsHeader =[
    { id: 1, label: "الاسم" },
    { id: 2, label: "السكن" },
    { id: 3, label: "الرقم" },
    { id: 4, label: "الجنس" },
    { id: 5, label: "عدد المنتجات" },
    { id: 6, label: "العمليات" }
  ]
  const tableContentItems = [
    {
      id: 1,
      name: "أحمد علي محمد",
      phone: "07844320123",
      code: "20012001",
      gender: "ذكر",
      address: "بغداد - الكرادة",
      shop: "سوق الذهب",
      products: "50 - 100 - 200",
    },
    {
      id: 2,
      name: "مريم سعيد حسين",
      phone: "07893546123",
      code: "@@123456",
      gender: "أنثى",
      address: "البصرة - الشعيبة",
      shop: "سوبر ماركت الشعيبة",
      products: "30 - 60 - 120",
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
    },
    {
      id: 4,
      name: "نادية كريم محمد",
      phone: "07872654123",
      code: "987654321",
      gender: "أنثى",
      address: "الموصل - حي العامل",
      shop: "ميني ماركت الموصل",
      products: "40 - 80 - 160",
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
    }
  ];
  

export { tableItemsHeader  ,tableContentItems } 
