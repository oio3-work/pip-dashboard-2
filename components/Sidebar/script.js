

import { reactive } from "vue";
const sideBarItems = reactive ([
    {
        key: "0-0",
        label: "الرئيسية",
        data: " ",
        coustomClass: "",
        icon: "solar:home-2-bold",
        children: [
    
        ]
    },
    {
        key: "0-0",
        label: "الطلبات",
        data: "إدارة الطلبات",
        coustomClass: "",
        icon: "solar:box-bold",
        children: [
            {
                key: "0-0-0",
                label: "جميع الطلبات",
                coustomClass: "",
                icon: "streamline:shopping-cart-subtract",
                data: "عرض جميع الطلبات"
            },
            {
                key: "0-0-1",
                label: "الطلبات الحالية",
                coustomClass: "",
                icon: "svg-spinners:clock",
                data: "الطلبات قيد التنفيذ"
            },
            {
                key: "0-0-2",
                label: "الطلبات المكتملة",
                coustomClass: "text-green-400",
                icon: "lucide:package-check",
                data: "الطلبات التي تم تسليمها"
            },
            {
                key: "0-0-3",
                label: "اضافة طلب",
                coustomClass: "",
                icon: "lucide:package-plus",
                data: "مخصص لاضافة طلبات"
            },
            {
                key: "0-0-4",
                label: "حذف طلب",
                coustomClass: "text-red-400",
                icon: "lucide:package-x",
                data: "مخصص لحذف طلبات"
            },
            {
                key: "0-0-4",
                label: "بحث عن طلب",
                coustomClass: "",
                icon: "lucide:package-search",
                data: "مخصص للبحث عن طلب معين"
            }
        ]
    },
    {
        key: "0-1",
        label: "المستخدمون",
        data: "إدارة المستخدمين",
        coustomClass: "",
        icon: "solar:users-group-rounded-bold-duotone",
        children: [
            {
                key: "0-1-0",
                label: "العملاء",
                coustomClass: "",
                icon: "carbon:customer",
                data: "عرض بيانات العملاء"
            },
            {
                key: "0-1-1",
                label: "السائقون",
                coustomClass: "",
                icon: "streamline:transfer-motorcycle",
                data: "إدارة السائقين"
            }
        ]
    },
    {
        key: "0-2",
        label: "التقارير",
        data: "التقارير والإحصائيات",
        coustomClass: "",
        icon: "solar:chart-bold-duotone",
        children: [
            {
                key: "0-2-0",
                label: "التقرير اليومي",
                coustomClass: "",
                icon: "solar:calendar-search-linear",
                data: "عرض التقارير اليومية"
            },
            {
                key: "0-2-1",
                label: "التقرير الشهري",
                coustomClass: "",
                icon: "et:calendar",
                data: "عرض التقارير الشهرية"
            }
        ]
    },
    {
        key: "0-3",
        label: "الإعدادات",
        data: "إعدادات النظام",
        icon: "heroicons:cog-solid",
        coustomClass: "",
        data: "عرض التقارير الشهرية",
        children: [
            {
                key: "0-3-0",
                label: "إعدادات الحساب",
                coustomClass: "",
                icon: "mdi:account-settings-outline",
                data: "إعدادات الحساب الشخصي"
            },
            {
                key: "0-3-1",
                label: "إعدادات الدفع",
                coustomClass: "",
                icon: "emojione-monotone:credit-card",
                data: "إعدادات طرق الدفع"
            },
            {
                key: "0-3-2",
                label: "إعدادات النظام",
                coustomClass: "",
                icon: "gravity-ui:sliders-vertical",
                data: "إعدادات النظام العامة"
            }
        ]
    },
    {
        key: "0-4",
        label: "الدعم",
        data: "دعم العملاء والمساعدة",
        coustomClass: "",
        icon: "fluent:person-support-20-filled",
        children: []
    }
]);


 
export default sideBarItems;