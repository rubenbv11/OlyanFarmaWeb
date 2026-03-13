// data.js - Vademécum Completo Olyan Farma (Diagnóstico + Catálogo)

const productsDB = {
    // PIEL SENSIBLE / CORPORAL
    exscar: {
        name: "eXscar™ Cream",
        image: "img/Piel Sensible/Cicatrices/EXSCAR_PEQUE.png",
        desc: "Producto sanitario para el tratamiento de cicatrices nuevas o ya existentes.",
        tag: "Piel Lisa",
        isProtocol: false
    },
    eczaid: {
        name: "Eczaid™ Cream",
        image: "img/Piel Sensible/DermatitisAtopica/ECZAID.png",
        desc: "Tratamiento y mantenimiento de la Dermatitis y el Eczema Atópico.",
        tag: "Alivio Atópico",
        isProtocol: false
    },
    boskin_protocol: {
        name: "Gama Boskin™ (Xerosis)",
        desc: "Hidratación profunda para pieles secas y sensibles.",
        tag: "Hidratación Extrema",
        isProtocol: true,
        items: [
            { name: "Boskin™ Shower Gel", type: "Higiene suave", img: "img/Piel Sensible/Xerosis/BOSKIN_GEL_BOTE.png" },
            { name: "Boskin™ Emollient Cream", type: "Emoliente intensivo (500ml)", img: "img/Piel Sensible/Xerosis/BOSKIN_500ml.png" }
        ]
    },
    policalm_protocol: {
        name: "Gama Policalm™ & Calamine™",
        desc: "Especialistas en el alivio del prurito (picor).",
        tag: "Stop Picores",
        isProtocol: true,
        items: [
            { name: "Policalm™ Cream (400ml)", type: "Alivio corporal", img: "img/Piel Sensible/Prurito/POLICAM_CREAM_400ML.png" },
            { name: "Policalm™ Spray", type: "Calma para el cuero cabelludo", img: "img/Piel Sensible/Prurito/POLICAM_SPRAY.png" },
            { name: "Policalm™ Shower Gel", type: "Higiene calmante", img: "img/Piel Sensible/Prurito/POLICALM_GEL.png" },
            { name: "Calamine™ Cream", type: "Protección de piel irritada", img: "img/Piel Sensible/Prurito/CALAMINE-CREAM-250ml-2-1.jpg" }
        ]
    },
    vitamono_protocol: {
        name: "Línea Vitamono EF™ (Inflamación)",
        desc: "Tratamiento de la inflamación y el daño oxidativo.",
        tag: "Reparación y Calma",
        isProtocol: true,
        items: [
            { name: "Vitamono EF™ Lipogel (50ml)", type: "Reparador tópico", img: "img/Piel Sensible/Inflamacion/VITAMONO_GRANDE_.png" },
            { name: "Vitamono EF™ Lipogel (15ml)", type: "Zonas localizadas", img: "img/Piel Sensible/Inflamacion/VITAMONO_PEQUE.png" },
            { name: "Vitamono EF™ Cápsulas", type: "Antioxidante oral", img: "img/Piel Sensible/Inflamacion/VITAMONO_CAPSULAS.png" },
            { name: "Vitamono E-PRO Sobres", type: "Acción sistémica", img: "img/Piel Sensible/Inflamacion/vitamono-epro.png" }
        ]
    },

    // CAPILAR
    hairgen_protocol: {
        name: "Gama Hairgen™ (Alopecia)",
        desc: "Abordaje integral anticaída.",
        tag: "Arsenal Anticaída",
        isProtocol: true,
        items: [
            { name: "Hairgen™ Champú", type: "Estimulación capilar", img: "img/Capilar/Alopecia/HAIRGEN-CHAMPU.png" },
            { name: "Hairgen™ Foam", type: "Espuma de tratamiento", img: "img/Capilar/Alopecia/HAIRGEN-FOAM.png" },
            { name: "Hairgen™ Spray", type: "Tratamiento tópico", img: "img/Capilar/Alopecia/HAIRGEN-SPRAY.png" },
            { name: "Hairgen™ Oral Solution", type: "Viales bebibles", img: "img/Capilar/Alopecia/HAIRGEN-ORAL.png" },
            { name: "Hairgen™ Cápsulas", type: "Suplemento fortificante", img: "img/Capilar/Alopecia/HAIRGEN_CAPSULAS_90.png" }
        ]
    },
    bionatar_protocol: {
        name: "Línea Bionatar™ (Psoriasis)",
        desc: "Específico para placas y descamación severa.",
        tag: "Control Psoriasis",
        isProtocol: true,
        items: [
            { name: "Bionatar™ Champú", type: "Higiene exfoliante", img: "img/Capilar/Psoriasis/BIONATAR_CHAMPU_300ml.png" },
            { name: "Bionatar™ Spray", type: "Hidratación y calma", img: "img/Capilar/Psoriasis/BIONATAR_SPRAY.png" },
            { name: "Bionatar™ Crema", type: "Tratamiento localizado", img: "img/Capilar/Psoriasis/BIONATAR_CREMA.png" }
        ]
    },
    oliprox_protocol: {
        name: "Línea Oliprox™ (Dermatitis Seborreica)",
        desc: "Combate la caspa y el exceso de sebo.",
        tag: "Equilibrio Capilar",
        isProtocol: true,
        items: [
            { name: "Oliprox™ Champú", type: "Antifúngico", img: "img/Capilar/DermatitisSeborreica/OLIPROX_CHAMPU.png" },
            { name: "Oliprox™ Crema", type: "Cuidado facial/corporal", img: "img/Capilar/DermatitisSeborreica/OLIPROX_CREMA.png" },
            { name: "Oliprox™ Espuma", type: "Tratamiento sin aclarado", img: "img/Capilar/DermatitisSeborreica/OLIPROX_ESPUMA.png" },
            { name: "Oliprox™ Spray", type: "Alivio rápido", img: "img/Capilar/DermatitisSeborreica/OLIPROX_SPRAY.png" }
        ]
    },
    oliprox_nails: {
        name: "Oliprox™ Laca de Uñas",
        image: "img/Capilar/DermatitisSeborreica/OLIPROX_LACA.png",
        desc: "Prevención y tratamiento de hongos en las uñas.",
        tag: "Uñas Sanas",
        isProtocol: false
    },

    // FACIAL
    acne_protocol: {
        name: "Gama Anti-Acné (Acmed & Acnaid)",
        desc: "Protocolo purificante y despigmentante.",
        tag: "Arsenal Anti-Acné",
        isProtocol: true,
        items: [
            { name: "Acmed™ Cream", type: "Ácido Azelaico 20%", img: "img/Facial/Acné/ACMED.png" },
            { name: "Acnaid™ Cleanser", type: "Limpiador profundo", img: "img/Facial/Acné/ACNAIDCLEANSER.png" },
            { name: "Acnaid™ Gel", type: "Tratamiento puntual", img: "img/Facial/Acné/ACNAIDGEL.png" },
            { name: "Acnaid™ Jabón Líquido", type: "Limpieza diaria", img: "img/Facial/Acné/ACNAIDJABONLIQUIDO.png" },
            { name: "Acmed™ PRO", type: "Cuidado oral", img: "img/Facial/Acné/ACMED-PRO-STICKS-BOX.jpg" }
        ]
    },
    antiedad_protocol: {
        name: "Línea Prototype™ (Antiedad)",
        desc: "Rejuvenecimiento y corrección de imperfecciones faciales.",
        tag: "Rejuvenecimiento",
        isProtocol: true,
        items: [
            { name: "Prototype™ Anti-Wrinkle", type: "Crema antiarrugas", img: "img/Facial/Antiedad/PROTOTYPE_ANTIAGE.png" },
            { name: "Prototype™ Cápsulas", type: "Suplemento Resveratrol", img: "img/Facial/Antiedad/PROTOTYPE_CAPSULAS.png" },
            { name: "Prototype™ Lightening", type: "Corrección de manchas", img: "img/Facial/Antiedad/PROTOTYPE_LIGHTENING.png" },
            { name: "Prototype™ Spider Veins", type: "Telangiectasias faciales", img: "img/Facial/Antiedad/PROTOTYPE_SPIDER_VEINS.png" }
        ]
    },
    rosaid: {
        name: "Rosaid™ Cream",
        image: "img/Facial/Rosacea/ROSAID.png",
        desc: "Tratamiento y control de la rosácea.",
        tag: "Calma y Alivio",
        isProtocol: false
    },
    tazarene_01: {
        name: "Tazarene™ 0.1%",
        image: "img/Facial/PielesSecasGrasas/tazarene_0.1.png",
        desc: "Tazaroteno para pieles grasas/mixtas.",
        tag: "Renovación Celular",
        isProtocol: false
    },
    tazarene_005: {
        name: "Tazarene™ 0.05%",
        image: "img/Facial/PielesSecasGrasas/tazarene_0.05.png",
        desc: "Tazaroteno para pieles secas.",
        tag: "Renovación Suave",
        isProtocol: false
    },

    // SOLAR
    sun_protocol: {
        name: "Gama Fotoprotección Prototype™",
        desc: "Prevención de la queratosis actínica y el daño solar.",
        tag: "Escudo Solar",
        isProtocol: true,
        items: [
            { name: "Prototype™ 50+ Facial", type: "Protección rostro", img: "img/FotoProteccion/PROTOTYPE50_FACIAL.png" },
            { name: "Prototype™ 50+ Corporal", type: "Loción Kids & Family", img: "img/FotoProteccion/PROTOTYPE50_CORPORAL.png" },
            { name: "Prototype™ BB Cream", type: "Protección con color (SPF 30)", img: "img/FotoProteccion/BBCREAM_CAJAyBOTE.png" }
        ]
    }
};

