/*
 * NOVA ADMIN CONFIGURATION
 */

const NOVA_CONFIG = {

    appName: "Nova Admin",

    version: "1.0.0",

    environment: "development",

    /*
     * Nova Backend
     *
     * محليًا:
     * http://127.0.0.1:8000
     *
     * لاحقًا عند نشر Backend:
     * https://api.nova.example.com
     */

    API_URL: "http://127.0.0.1:8000",

    /*
     * جميع مسارات الـAPI تبدأ من هنا
     */

    API_PREFIX: "/api",

    features: {

        users: true,

        subscriptions: true,

        billing: true,

        aiModels: true,

        aiEngine: true,

        security: true,

        quality: true,

        pages: true,

        apiManagement: true,

        logs: true,

        roles: true,

        settings: true

    }

};
