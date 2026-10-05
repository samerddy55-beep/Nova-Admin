const NovaAPI = {

    baseURL:
        typeof NOVA_CONFIG !== "undefined"
            ? NOVA_CONFIG.API_URL
            : "",

    apiPrefix:
        typeof NOVA_CONFIG !== "undefined" &&
        NOVA_CONFIG.API_PREFIX
            ? NOVA_CONFIG.API_PREFIX
            : "/api",

    async request(endpoint, options = {}) {

        if (!this.baseURL) {
            console.info("[Nova API] Backend غير متصل:", endpoint);

            return {
                success: false,
                offline: true,
                endpoint,
                data: null
            };
        }

        const controller = new AbortController();

        const timeout = setTimeout(
            () => controller.abort(),
            15000
        );

        try {

            const cleanEndpoint =
                endpoint.startsWith("/")
                    ? endpoint
                    : `/${endpoint}`;

            const url =
                `${this.baseURL}${this.apiPrefix}${cleanEndpoint}`;

            const response = await fetch(url, {

                ...options,

                headers: {
                    "Content-Type": "application/json",
                    ...(options.headers || {})
                },

                credentials: "include",

                signal: controller.signal
            });

            clearTimeout(timeout);

            let data = null;

            try {
                data = await response.json();
            } catch {
                data = null;
            }

            if (!response.ok) {

                const message =
                    data?.detail ||
                    data?.message ||
                    `HTTP ${response.status}`;

                throw new Error(message);
            }

            return {
                success: true,
                data
            };

        } catch (error) {

            clearTimeout(timeout);

            console.error("[Nova API]", error);

            return {
                success: false,
                error: error.message,
                endpoint
            };
        }
    },


    get(endpoint) {

        return this.request(endpoint, {
            method: "GET"
        });

    },


    post(endpoint, data) {

        return this.request(endpoint, {

            method: "POST",

            body: JSON.stringify(data)

        });

    },


    put(endpoint, data) {

        return this.request(endpoint, {

            method: "PUT",

            body: JSON.stringify(data)

        });

    },


    delete(endpoint) {

        return this.request(endpoint, {

            method: "DELETE"

        });

    }

};
