const NovaAdmin = {

    render(page) {

        const pages = {
            dashboard: this.dashboard,
            users: this.users,
            subscriptions: this.subscriptions,
            ai: this.ai,
            security: this.security,
            quality: this.quality,
            pages: this.pages,
            api: this.api,
            logs: this.logs,
            settings: this.settings
        };

        if (pages[page]) {
            return pages[page].call(this);
        }

        return this.notFound();
    },

    dashboard() {

        return `
        <div class="page">

            <div class="stats-grid">

                ${this.stat(
                    "المستخدمون",
                    "1,284",
                    "+12.4%",
                    "زيادة هذا الشهر"
                )}

                ${this.stat(
                    "الاشتراكات",
                    "347",
                    "+8.2%",
                    "اشتراكات نشطة"
                )}

                ${this.stat(
                    "طلبات AI",
                    "24,891",
                    "+18.7%",
                    "طلب هذا الشهر"
                )}

                ${this.stat(
                    "حالة النظام",
                    "99.9%",
                    "مستقر",
                    "جاهزية المنصة"
                )}

            </div>

            <div class="section-grid">

                ${this.section(
                    "آخر المستخدمين",
                    `
                    <div class="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>المستخدم</th>
                                    <th>الخطة</th>
                                    <th>الحالة</th>
                                    <th>التاريخ</th>
                                </tr>
                            </thead>

                            <tbody>
                                ${this.userRow(
                                    "أحمد محمد",
                                    "Pro",
                                    "نشط",
                                    "اليوم"
                                )}

                                ${this.userRow(
                                    "سارة علي",
                                    "Basic",
                                    "نشط",
                                    "اليوم"
                                )}

                                ${this.userRow(
                                    "محمد خالد",
                                    "Free",
                                    "نشط",
                                    "أمس"
                                )}

                                ${this.userRow(
                                    "نور أحمد",
                                    "Pro",
                                    "نشط",
                                    "أمس"
                                )}
                            </tbody>
                        </table>
                    </div>
                    `
                )}

                ${this.section(
                    "حالة الأنظمة",
                    `
                    <div class="system-list">

                        ${this.system(
                            "Nova Web",
                            "Online",
                            "الواجهة الرئيسية"
                        )}

                        ${this.system(
                            "Nova API",
                            "Online",
                            "واجهة البرمجة"
                        )}

                        ${this.system(
                            "Database",
                            "Online",
                            "قاعدة البيانات"
                        )}

                        ${this.system(
                            "AI Engine",
                            "Online",
                            "محرك الذكاء الاصطناعي"
                        )}

                        ${this.system(
                            "Security",
                            "Protected",
                            "نظام الحماية"
                        )}

                    </div>
                    `
                )}

            </div>

        </div>
        `;
    },

    users() {

        return `
        <div class="page">

            <div class="stats-grid">

                ${this.stat(
                    "إجمالي المستخدمين",
                    "1,284",
                    "+12.4%",
                    "إجمالي الحسابات"
                )}

                ${this.stat(
                    "نشط الآن",
                    "86",
                    "Online",
                    "مستخدمون متصلون"
                )}

                ${this.stat(
                    "جدد هذا الشهر",
                    "142",
                    "+9.1%",
                    "حسابات جديدة"
                )}

                ${this.stat(
                    "محظور",
                    "12",
                    "مراقبة",
                    "حسابات محظورة"
                )}

            </div>

            ${this.section(
                "إدارة المستخدمين",
                `
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>المستخدم</th>
                                <th>البريد</th>
                                <th>الخطة</th>
                                <th>الحالة</th>
                                <th>آخر نشاط</th>
                            </tr>
                        </thead>

                        <tbody>

                            ${this.userRow(
                                "أحمد محمد",
                                "Pro",
                                "نشط",
                                "الآن"
                            )}

                            ${this.userRow(
                                "سارة علي",
                                "Basic",
                                "نشط",
                                "منذ 5 دقائق"
                            )}

                            ${this.userRow(
                                "محمد خالد",
                                "Free",
                                "نشط",
                                "منذ 20 دقيقة"
                            )}

                            ${this.userRow(
                                "نور أحمد",
                                "Pro",
                                "نشط",
                                "منذ ساعة"
                            )}

                        </tbody>
                    </table>
                </div>
                `
            )}

        </div>
        `;
    },

    subscriptions() {

        return `
        <div class="page">

            <div class="stats-grid">

                ${this.stat(
                    "Free",
                    "937",
                    "72.9%",
                    "المستخدمون المجانيون"
                )}

                ${this.stat(
                    "Basic",
                    "184",
                    "14.3%",
                    "الخطة الأساسية"
                )}

                ${this.stat(
                    "Pro",
                    "121",
                    "9.4%",
                    "الخطة الاحترافية"
                )}

                ${this.stat(
                    "Business",
                    "42",
                    "3.3%",
                    "خطط الأعمال"
                )}

            </div>

            ${this.section(
                "الاشتراكات",
                `
                <div class="system-list">

                    ${this.system(
                        "Free Plan",
                        "Active",
                        "الخطة المجانية"
                    )}

                    ${this.system(
                        "Basic Plan",
                        "Active",
                        "الخطة الأساسية"
                    )}

                    ${this.system(
                        "Pro Plan",
                        "Active",
                        "الخطة الاحترافية"
                    )}

                    ${this.system(
                        "Business Plan",
                        "Active",
                        "خطة الشركات"
                    )}

                </div>
                `
            )}

        </div>
        `;
    },

    ai() {

        return `
        <div class="page">

            <div class="stats-grid">

                ${this.stat(
                    "AI Engine",
                    "ONLINE",
                    "جاهز",
                    "محرك الذكاء الاصطناعي"
                )}

                ${this.stat(
                    "Model",
                    "gpt-oss",
                    "Local",
                    "النموذج الحالي"
                )}

                ${this.stat(
                    "Requests",
                    "24,891",
                    "+18.7%",
                    "طلبات الذكاء الاصطناعي"
                )}

                ${this.stat(
                    "Avg Response",
                    "1.8s",
                    "Stable",
                    "متوسط الاستجابة"
                )}

            </div>

            ${this.section(
                "محرك Nova AI",
                `
                <div class="system-list">

                    ${this.system(
                        "AI Runtime",
                        "Online",
                        "بيئة تشغيل النموذج"
                    )}

                    ${this.system(
                        "gpt-oss",
                        "Loaded",
                        "النموذج المحلي"
                    )}

                    ${this.system(
                        "Processing",
                        "Active",
                        "معالجة الطلبات"
                    )}

                    ${this.system(
                        "Quality Check",
                        "Active",
                        "فحص جودة النتائج"
                    )}

                </div>
                `
            )}

        </div>
        `;
    },

    security() {

        return `
        <div class="page">

            <div class="stats-grid">

                ${this.stat(
                    "Security",
                    "ACTIVE",
                    "Protected",
                    "نظام الحماية"
                )}

                ${this.stat(
                    "Blocked",
                    "27",
                    "Requests",
                    "طلبات محظورة"
                )}

                ${this.stat(
                    "Warnings",
                    "4",
                    "Monitoring",
                    "تنبيهات"
                )}

                ${this.stat(
                    "Threats",
                    "0",
                    "Safe",
                    "تهديدات نشطة"
                )}

            </div>

            ${this.section(
                "أنظمة الحماية",
                `
                <div class="system-list">

                    ${this.system(
                        "Authentication",
                        "Active",
                        "نظام المصادقة"
                    )}

                    ${this.system(
                        "Rate Limiting",
                        "Active",
                        "حدود الطلبات"
                    )}

                    ${this.system(
                        "Input Validation",
                        "Active",
                        "التحقق من المدخلات"
                    )}

                    ${this.system(
                        "Audit System",
                        "Active",
                        "سجل العمليات"
                    )}

                </div>
                `
            )}

        </div>
        `;
    },

    quality() {

        return `
        <div class="page">

            <div class="stats-grid">

                ${this.stat(
                    "Quality Score",
                    "98.7%",
                    "Excellent",
                    "تقييم الجودة"
                )}

                ${this.stat(
                    "Successful",
                    "99.2%",
                    "Stable",
                    "طلبات ناجحة"
                )}

                ${this.stat(
                    "Errors",
                    "0.8%",
                    "Low",
                    "معدل الأخطاء"
                )}

                ${this.stat(
                    "Validation",
                    "99.8%",
                    "Active",
                    "التحقق من النتائج"
                )}

            </div>

            ${this.section(
                "مراقبة الجودة",
                `
                <div class="system-list">

                    ${this.system(
                        "AI Output",
                        "Excellent",
                        "جودة مخرجات الذكاء الاصطناعي"
                    )}

                    ${this.system(
                        "API Reliability",
                        "Stable",
                        "اعتمادية API"
                    )}

                    ${this.system(
                        "Response Quality",
                        "Excellent",
                        "جودة الاستجابات"
                    )}

                    ${this.system(
                        "Validation",
                        "Active",
                        "نظام التحقق"
                    )}

                </div>
                `
            )}

        </div>
        `;
    },

    pages() {

        return `
        <div class="page">

            ${this.section(
                "صفحات Nova",
                `
                <div class="system-list">

                    ${this.system(
                        "Home",
                        "Published",
                        "الصفحة الرئيسية"
                    )}

                    ${this.system(
                        "AI",
                        "Published",
                        "صفحة الذكاء الاصطناعي"
                    )}

                    ${this.system(
                        "Pricing",
                        "Published",
                        "صفحة الأسعار"
                    )}

                    ${this.system(
                        "Documentation",
                        "Draft",
                        "التوثيق"
                    )}

                    ${this.system(
                        "Contact",
                        "Published",
                        "صفحة التواصل"
                    )}

                </div>
                `
            )}

        </div>
        `;
    },

    api() {

        return `
        <div class="page">

            <div class="stats-grid">

                ${this.stat(
                    "API Status",
                    "ONLINE",
                    "Stable",
                    "حالة API"
                )}

                ${this.stat(
                    "Requests",
                    "18,294",
                    "+14.2%",
                    "الطلبات"
                )}

                ${this.stat(
                    "Errors",
                    "0.4%",
                    "Low",
                    "الأخطاء"
                )}

                ${this.stat(
                    "Rate Limit",
                    "Active",
                    "Protected",
                    "حماية الطلبات"
                )}

            </div>

            ${this.section(
                "Nova API",
                `
                <div class="system-list">

                    ${this.system(
                        "API Gateway",
                        "Online",
                        "بوابة API"
                    )}

                    ${this.system(
                        "Authentication",
                        "Active",
                        "مصادقة API"
                    )}

                    ${this.system(
                        "Rate Limiter",
                        "Active",
                        "حدود الطلبات"
                    )}

                    ${this.system(
                        "Monitoring",
                        "Active",
                        "مراقبة API"
                    )}

                </div>
                `
            )}

        </div>
        `;
    },

    logs() {

        return `
        <div class="page">

            ${this.section(
                "آخر السجلات",
                `
                <div class="table-wrap">

                    <table>

                        <thead>
                            <tr>
                                <th>النوع</th>
                                <th>العملية</th>
                                <th>الحالة</th>
                                <th>الوقت</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>System</td>
                                <td>Nova API Started</td>
                                <td>
                                    <span class="badge success">
                                        Success
                                    </span>
                                </td>
                                <td>منذ دقيقة</td>
                            </tr>

                            <tr>
                                <td>Security</td>
                                <td>Login Verified</td>
                                <td>
                                    <span class="badge success">
                                        Success
                                    </span>
                                </td>
                                <td>منذ 4 دقائق</td>
                            </tr>

                            <tr>
                                <td>System</td>
                                <td>AI Request</td>
                                <td>
                                    <span class="badge success">
                                        Success
                                    </span>
                                </td>
                                <td>منذ 7 دقائق</td>
                            </tr>

                            <tr>
                                <td>Security</td>
                                <td>Request Blocked</td>
                                <td>
                                    <span class="badge danger">
                                        Blocked
                                    </span>
                                </td>
                                <td>منذ 12 دقيقة</td>
                            </tr>

                        </tbody>

                    </table>

                </div>
                `
            )}

        </div>
        `;
    },

    settings() {

        return `
        <div class="page">

            ${this.section(
                "حالة المنصة",
                `
                <div class="system-list">

                    ${this.system(
                        "Platform",
                        "Configured",
                        "إعدادات المنصة"
                    )}

                    ${this.system(
                        "Authentication",
                        "Ready",
                        "نظام تسجيل الدخول"
                    )}

                    ${this.system(
                        "Database",
                        "Pending Backend",
                        "قاعدة البيانات"
                    )}

                    ${this.system(
                        "AI Engine",
                        "Pending Backend",
                        "محرك الذكاء الاصطناعي"
                    )}

                </div>
                `
            )}

        </div>
        `;
    },

    section(title, content) {

        return `
        <div class="card section-card">

            <div class="section-header">
                <h2>${title}</h2>
            </div>

            ${content}

        </div>
        `;
    },

    stat(title, value, change, description) {

        return `
        <div class="card stat-card">

            <div class="stat-top">
                <span>${title}</span>
                <span class="stat-icon">✦</span>
            </div>

            <div class="stat-value">
                ${value}
            </div>

            <div class="stat-bottom">

                <span class="stat-change">
                    ${change}
                </span>

                <span>
                    ${description}
                </span>

            </div>

        </div>
        `;
    },

    system(name, status, description) {

        const positive = [
            "Online",
            "ONLINE",
            "Active",
            "ACTIVE",
            "Protected",
            "Ready",
            "Configured",
            "Loaded",
            "Stable",
            "Excellent",
            "Published",
            "Success"
        ];

        const warning = [
            "Draft",
            "Pending Backend",
            "Monitoring"
        ];

        let type = "success";

        if (warning.includes(status)) {
            type = "warning";
        }

        if (status === "Blocked") {
            type = "danger";
        }

        return `
        <div class="system-row">

            <div class="system-info">

                <span class="status-dot ${type}"></span>

                <div>
                    <strong>${name}</strong>
                    <span>${description}</span>
                </div>

            </div>

            <span class="badge ${type}">
                ${status}
            </span>

        </div>
        `;
    },

    userRow(name, plan, status, date) {

        return `
        <tr>

            <td>
                <strong>${name}</strong>
            </td>

            <td>
                <span class="badge">
                    ${plan}
                </span>
            </td>

            <td>
                <span class="badge success">
                    ${status}
                </span>
            </td>

            <td>
                ${date}
            </td>

        </tr>
        `;
    },

    notFound() {

        return `
        <div class="card">

            <h2>الصفحة غير موجودة</h2>

            <p style="color:var(--muted);margin-top:10px">
                القسم المطلوب غير متوفر.
            </p>

        </div>
        `;
    }
};
