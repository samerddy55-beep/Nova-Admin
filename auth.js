/*
 * NOVA ADMIN AUTH
 *
 * واجهة المصادقة الأولية.
 * المصادقة الحقيقية ستكون في Nova Backend.
 */

const NovaAuth = {

    sessionKey: "nova_admin_session",

    isLoggedIn() {

        return sessionStorage.getItem(this.sessionKey) === "active";

    },


    login() {

        /*
         * مؤقتًا للسماح بتشغيل لوحة الإدارة.
         * لن نضع كلمات مرور حقيقية هنا.
         */

        sessionStorage.setItem(this.sessionKey, "active");

        return true;

    },


    logout() {

        sessionStorage.removeItem(this.sessionKey);

        if (window.NovaApp) {

            NovaApp.toast("تم إنهاء جلسة الإدارة");

        }

        setTimeout(() => {

            location.reload();

        }, 500);

    },


    requireAuth() {

        /*
         * في النسخة الحالية لا نفرض تسجيل الدخول
         * حتى تستطيع اختبار اللوحة مباشرة.
         *
         * بعد بناء Backend سنحولها إلى:
         *
         * Login → Backend → Session → Permissions
         */

        return true;

    }

};