// ÁRBOL DE DECISIÓN (EL CEREBRO DEL DIAGNÓSTICO)
const decisionTree = {
    start: {
        question: "¡Hola! ¿Qué área te gustaría cuidar o tratar hoy?",
        options: [
            { text: "Cuidado Facial (Acné, Arrugas, Rojeces...)", nextId: "facial_branch" },
            { text: "Piel Sensible y Corporal (Picores, Atopía...)", nextId: "body_branch" },
            { text: "Cabello, Cuero Cabelludo y Uñas", nextId: "hair_branch" },
            { text: "Protección Solar", result: "sun_protocol" }
        ]
    },
    body_branch: {
        question: "¿Qué síntoma corporal te preocupa más?",
        options: [
            { text: "Sequedad extrema o piel áspera (Xerosis)", result: "boskin_protocol" },
            { text: "Picor intenso e irritación (Prurito)", result: "policalm_protocol" },
            { text: "Brotes de piel atópica o eccemas", result: "eczaid" },
            { text: "Inflamación o enrojecimiento severo", result: "vitamono_protocol" },
            { text: "Mejorar el aspecto de una cicatriz", result: "exscar" }
        ]
    },
    facial_branch: {
        question: "¿Cuál es tu principal preocupación en el rostro?",
        options: [
            { text: "Granitos, poros obstruidos o marcas de acné", result: "acne_protocol" },
            { text: "Rojeces constantes, ardor o rosácea", result: "rosaid" },
            { text: "Arrugas, manchas, o venitas faciales", result: "antiedad_protocol" },
            { text: "Fotoenvejecimiento profundo (Uso de Retinoides)", nextId: "tazarene_branch" }
        ]
    },
    tazarene_branch: {
        question: "Para recomendarte la concentración de Tazarene™, ¿cómo es tu piel?",
        options: [
            { text: "Piel con tendencia grasa o mixta", result: "tazarene_01" },
            { text: "Piel con tendencia seca", result: "tazarene_005" }
        ]
    },
    hair_branch: {
        question: "¿Cuál es el problema principal?",
        options: [
            { text: "Caída del cabello o falta de densidad (Alopecia)", result: "hairgen_protocol" },
            { text: "Placas rojas y secas que pican (Psoriasis)", result: "bionatar_protocol" },
            { text: "Caspa amarillenta y exceso de grasa (Dermatitis)", result: "oliprox_protocol" },
            { text: "Hongos o decoloración en las uñas", result: "oliprox_nails" }
        ]
    }
};