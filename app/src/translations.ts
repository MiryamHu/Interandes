export type Lang = 'es' | 'en';

export const translations = {
    es: {
        nav: {
        services: 'Servicios',
        about: 'Nosotros',
        process: 'Proceso',
        testimonials: 'Testimonios',
        contact: 'Contacto',
        cta: 'Asesoría Gratuita',
        languageButton: 'EN',
        },

        hero: {
        overline: 'INTERANDES TRADING SAC · DESDE PERÚ AL MUNDO',
        title: 'TU SOCIO ESTRATÉGICO EN COMERCIO EXTERIOR',
        subtitle:
            'Conectamos a empresas peruanas con el mundo. Asesoría especializada en importación, exportación, trámites aduaneros y logística internacional para MYPEs y grandes empresas.',
        primaryButton: 'Solicitar Asesoría',
        secondaryButton: 'Conocer Servicios',
        imageAlt: 'Fondo de logística internacional',
        },

        about: {
        overline: 'Nosotros',
        title: 'Experiencia y confianza en comercio exterior',
        description:
            'Interandes Trading SAC nace con el objetivo de acompañar a empresas peruanas en sus operaciones de importación, exportación, gestión aduanera y logística internacional.',
        description2:
            'Liderada por una especialista en comercio exterior, la empresa ofrece asesoría cercana, clara y estratégica para ayudar a MYPEs y empresas consolidadas a conectar con nuevos mercados.',
        name: 'Ángela Huamaní',
        role: 'Fundadora de Interandes Trading SAC',
        imageAlt: 'Fundadora de Interandes Trading SAC',
        },

        services: {
        overline: 'Servicios',
        title: 'Soluciones integrales de comercio exterior',
        subtitle:
            'Desde la primera consulta hasta la entrega final, gestionamos cada etapa de tus operaciones internacionales con precisión, transparencia y total cumplimiento normativo.',
        items: [
            {
            number: '01',
            title: 'Asesoría en Comercio Exterior',
            description:
                'Evaluamos tu operación y diseñamos la ruta más eficiente: normativas SUNAT, clasificación arancelaria, tratados de libre comercio y optimización de costos logísticos.',
            },
            {
            number: '02',
            title: 'Gestión Aduanera',
            description:
                'Trámites de importación y exportación, nacionalización, DUA, inspecciones OEA, y cumplimiento de regulaciones no arancelarias. Operamos con agentes aduanales confiables.',
            },
            {
            number: '03',
            title: 'Agentes de Carga Internacional',
            description:
                'Conexión directa con agentes de carga marítima, aérea y terrestre. Negociamos tarifas, coordinamos embarques y aseguramos tiempos de tránsito competitivos.',
            },
            {
            number: '04',
            title: 'Sourcing y B2B Global',
            description:
                'Identificamos proveedores confiables en Asia, Europa y América. Verificación de fábricas, negociación de contratos, muestras y control de calidad previo al embarque.',
            },
            {
            number: '05',
            title: 'Operaciones End-to-End',
            description:
                'Para empresas sin área de comercio exterior: nos convertimos en tu departamento internacional. Desde la orden de compra hasta la entrega en almacén.',
            },
            {
            number: '06',
            title: 'Capacitación y Formación',
            description:
                'Talleres especializados para equipos internos: Incoterms 2020, documentación de comercio exterior, manejo de ERP logístico y prevención de contingencias.',
            },
        ],
        },

        stats: {
        items: [
            { value: 120, suffix: '+', label: 'Operaciones Gestionadas', prefix: '' },
            { value: 98, suffix: '%', label: 'Cumplimiento Aduanero', prefix: '' },
            { value: 15, suffix: '', label: 'Países Conectados', prefix: '+' },
            { value: 24, suffix: 'h', label: 'Tiempo de Respuesta', prefix: '' },
        ],
        },

        process: {
        overline: 'Proceso',
        title: 'De la primera reunión a la entrega final',
        subtitle:
            'Un flujo de trabajo claro, medible y sin sorpresas. Cada etapa reportada, cada documento trazable.',
        items: [
            {
            number: '01',
            title: 'Diagnóstico Inicial',
            description:
                'Analizamos tu operación actual, identificamos oportunidades de mejora y definimos objetivos claros de costo, tiempo y cumplimiento.',
            },
            {
            number: '02',
            title: 'Diseño de Ruta',
            description:
                'Seleccionamos la modalidad de transporte, puerto/aeropuerto más eficiente, y validamos toda la documentación requerida antes de iniciar.',
            },
            {
            number: '03',
            title: 'Ejecución Operativa',
            description:
                'Coordinamos con agentes aduanales, transportistas y entidades de control. Tú recibes reportes de avance en tiempo real.',
            },
            {
            number: '04',
            title: 'Despacho Aduanero',
            description:
                'Gestionamos clasificación arancelaria, pagos de derechos, inspecciones y liberación de mercancía sin demoras innecesarias.',
            },
            {
            number: '05',
            title: 'Entrega y Evaluación',
            description:
                'Mercancía en tu almacén. Hacemos cierre de archivo documentario, análisis de KPIs y propuesta de optimización para la siguiente operación.',
            },
        ],
        },

        testimonials: {
        overline: 'Testimonios',
        title: 'Confianza construida con resultados',
        items: [
            {
            quote:
                'Ángela nos permitió exportar por primera vez a Estados Unidos sin contratar un área completa. En 3 meses ya teníamos nuestra primera carga en Miami.',
            author: 'Carlos Mendoza',
            role: 'Gerente General',
            company: 'Andes Naturals SAC',
            },
            {
            quote:
                'La gestión aduanera de Interandes redujo nuestros tiempos de nacionalización de 45 a 12 días. Un cambio transformador para nuestra cadena de suministro.',
            author: 'María Elena Vargas',
            role: 'Supply Chain Manager',
            company: 'Textiles del Norte',
            },
            {
            quote:
                'Encontraron un proveedor confiable en China, negociaron mejores términos que los nuestros y supervisaron toda la carga. Sourcing hecho profesional.',
            author: 'Ricardo Chuquihuanca',
            role: 'CEO',
            company: 'Maderas Andinas Export SAC',
            },
        ],
        },

        cta: {
        title: '¿Listo para conectar tu empresa con el mundo?',
        subtitle:
            'Ya sea tu primera importación o una operación de exportación recurrente, tenemos la experiencia y la red para hacerla realidad. La primera consulta es gratuita.',
        button: 'Agendar Asesoría Gratuita',
        emailButton: 'Enviar correo',
        whatsappButton: 'Escribir por WhatsApp',
        emailSubject: 'Solicitud de Asesoría Gratuita',
        location: 'Lima, Perú',
        },

        footer: {
        servicesTitle: 'Servicios',
        companyTitle: 'Empresa',
        contactTitle: 'Contacto',
        location: 'Lima, Perú',
        rights: 'Todos los derechos reservados.',
        privacy: 'Política de Privacidad',
        terms: 'Términos de Servicio',
        serviceLinks: [
            'Asesoría en Comercio Exterior',
            'Gestión Aduanera',
            'Agentes de Carga Internacional',
            'Sourcing y B2B Global',
            'Operaciones End-to-End',
            'Capacitación y Formación',
        ],
        companyLinks: [
            { label: 'Nosotros', href: '/about' },
            { label: 'Proceso', href: '/#proceso' },
            { label: 'Testimonios', href: '/#testimonios' },
            { label: 'Preguntas Frecuentes', href: '#' },
            { label: 'Blog', href: '#' },
        ],
        },
    },

    en: {
        nav: {
        services: 'Services',
        about: 'About Us',
        process: 'Process',
        testimonials: 'Testimonials',
        contact: 'Contact',
        cta: 'Free Consultation',
        languageButton: 'ES',
        },

        hero: {
        overline: 'INTERANDES TRADING SAC · FROM PERU TO THE WORLD',
        title: 'YOUR STRATEGIC PARTNER IN INTERNATIONAL TRADE',
        subtitle:
            'We connect Peruvian companies with the world. Specialized consulting in imports, exports, customs procedures, and international logistics for small businesses and large companies.',
        primaryButton: 'Request Consulting',
        secondaryButton: 'View Services',
        imageAlt: 'International logistics background',
        },

        about: {
        overline: 'About Us',
        title: 'Experience and trust in international trade',
        description:
            'Interandes Trading SAC was created to support Peruvian companies in import, export, customs management, and international logistics operations.',
        description2:
            'Led by a foreign trade specialist, the company provides close, clear, and strategic consulting to help small businesses and established companies connect with new markets.',
        name: 'Ángela Huamaní',
        role: 'Founder of Interandes Trading SAC',
        imageAlt: 'Founder of Interandes Trading SAC',
        },

        services: {
        overline: 'Services',
        title: 'Comprehensive foreign trade solutions',
        subtitle:
            'From the first consultation to final delivery, we manage every stage of your international operations with precision, transparency, and full regulatory compliance.',
        items: [
            {
            number: '01',
            title: 'Foreign Trade Consulting',
            description:
                'We evaluate your operation and design the most efficient route: SUNAT regulations, tariff classification, free trade agreements, and logistics cost optimization.',
            },
            {
            number: '02',
            title: 'Customs Management',
            description:
                'Import and export procedures, customs clearance, DUA, OEA inspections, and compliance with non-tariff regulations. We work with trusted customs agents.',
            },
            {
            number: '03',
            title: 'International Freight Forwarding',
            description:
                'Direct connection with sea, air, and land freight agents. We negotiate rates, coordinate shipments, and secure competitive transit times.',
            },
            {
            number: '04',
            title: 'Global Sourcing and B2B',
            description:
                'We identify reliable suppliers in Asia, Europe, and the Americas. Factory verification, contract negotiation, samples, and quality control before shipment.',
            },
            {
            number: '05',
            title: 'End-to-End Operations',
            description:
                'For companies without a foreign trade department: we become your international operations team, from purchase order to warehouse delivery.',
            },
            {
            number: '06',
            title: 'Training and Education',
            description:
                'Specialized workshops for internal teams: Incoterms 2020, foreign trade documentation, logistics ERP management, and risk prevention.',
            },
        ],
        },

        stats: {
        items: [
            { value: 120, suffix: '+', label: 'Managed Operations', prefix: '' },
            { value: 98, suffix: '%', label: 'Customs Compliance', prefix: '' },
            { value: 15, suffix: '', label: 'Connected Countries', prefix: '+' },
            { value: 24, suffix: 'h', label: 'Response Time', prefix: '' },
        ],
        },

        process: {
        overline: 'Process',
        title: 'From the first meeting to final delivery',
        subtitle:
            'A clear, measurable workflow with no surprises. Every stage is reported, and every document is traceable.',
        items: [
            {
            number: '01',
            title: 'Initial Assessment',
            description:
                'We analyze your current operation, identify improvement opportunities, and define clear goals for cost, time, and compliance.',
            },
            {
            number: '02',
            title: 'Route Design',
            description:
                'We select the most efficient transport mode, port or airport, and validate all required documentation before starting.',
            },
            {
            number: '03',
            title: 'Operational Execution',
            description:
                'We coordinate with customs agents, carriers, and control entities. You receive real-time progress reports.',
            },
            {
            number: '04',
            title: 'Customs Clearance',
            description:
                'We manage tariff classification, duty payments, inspections, and cargo release without unnecessary delays.',
            },
            {
            number: '05',
            title: 'Delivery and Evaluation',
            description:
                'Goods delivered to your warehouse. We close the documentation file, analyze KPIs, and propose optimization for the next operation.',
            },
        ],
        },

        testimonials: {
        overline: 'Testimonials',
        title: 'Trust built through results',
        items: [
            {
            quote:
                'Ángela helped us export to the United States for the first time without hiring a full department. In 3 months, we already had our first shipment in Miami.',
            author: 'Carlos Mendoza',
            role: 'General Manager',
            company: 'Andes Naturals SAC',
            },
            {
            quote:
                'Interandes customs management reduced our clearance times from 45 to 12 days. A transformative change for our supply chain.',
            author: 'María Elena Vargas',
            role: 'Supply Chain Manager',
            company: 'Textiles del Norte',
            },
            {
            quote:
                'They found a reliable supplier in China, negotiated better terms than ours, and supervised the entire shipment. Professional sourcing from start to finish.',
            author: 'Ricardo Chuquihuanca',
            role: 'CEO',
            company: 'Maderas Andinas Export SAC',
            },
        ],
        },

        cta: {
        title: 'Ready to connect your company with the world?',
        subtitle:
            'Whether it is your first import or a recurring export operation, we have the experience and network to make it happen. The first consultation is free.',
        button: 'Schedule Free Consultation',
        emailButton: 'Send Email',
        whatsappButton: 'Message on WhatsApp',
        emailSubject: 'Free Consultation Request',
        location: 'Lima, Peru',
        },

        footer: {
        servicesTitle: 'Services',
        companyTitle: 'Company',
        contactTitle: 'Contact',
        location: 'Lima, Peru',
        rights: 'All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        serviceLinks: [
            'Foreign Trade Consulting',
            'Customs Management',
            'International Freight Forwarding',
            'Global Sourcing and B2B',
            'End-to-End Operations',
            'Training and Education',
        ],
        companyLinks: [
            { label: 'About Us', href: '/about' },
            { label: 'Process', href: '/#proceso' },
            { label: 'Testimonials', href: '/#testimonios' },
            { label: 'FAQ', href: '#' },
            { label: 'Blog', href: '#' },
        ],
        },
    },
    };