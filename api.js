const NovaAPI = {
    baseURL:
        typeof NOVA_CONFIG !== "undefined"
            ? NOVA_CONFIG.API_URL
            : "",

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
        const timeout = setTimeout(() => controller.abort(), 15000);

        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
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
                throw new Error(
                    data?.message || `HTTP ${response.status}`
                );
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
                error: error.message
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
