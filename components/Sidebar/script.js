const sideBarItems = [
  // الصفحة الرئيسية
  {
    key: "0-0",
    label: "الصفحة الرئيسية",
    data: "",
    coustomClass: "",
    icon: "solar:home-2-bold",
    toPage: "dashboards/sub-admin",
    children: [],
  },

  // المندوبين
  {
    key: "0-1",
    label: "المندوبين",
    data: "",
    coustomClass: "",
    icon: "solar:user-bold",
    toPage: "/dashboards/sub-admin/delegates",
    children: [],
  },
  // السواق
  {
    key: "0-2",
    label: "السواق",
    data: "",
    coustomClass: "",
    icon: "fontisto:motorcycle",
    children: [
      // عرض
      {
        key: "0-2-0",
        label: "عرض",
        data: "",
        coustomClass: "",
        icon: "fluent-mdl2:view",
        toPage: "/dashboards/sub-admin/drivers/show",
      },
      // الرصيد
      {
        key: "0-2-1",
        label: "الرصيد",
        data: "",
        coustomClass: "",
        icon: "healthicons:money-bag-outline",
        toPage: "/dashboards/sub-admin/drivers/credit",
      },
      // الطلبات الخارجية
      {
        key: "0-2-2",
        label: "الطلبات الخارجية",
        data: "",
        coustomClass: "",
        icon: "lineicons:route-1",
        toPage: "/dashboards/sub-admin/drivers/out_orders",
      },
    ],
  },
  // الزبائن
  {
    key: "0-3",
    label: "الزبائن",
    data: "",
    coustomClass: "",
    icon: "tabler:friends",
    children: [
      // عرض الزبائن
      {
        key: "0-3-0",
        label: "عرض الزبائن",
        data: "",
        coustomClass: "",
        icon: "fluent-mdl2:view",
        toPage: "/dashboards/sub-admin/customers/show",
      },
      // نسيان كلمة المرور
      {
        key: "0-3-1",
        label: "نسيان كلمة المرور",
        data: "",
        coustomClass: "",
        icon: "vaadin:password",
        toPage: "/dashboards/sub-admin/customers/PasswordOtp",
      },
      // رموز التسجيل
      {
        key: "0-3-2",
        label: "رموز التسجيل",
        data: "",
        coustomClass: "",
        icon: "mdi:user-key-outline",
        toPage: "/dashboards/sub-admin/customers/otp",
      },
    ],
  },
  // الاشعارات
  {
    key: "0-4",
    label: "الاشعارات",
    data: "",
    coustomClass: "",
    icon: "solar:bell-bold",
    toPage: "/dashboards/sub-admin/notifications",
    children: [],
  },
  // الطلبات
  {
    key: "0-5",
    label: "الطلبات",
    data: "",
    coustomClass: "",
    icon: "streamline:shopping-cart-2-solid",
    toPage: "/dashboards/sub-admin/orders",
    children: [],
  },
  // خارطة الطلبات
  {
    key: "0-6",
    label: "خارطة الطلبات",
    data: "",
    coustomClass: "",
    icon: "lets-icons:map-fill",
    toPage: "/dashboards/sub-admin/ordersMap",
    children: [],
  },
  // طلبات التجار
  {
    key: "0-7",
    label: "طلبات التجار",
    data: "",
    coustomClass: "",
    icon: "fa-solid:user-clock",
    children: [
      // تم التجهيز
      {
        key: "0-7-0",
        label: "تم التجهيز",
        data: "",
        coustomClass: "text-teal-500",
        icon: "lucide:package-check",
        toPage: "/dashboards/sub-admin/tradersRequests/done",
      },
      // الكل
      {
        key: "0-7-1",
        label: "الكل",
        data: "",
        coustomClass: "",
        icon: "tabler:packages",
        toPage: "/dashboards/sub-admin/tradersRequests/all",
      },
      // الطلبات الفرعية
      {
        key: "0-7-2",
        label: "الطلبات الفرعية",
        data: "",
        coustomClass: "",
        icon: "tabler:sitemap",
        toPage: "/dashboards/sub-admin/tradersRequests/subOrders",
      },
      // حسابات المتاجر
      {
        key: "0-7-3",
        label: "حسابات المتاجر",
        data: "",
        coustomClass: "",
        icon: "mdi:store-cog-outline",
        toPage: "/dashboards/sub-admin/tradersRequests/accounting",
      },
    ],
  },
  // المتاجر
  {
    key: "0-8",
    label: "المتاجر",
    data: "",
    coustomClass: "",
    icon: "bxs:store",
    children: [
      // عرض
      {
        key: "0-8-0",
        label: "عرض",
        data: "",
        coustomClass: "",
        icon: "fluent-mdl2:view",
        toPage: "/dashboards/sub-admin/stores/view",
      },
      // الموقوفة
      {
        key: "0-8-1",
        label: "الموقوفة",
        data: "",
        coustomClass: "text-red-500",
        icon: "fa:hand-stop-o",
        toPage: "/dashboards/sub-admin/stores/disabled",
      },
    ],
  },
  // التجار
  {
    key: "0-9",
    label: "التجار",
    data: "",
    coustomClass: "",
    icon: "heroicons:users-20-solid",
    toPage: "/dashboards/sub-admin/merchants",
    children: [],
  },
  // الاعلانات
  {
    key: "0-10",
    label: "الاعلانات",
    data: "",
    coustomClass: "",
    icon: "icon-park-solid:ad",
    toPage: "/dashboards/sub-admin/ads",
    children: [],
  },
  // المنتجات
  {
    key: "0-11",
    label: "المنتجات",
    data: "",
    coustomClass: "",
    icon: "fa-solid:boxes",
    toPage: "/dashboards/sub-admin/items",
    children: [],
  },
  // المنتجات والتصنيفات
  {
    key: "0-12",
    label: "المنتجات والتصنيفات",
    data: "",
    coustomClass: "",
    icon: "iconamoon:category-fill",
    toPage: "/dashboards/sub-admin/items_category",
    children: [],
  },
  // الشكاوي
  {
    key: "0-13",
    label: "الشكاوي",
    data: "",
    coustomClass: "",
    icon: "tabler:help-triangle-filled",
    toPage: "/dashboards/sub-admin/complain",
    children: [],
  },
  // المقترحات
  {
    key: "0-14",
    label: "المقترحات",
    data: "",
    coustomClass: "",
    icon: "fa6-solid:heart-circle-exclamation",
    toPage: "/dashboards/sub-admin/suggestion",
    children: [],
  },
];

 

export default sideBarItems;
