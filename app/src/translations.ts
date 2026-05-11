export type Lang = 'es' | 'en';

export const translations = {
    es: {
        nav: {
        services: 'Servicios',
        solutions: 'Soluciones',
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

        tradeSolutions: {
        overline: 'Importación y exportación',
        title: 'Haz crecer tu negocio con comercio exterior bien gestionado',
        subtitle:
            'Acompañamos a productores, distribuidores y empresas peruanas para importar y exportar con estrategia, seguridad y control en cada etapa.',
        exportCard: {
            overline: 'Para productores y empresas peruanas',
            title: '¿Tu producto podría venderse en otros países?',
            subtitle: 'El comercio exterior puede multiplicar tu negocio.',
            steps: [
            {
                number: '01',
                title: 'Análisis de mercado',
                description: 'Identificamos dónde tiene demanda tu producto.',
            },
            {
                number: '02',
                title: 'Búsqueda B2B',
                description: 'Conectamos con compradores calificados.',
            },
            {
                number: '03',
                title: 'Documentación',
                description: 'Aduanas, sanitarios y certificados de origen.',
            },
            {
                number: '04',
                title: 'Despacho seguro',
                description: 'Logística internacional puerta a puerta.',
            },
            ],
            problemsTitle: 'Lo que detiene a muchos',
            problems: [
            'No saber por dónde empezar',
            'Falta de contactos internacionales',
            'Problemas logísticos y de riesgo',
            'Documentación incorrecta',
            'Miedo a perder el envío',
            ],
            solutionsTitle: 'Nosotros resolvemos todo eso',
            solutions: [
            'Búsqueda de mercados B2B',
            'Gestión logística internacional',
            'Trámites y aduanas completos',
            'Acompañamiento en cada paso',
            'Red de compradores verificados',
            'Entrega segura garantizada',
            ],
        },
        importCard: {
            overline: 'Para distribuidores y empresas',
            title: '¿Importar puede crecer tu negocio?',
            subtitle: 'Sí, si lo haces bien desde el primer día.',
            problemsTitle: 'Errores comunes',
            problems: [
            'Proveedores sin verificar',
            'Costos ocultos en aduana',
            'Retrasos en frontera',
            'Productos rechazados por sanidad',
            'Perder dinero en el primer intento',
            ],
            solutionsTitle: 'Con Interandes Trading obtienes',
            solutions: [
            {
                title: 'Proveedores verificados',
                description: 'Validados antes de comprometer tu dinero.',
            },
            {
                title: 'Trámites y aduanas',
                description: 'DAM, DIGESA, SENASA y documentación gestionada.',
            },
            {
                title: 'Negociación estratégica',
                description: 'Mejores precios, mejores condiciones.',
            },
            {
                title: 'Logística completa',
                description: 'FOB, CIF o DDP: tú eliges el Incoterm.',
            },
            ],
            stats: [
            { value: '+15', label: 'Años en comercio internacional' },
            { value: '0', label: 'Riesgos al iniciar con nosotros' },
            { value: '5', label: 'Mercados activos en Sudamérica' },
            ],
        },
        bottom: {
            overline: 'Comercio exterior estratégico',
            title: 'Exportar o importar no es complicado',
            highlight: 'si tienes la estrategia correcta.',
            button: 'Lleva tu negocio al siguiente nivel',
        },
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

                faq: {
        overline: 'Preguntas frecuentes',
        title: 'Resolvemos tus dudas antes de empezar',
        subtitle:
            'Estas son algunas de las preguntas más comunes antes de iniciar una operación de importación, exportación o gestión aduanera.',
        items: [
            {
            question: '¿Trabajan con empresas que importan por primera vez?',
            answer:
                'Sí. Acompañamos a empresas que están iniciando sus primeras operaciones de importación, explicando cada etapa del proceso, los documentos necesarios, los costos aproximados y los riesgos que deben evitarse.',
            },
            {
            question: '¿Pueden ayudarme a encontrar proveedores en el extranjero?',
            answer:
                'Sí. Realizamos búsqueda y validación de proveedores internacionales, revisamos antecedentes comerciales, condiciones de compra, documentación, muestras y opciones logísticas antes de iniciar una operación.',
            },
            {
            question: '¿También ayudan a exportar productos peruanos?',
            answer:
                'Sí. Ayudamos a productores y empresas peruanas a identificar mercados, preparar documentación, coordinar logística internacional y conectar con posibles compradores B2B.',
            },
            {
            question: '¿Qué documentos necesito para importar o exportar?',
            answer:
                'Depende del producto y del país de origen o destino. Normalmente se requieren documentos como factura comercial, packing list, documentos de transporte, certificados de origen, permisos sanitarios o autorizaciones especiales según el tipo de mercancía.',
            },
            {
            question: '¿Se encargan de los trámites aduaneros?',
            answer:
                'Sí. Coordinamos la gestión aduanera con agentes autorizados, revisamos la documentación, clasificación arancelaria, requisitos no arancelarios y acompañamos el proceso hasta la liberación o despacho de la mercancía.',
            },
            {
            question: '¿La primera asesoría tiene costo?',
            answer:
                'La primera consulta es gratuita. En esa reunión revisamos tu necesidad, el tipo de operación y los pasos recomendados para avanzar de forma segura.',
            },
        ],
        },

        privacyPage: {
        overline: 'Información legal',
        title: 'Política de privacidad',
        lastUpdated: 'Última actualización: 2024',
        intro:
            'En Interandes Trading SAC respetamos la privacidad de nuestros usuarios y clientes. Esta política explica de forma general cómo podemos recopilar, utilizar y proteger la información proporcionada a través de nuestros canales de contacto.',
        sections: [
            {
            title: 'Información que podemos recopilar',
            paragraphs: [
                'Podemos recibir información personal cuando una persona nos contacta por correo electrónico, WhatsApp, redes sociales u otros medios habilitados en la web.',
                'Esta información puede incluir nombre, empresa, correo electrónico, número de teléfono, país, tipo de operación comercial y cualquier dato relacionado con una consulta de importación, exportación, logística o comercio exterior.',
            ],
            },
            {
            title: 'Uso de la información',
            paragraphs: [
                'Utilizamos la información recibida para responder consultas, coordinar asesorías, preparar propuestas comerciales, evaluar operaciones de comercio exterior y brindar seguimiento a los servicios solicitados.',
                'No utilizamos los datos personales para fines distintos a la atención comercial, administrativa u operativa relacionada con Interandes Trading SAC.',
            ],
            },
            {
            title: 'Protección de datos',
            paragraphs: [
                'Adoptamos medidas razonables para proteger la información recibida y evitar accesos no autorizados, pérdidas, alteraciones o usos indebidos.',
                'El acceso a la información se limita a personas autorizadas que participan en la atención de consultas, coordinación de servicios o gestión administrativa.',
            ],
            },
            {
            title: 'Comunicación con terceros',
            paragraphs: [
                'En algunos casos, puede ser necesario compartir información operativa con agentes de carga, agentes aduaneros, proveedores logísticos, entidades de control u otros participantes necesarios para evaluar o ejecutar una operación.',
                'Solo compartimos la información necesaria para gestionar la consulta o servicio solicitado.',
            ],
            },
            {
            title: 'Conservación de la información',
            paragraphs: [
                'La información podrá conservarse durante el tiempo necesario para atender la consulta, prestar el servicio, cumplir obligaciones administrativas o mantener comunicación comercial con el cliente.',
            ],
            },
            {
            title: 'Derechos del usuario',
            paragraphs: [
                'El usuario puede solicitar información, actualización, rectificación o eliminación de sus datos personales escribiendo al correo de contacto de Interandes Trading SAC.',
            ],
            },
        ],
        contactTitle: 'Contacto',
        contactText:
            'Para consultas relacionadas con esta política de privacidad, puedes escribir a angelahuamani@interandes.com.pe.',
        },

        termsPage: {
        overline: 'Información legal',
        title: 'Términos de servicio',
        lastUpdated: 'Última actualización: 2024',
        intro:
            'Estos términos regulan el uso general de la página web de Interandes Trading SAC y la información presentada sobre nuestros servicios de comercio exterior, importación, exportación, logística y gestión aduanera.',
        sections: [
            {
            title: 'Uso del sitio web',
            paragraphs: [
                'El contenido de esta página tiene finalidad informativa y comercial. El usuario se compromete a utilizar el sitio de forma adecuada y a no realizar acciones que puedan afectar su funcionamiento, seguridad o disponibilidad.',
            ],
            },
            {
            title: 'Información sobre servicios',
            paragraphs: [
                'La información publicada sobre servicios, procesos, beneficios o casos de uso es referencial y puede variar según el tipo de producto, país de origen o destino, normativa aplicable, documentación disponible y condiciones logísticas.',
                'Cada operación de comercio exterior requiere una evaluación particular antes de confirmar costos, plazos, requisitos o viabilidad.',
            ],
            },
            {
            title: 'Asesoría y propuestas',
            paragraphs: [
                'El contacto a través de la web, correo electrónico o WhatsApp no implica automáticamente la contratación de un servicio.',
                'Cualquier servicio, alcance, costo o responsabilidad deberá ser confirmado mediante una propuesta, acuerdo comercial o comunicación formal entre las partes.',
            ],
            },
            {
            title: 'Responsabilidad',
            paragraphs: [
                'Interandes Trading SAC trabaja para brindar información clara y acompañamiento profesional. Sin embargo, los resultados de una operación pueden depender de terceros, autoridades, navieras, aerolíneas, proveedores, agentes aduaneros u otros actores externos.',
                'El cliente es responsable de proporcionar información veraz, completa y actualizada para la correcta evaluación de su operación.',
            ],
            },
            {
            title: 'Enlaces externos',
            paragraphs: [
                'El sitio puede incluir enlaces a plataformas externas como WhatsApp, correo electrónico, redes sociales u otros servicios. Interandes Trading SAC no controla el funcionamiento, disponibilidad o políticas de dichas plataformas.',
            ],
            },
            {
            title: 'Modificaciones',
            paragraphs: [
                'Interandes Trading SAC puede actualizar estos términos cuando lo considere necesario. La versión publicada en esta página será la vigente al momento de la consulta.',
            ],
            },
        ],
        contactTitle: 'Contacto',
        contactText:
            'Para consultas sobre estos términos, puedes escribir a angelahuamani@interandes.com.pe.',
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
            { label: 'Soluciones', href: '/#soluciones' },
            { label: 'Nosotros', href: '/about' },
            { label: 'Proceso', href: '/#proceso' },
            { label: 'Testimonios', href: '/#testimonios' },
            { label: 'Preguntas Frecuentes', href: '/#faq' },
            ],
        },
    },

    en: {
        nav: {
            services: 'Services',
            solutions: 'Solutions',
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

        tradeSolutions: {
        overline: 'Import and export',
        title: 'Grow your business with well-managed international trade',
        subtitle:
            'We support Peruvian producers, distributors, and companies to import and export with strategy, safety, and control at every stage.',
        exportCard: {
            overline: 'For Peruvian producers and companies',
            title: 'Could your product be sold in other countries?',
            subtitle: 'International trade can multiply your business.',
            steps: [
            {
                number: '01',
                title: 'Market analysis',
                description: 'We identify where your product has demand.',
            },
            {
                number: '02',
                title: 'B2B search',
                description: 'We connect you with qualified buyers.',
            },
            {
                number: '03',
                title: 'Documentation',
                description: 'Customs, sanitary documents, and certificates of origin.',
            },
            {
                number: '04',
                title: 'Safe dispatch',
                description: 'Door-to-door international logistics.',
            },
            ],
            problemsTitle: 'What stops many businesses',
            problems: [
            'Not knowing where to start',
            'Lack of international contacts',
            'Logistics and risk problems',
            'Incorrect documentation',
            'Fear of losing the shipment',
            ],
            solutionsTitle: 'We solve all of that',
            solutions: [
            'B2B market search',
            'International logistics management',
            'Complete customs and paperwork',
            'Support at every step',
            'Verified buyer network',
            'Safe delivery guaranteed',
            ],
        },
        importCard: {
            overline: 'For distributors and companies',
            title: 'Can importing grow your business?',
            subtitle: 'Yes, if you do it right from day one.',
            problemsTitle: 'Common mistakes',
            problems: [
            'Unverified suppliers',
            'Hidden customs costs',
            'Border delays',
            'Products rejected by health authorities',
            'Losing money on the first attempt',
            ],
            solutionsTitle: 'With Interandes Trading you get',
            solutions: [
            {
                title: 'Verified suppliers',
                description: 'Validated before putting your money at risk.',
            },
            {
                title: 'Customs and procedures',
                description: 'DAM, DIGESA, SENASA, and documentation managed.',
            },
            {
                title: 'Strategic negotiation',
                description: 'Better prices and better conditions.',
            },
            {
                title: 'Complete logistics',
                description: 'FOB, CIF, or DDP: you choose the Incoterm.',
            },
            ],
            stats: [
            { value: '+15', label: 'Years in international trade' },
            { value: '0', label: 'Risks when starting with us' },
            { value: '5', label: 'Active markets in South America' },
            ],
        },
        bottom: {
            overline: 'Strategic international trade',
            title: 'Exporting or importing is not complicated',
            highlight: 'when you have the right strategy.',
            button: 'Take your business to the next level',
        },
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
                'Angela helped us export to the United States for the first time without hiring a full department. In 3 months, we already had our first shipment in Miami. We are now exporting to more than 100 countries.',
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

        faq: {
        overline: 'Frequently Asked Questions',
        title: 'Answers before you start',
        subtitle:
            'These are some of the most common questions before starting an import, export, or customs management operation.',
        items: [
            {
            question: 'Do you work with companies importing for the first time?',
            answer:
                'Yes. We support companies starting their first import operations by explaining each stage of the process, required documents, estimated costs, and the risks to avoid.',
            },
            {
            question: 'Can you help me find suppliers abroad?',
            answer:
                'Yes. We search for and validate international suppliers, reviewing business background, purchase conditions, documentation, samples, and logistics options before starting an operation.',
            },
            {
            question: 'Do you also help export Peruvian products?',
            answer:
                'Yes. We help Peruvian producers and companies identify markets, prepare documentation, coordinate international logistics, and connect with potential B2B buyers.',
            },
            {
            question: 'What documents do I need to import or export?',
            answer:
                'It depends on the product and the country of origin or destination. Common documents include commercial invoice, packing list, transport documents, certificates of origin, sanitary permits, or special authorizations depending on the goods.',
            },
            {
            question: 'Do you handle customs procedures?',
            answer:
                'Yes. We coordinate customs management with authorized agents, review documentation, tariff classification, non-tariff requirements, and support the process until the goods are released or dispatched.',
            },
            {
            question: 'Is the first consultation free?',
            answer:
                'Yes. The first consultation is free. In that meeting, we review your needs, the type of operation, and the recommended steps to move forward safely.',
            },
        ],
        },

        privacyPage: {
        overline: 'Legal information',
        title: 'Privacy Policy',
        lastUpdated: 'Last updated: 2024',
        intro:
            'At Interandes Trading SAC, we respect the privacy of our users and clients. This policy explains in general terms how we may collect, use, and protect information provided through our contact channels.',
        sections: [
            {
            title: 'Information we may collect',
            paragraphs: [
                'We may receive personal information when someone contacts us by email, WhatsApp, social media, or other channels available on the website.',
                'This information may include name, company, email address, phone number, country, type of commercial operation, and any data related to an import, export, logistics, or foreign trade inquiry.',
            ],
            },
            {
            title: 'Use of information',
            paragraphs: [
                'We use the information received to respond to inquiries, coordinate consultations, prepare commercial proposals, evaluate foreign trade operations, and follow up on requested services.',
                'We do not use personal data for purposes unrelated to the commercial, administrative, or operational activities of Interandes Trading SAC.',
            ],
            },
            {
            title: 'Data protection',
            paragraphs: [
                'We take reasonable measures to protect the information received and prevent unauthorized access, loss, alteration, or misuse.',
                'Access to information is limited to authorized people involved in handling inquiries, coordinating services, or administrative management.',
            ],
            },
            {
            title: 'Communication with third parties',
            paragraphs: [
                'In some cases, it may be necessary to share operational information with freight agents, customs agents, logistics providers, control entities, or other parties required to evaluate or execute an operation.',
                'We only share the information necessary to manage the inquiry or requested service.',
            ],
            },
            {
            title: 'Data retention',
            paragraphs: [
                'Information may be kept for as long as necessary to handle the inquiry, provide the service, meet administrative obligations, or maintain commercial communication with the client.',
            ],
            },
            {
            title: 'User rights',
            paragraphs: [
                'Users may request information, updates, correction, or deletion of their personal data by writing to the contact email of Interandes Trading SAC.',
            ],
            },
        ],
        contactTitle: 'Contact',
        contactText:
            'For questions related to this privacy policy, you may write to angelahuamani@interandes.com.pe.',
        },

        termsPage: {
        overline: 'Legal information',
        title: 'Terms of Service',
        lastUpdated: 'Last updated: 2024',
        intro:
            'These terms govern the general use of the Interandes Trading SAC website and the information presented about our foreign trade, import, export, logistics, and customs management services.',
        sections: [
            {
            title: 'Use of the website',
            paragraphs: [
                'The content of this website is for informational and commercial purposes. Users agree to use the site properly and not to perform actions that may affect its operation, security, or availability.',
            ],
            },
            {
            title: 'Service information',
            paragraphs: [
                'Information published about services, processes, benefits, or use cases is for reference only and may vary depending on the type of product, country of origin or destination, applicable regulations, available documentation, and logistics conditions.',
                'Each foreign trade operation requires a specific evaluation before confirming costs, timelines, requirements, or feasibility.',
            ],
            },
            {
            title: 'Consulting and proposals',
            paragraphs: [
                'Contact through the website, email, or WhatsApp does not automatically imply the hiring of a service.',
                'Any service, scope, cost, or responsibility must be confirmed through a proposal, commercial agreement, or formal communication between the parties.',
            ],
            },
            {
            title: 'Responsibility',
            paragraphs: [
                'Interandes Trading SAC works to provide clear information and professional support. However, the results of an operation may depend on third parties, authorities, shipping companies, airlines, suppliers, customs agents, or other external actors.',
                'The client is responsible for providing truthful, complete, and updated information for the correct evaluation of their operation.',
            ],
            },
            {
            title: 'External links',
            paragraphs: [
                'The site may include links to external platforms such as WhatsApp, email, social media, or other services. Interandes Trading SAC does not control the operation, availability, or policies of those platforms.',
            ],
            },
            {
            title: 'Changes',
            paragraphs: [
                'Interandes Trading SAC may update these terms when necessary. The version published on this page will be the current version at the time of consultation.',
            ],
            },
        ],
        contactTitle: 'Contact',
        contactText:
            'For questions about these terms, you may write to angelahuamani@interandes.com.pe.',
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
        { label: 'Solutions', href: '/#soluciones' },
        { label: 'About Us', href: '/about' },
        { label: 'Process', href: '/#proceso' },
        { label: 'Testimonials', href: '/#testimonios' },
        { label: 'FAQ', href: '/#faq' },
        ],
        },
    },
    };