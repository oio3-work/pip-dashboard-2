const app = Vue.createApp({
    data() {
        const message = "مرحباً بكم في Vue 3!";
        const sideBarItems = [
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
        ];


        const drivers = [
            {
                name: "أحمد علي",
                phone: "0501234567",
                address: "الرياض, حي العليا",
                dailyRequests: 5,
                weeklyRequests: 30,
                monthlyRequests: 120,
                status: "online"
            },
            {
                name: "محمد حسن",
                phone: "0502345678",
                address: "جدة, حي النزهة",
                dailyRequests: 4,
                weeklyRequests: 25,
                monthlyRequests: 100,
                status: "ofline"
            },
            {
                name: "يوسف عبدالله",
                phone: "0503456789",
                address: "الدمام, حي الفاخرية",
                dailyRequests: 7,
                weeklyRequests: 40,
                monthlyRequests: 160,
                status: "online"
            },
            {
                name: "خالد عبدالرحمن",
                phone: "0504567890",
                address: "مكة, حي الشوقية",
                dailyRequests: 6,
                weeklyRequests: 35,
                monthlyRequests: 140,
                status: "ofline"
            },
            {
                name: "سعيد فهد",
                phone: "0505678901",
                address: "الخبر, حي الأمل",
                dailyRequests: 3,
                weeklyRequests: 18,
                monthlyRequests: 70,
                status: "online"
            },
            {
                name: "عبدالله عادل",
                phone: "0506789012",
                address: "الرياض, حي الملك عبدالله",
                dailyRequests: 8,
                weeklyRequests: 50,
                monthlyRequests: 200,
                status: "ofline"
            },
            {
                name: "راشد محمد",
                phone: "0507890123",
                address: "الدمام, حي الجوهرة",
                dailyRequests: 4,
                weeklyRequests: 22,
                monthlyRequests: 90,
                status: "online"
            },
            {
                name: "فهد سعيد",
                phone: "0508901234",
                address: "جدة, حي الجامعة",
                dailyRequests: 5,
                weeklyRequests: 28,
                monthlyRequests: 110,
                status: "ofline"
            },
            {
                name: "إبراهيم سعيد",
                phone: "0509012345",
                address: "مكة, حي العزيزية",
                dailyRequests: 6,
                weeklyRequests: 36,
                monthlyRequests: 150,
                status: "online"
            },
            {
                name: "عادل فؤاد",
                phone: "0501122334",
                address: "الرياض, حي النزهة",
                dailyRequests: 7,
                weeklyRequests: 42,
                monthlyRequests: 160,
                status: "ofline"
            },
            {
                name: "محمود جاسم",
                phone: "0502233445",
                address: "الدمام, حي التعاون",
                dailyRequests: 3,
                weeklyRequests: 20,
                monthlyRequests: 80,
                status: "online"
            },
            {
                name: "سامي سليمان",
                phone: "0503344556",
                address: "جدة, حي التوفيق",
                dailyRequests: 8,
                weeklyRequests: 45,
                monthlyRequests: 180,
                status: "ofline"
            },
            {
                name: "نادر علي",
                phone: "0504455667",
                address: "الخبر, حي البحر",
                dailyRequests: 6,
                weeklyRequests: 34,
                monthlyRequests: 130,
                status: "online"
            },
            {
                name: "بدر حسين",
                phone: "0505566778",
                address: "مكة, حي الهجرة",
                dailyRequests: 4,
                weeklyRequests: 24,
                monthlyRequests: 95,
                status: "ofline"
            },
            {
                name: "قاسم عبد الله",
                phone: "0506677889",
                address: "الرياض, حي المرسلات",
                dailyRequests: 7,
                weeklyRequests: 41,
                monthlyRequests: 160,
                status: "online"
            },
            {
                name: "صالح يوسف",
                phone: "0507788990",
                address: "الدمام, حي الراكة",
                dailyRequests: 5,
                weeklyRequests: 30,
                monthlyRequests: 120,
                status: "ofline"
            },
            {
                name: "طلال وليد",
                phone: "0508899001",
                address: "جدة, حي البساتين",
                dailyRequests: 6,
                weeklyRequests: 36,
                monthlyRequests: 140,
                status: "online"
            },
            {
                name: "رائد حسن",
                phone: "0509900112",
                address: "الرياض, حي المصيف",
                dailyRequests: 8,
                weeklyRequests: 48,
                monthlyRequests: 190,
                status: "ofline"
            },
            {
                name: "أسامة رفيق",
                phone: "0501122335",
                address: "الدمام, حي المنار",
                dailyRequests: 7,
                weeklyRequests: 39,
                monthlyRequests: 150,
                status: "online"
            }
        ];
        return {
            message,
            sideBarItems,
            drivers
        };
    },
    methods: {
        changeMessage() {
            // تغيير القيمة باستخدام const
            this.message = "تم تغيير الرسالة!";
        }
    }
});
app.mount("#app");
