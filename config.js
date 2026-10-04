/*
 * NOVA ADMIN CONFIGURATION
 *
 * هذا الملف لا يحتوي أسرارًا.
 * عنوان الـBackend سنضعه عندما ننشئ Nova Backend.
 */

const NOVA_CONFIG = {

    appName: "Nova Admin",

    version: "1.0.0",

    environment: "development",

    /*
     * سيصبح مثل:
     *
     * https://api.nova.example.com
     *
     * عندما ننشئ الـBackend.
     */

    API_URL: "",

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
