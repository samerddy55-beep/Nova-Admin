/*
 * NOVA ADMIN
 * Main Application
 */

const NovaApp = {

    currentPage: "dashboard",

    pages: {

        dashboard: {
            title: "لوحة التحكم",
            description: "مركز إدارة منصة Nova"
        },

        users: {
            title: "المستخدمون",
            description: "إدارة حسابات مستخدمي Nova"
        },

        subscriptions: {
            title: "الاشتراكات",
            description: "إدارة الخطط والاشتراكات"
        },

        ai: {
            title: "الذكاء الاصطناعي",
            description: "إدارة النماذج ومحرك Nova AI"
        },

        security: {
            title: "الأمان",
            description: "مراقبة وحماية المنصة"
        },

        quality: {
            title: "الجودة",
            description: "مراقبة جودة النظام والمخرجات"
        },

        pages: {
            title: "الصفحات",
            description: "إدارة صفحات منصة Nova"
        },

        api: {
            title: "Nova API",
            description: "إدارة واجهة Nova البرمجية"
        },

        logs: {
            title: "السجلات",
            description: "سجلات النظام والإدارة"
        },

        settings: {
            title: "الإعدادات",
            description: "إعدادات منصة Nova"
        }

    },


    init() {

        this.bindNavigation();

        this.bindMenu();

        this.bindLogout();

        this.loadPage("dashboard");

    },


    bindNavigation() {

        document.querySelectorAll(".nav-item").forEach(button => {

            button.addEventListener("click", () => {

                const page = button.dataset.page;

                this.loadPage(page);

                document.querySelector(".sidebar")?.classList.remove("open");

            });

        });

    },


    bindMenu() {

        const menu = document.getElementById("menuButton");

        if (!menu) return;

        menu.addEventListener("click", () => {

            document.querySelector(".sidebar")
                ?.classList.toggle("open");

        });

    },


    bindLogout() {

        const button = document.getElementById("logoutButton");

        if (!button) return;

        button.addEventListener("click", () => {

            if (window.NovaAuth) {

                NovaAuth.logout();

            } else {

                this.toast("تم تسجيل الخروج");

            }

        });

    },


    loadPage(page) {

        if (!this.pages[page]) {

            page = "dashboard";

        }

        this.currentPage = page;

        const meta = this.pages[page];

        document.getElementById("pageTitle").textContent =
            meta.title;

        document.getElementById("pageDescription").textContent =
            meta.description;


        document.querySelectorAll(".nav-item").forEach(item => {

            item.classList.toggle(
                "active",
                item.dataset.page === page
            );

        });


        const content = document.getElementById("content");

        /*
         * admin.js سيحتوي على محتوى الأقسام.
         */

        if (window.NovaAdmin &&
            typeof NovaAdmin.render === "function") {

            content.innerHTML =
                NovaAdmin.render(page);

        } else {

            content.innerHTML = `
                <div class="page">
                    <div class="card">
                        <h2>${meta.title}</h2>
                        <p style="color:var(--muted);margin-top:10px">
                            جاري تحميل وحدة الإدارة...
                        </p>
                    </div>
                </div>
            `;

        }

    },


    toast(message) {

        const toast = document.getElementById("toast");

        if (!toast) return;

        toast.textContent = message;

        toast.classList.add("show");

        setTimeout(() => {

            toast.classList.remove("show");

        }, 2500);

    }

};


document.addEventListener("DOMContentLoaded", () => {

    NovaApp.init();

});
