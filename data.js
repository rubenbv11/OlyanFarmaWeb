// data.js - Base de datos EXHAUSTIVA Olyan Farma (Con rutas locales exactas)

const productsDB = {
    // ==========================================
    // 1. CORPORAL Y PIEL SENSIBLE
    // ==========================================
    exscar: {
        name: "eXscar™ Cream",
        image: "img/Piel Sensible/Cicatrices/EXSCAR_PEQUE.png",
        desc: "Tratamiento de cicatrices nuevas o ya existentes y mejora de la cicatrización.",
        tag: "Piel Lisa",
        isProtocol: false
    },
    boskin_protocol: {
        name: "Línea Boskin™ para Xerosis",
        desc: "Para la sequedad extrema, dispones de formatos de higiene y emolientes:",
        tag: "Hidratación Extrema",
        isProtocol: true,
        items: [
            { name: "Boskin™ Shower Gel", type: "Gel de textura cremosa que limpia e hidrata", img: "img/Piel Sensible/Xerosis/BOSKIN_GEL_BOTE.png" },
            { name: "Boskin™ Emollient Cream", type: "Crema corporal para la deshidratación severa", img: "img/Piel Sensible/Xerosis/BOSKIN_500ml.png" }
        ]
    },
    policalm_protocol: {
        name: "Líneas Policalm™ y Calamine™",
        desc: "Opciones específicas para el tratamiento y prevención del picor (Prurito):",
        tag: "Stop Picores",
        isProtocol: true,
        items: [
            { name: "Policalm™ Shower Gel", type: "Higiene con activos calmantes e hidratantes", img: "img/Piel Sensible/Prurito/POLICALM_GEL.png" },
            { name: "Policalm™ Cream", type: "Tratamiento corporal y control del picor", img: "img/Piel Sensible/Prurito/POLICAM_CREAM_400ML.png" },
            { name: "Policalm™ Spray", type: "Calma rápida para el cuero cabelludo", img: "img/Piel Sensible/Prurito/POLICAM_SPRAY.png" },
            { name: "Calamine™ Cream", type: "Calma, alivia y protege la piel irritada", img: "img/Piel Sensible/Prurito/CALAMINE-CREAM-250ml-2-1.jpg" }
        ]
    },
    eczaid: {
        name: "Eczaid™ Cream",
        desc: "Prevención y restauración de las alteraciones eczematosas y dermatitis atópica.",
        tag: "Alivio Atópico",
        isProtocol: false,
        image: "img/Piel Sensible/DermatitisAtopica/ECZAID.png"
    },
    vitamono_protocol: {
        name: "Línea Antiinflamatoria Vitamono EF™",
        desc: "Tratamiento de la inflamación y daño oxidativo en diferentes formatos:",
        tag: "Reparación y Calma",
        isProtocol: true,
        items: [
            { name: "Vitamono EF™ Lipogel", type: "Triple efecto antiinflamatorio tópico", img: "img/Piel Sensible/Inflamacion/VITAMONO_PEQUE.png" },
            { name: "Vitamono EF™ Cápsulas", type: "Complemento oral con activos antioxidantes", img: "img/Piel Sensible/Inflamacion/VITAMONO_CAPSULAS.png" },
            { name: "Vitamono E-PRO Sobres", type: "Combinación de activos única en formato bebible", img: "img/Piel Sensible/Inflamacion/vitamono-epro.png" }
        ]
    },

    // ==========================================
    // 2. CAPILAR Y UÑAS
    // ==========================================
    hairgen_protocol: {
        name: "Gama Completa Anticaída Hairgen™",
        desc: "Dispones de 5 opciones para tratar la alopecia. Combina un tratamiento tópico con uno oral para máxima eficacia:",
        tag: "Arsenal Anticaída",
        isProtocol: true,
        items: [
            { name: "Hairgen™ Champú", type: "Acción estimuladora del crecimiento capilar", img: "img/Capilar/Alopecia/HAIRGEN-CHAMPU.png" },
            { name: "Hairgen™ Foam (Espuma)", type: "Estimulación capilar de fácil aplicación", img: "img/Capilar/Alopecia/HAIRGEN-FOAM.png" },
            { name: "Hairgen™ Spray", type: "Rápida absorción sin dejar residuo graso", img: "img/Capilar/Alopecia/HAIRGEN-SPRAY.png" },
            { name: "Hairgen™ Oral Solution", type: "Viales bebibles con oligoelementos", img: "img/Capilar/Alopecia/HAIRGEN-ORAL.png" },
            { name: "Hairgen™ Cápsulas", type: "Tratamiento en formato softgel", img: "img/Capilar/Alopecia/HAIRGEN_CAPSULAS_90.png" }
        ]
    },
    bionatar_protocol: {
        name: "Línea Psoriasis Bionatar™",
        desc: "Mantenimiento y tratamiento de la Psoriasis en cuero cabelludo y cuerpo:",
        tag: "Control Psoriasis",
        isProtocol: true,
        items: [
            { name: "Bionatar™ Champú", type: "Antibacteriano, antifúngico y modulador", img: "img/Capilar/Psoriasis/BIONATAR_CHAMPU_300ml.png" },
            { name: "Bionatar™ Spray", type: "Hidratante, antipruriginoso y reparador", img: "img/Capilar/Psoriasis/BIONATAR_SPRAY.png" },
            { name: "Bionatar™ Crema", type: "Acción exfoliante y calmante para placas", img: "img/Capilar/Psoriasis/BIONATAR_CREMA.png" }
        ]
    },
    oliprox_protocol: {
        name: "Línea Dermatitis Seborreica Oliprox™",
        desc: "Todas las opciones para controlar escamas, bacterias y hongos:",
        tag: "Equilibrio Total",
        isProtocol: true,
        items: [
            { name: "Oliprox™ Champú", type: "Antibacteriano y antifúngico exfoliante", img: "img/Capilar/DermatitisSeborreica/OLIPROX_CHAMPU.png" },
            { name: "Oliprox™ Spray", type: "Antipruriginoso y antiinflamatorio sin aclarado", img: "img/Capilar/DermatitisSeborreica/OLIPROX_SPRAY.png" },
            { name: "Oliprox™ Foam (Espuma)", type: "Espuma de amplio espectro", img: "img/Capilar/DermatitisSeborreica/OLIPROX_ESPUMA.png" },
            { name: "Oliprox™ Crema", type: "Amplio espectro para zonas localizadas", img: "img/Capilar/DermatitisSeborreica/OLIPROX_CREMA.png" }
        ]
    },
    oliprox_nails: {
        name: "Oliprox™ Laca de Uñas",
        desc: "Formulación única en gel acuoso para la prevención y reparación de uñas con hongos.",
        tag: "Cuidado de Uñas",
        isProtocol: false,
        image: "img/Capilar/DermatitisSeborreica/OLIPROX_LACA.png"
    },

    // ==========================================
    // 3. FACIAL (ACNÉ, ANTIEDAD, ROSÁCEA)
    // ==========================================
    acne_protocol: {
        name: "Gama Anti-Acné Acnaid™ y Acmed™",
        desc: "Todas las necesidades cubiertas para un protocolo de tratamiento y mantenimiento:",
        tag: "Arsenal Anti-Acné",
        isProtocol: true,
        items: [
            { name: "Acmed™ Cream 20%", type: "Crema de Ácido Azelaico 20%", img: "img/Facial/Acné/ACMED.png" },
            { name: "Acnaid™ Cleanser", type: "Limpiador antioxidante y antibacteriano", img: "img/Facial/Acné/ACNAIDCLEANSER.png" },
            { name: "Acnaid™ Gel", type: "Acción queratolítica y calmante", img: "img/Facial/Acné/ACNAIDGEL.png" },
            { name: "Acnaid™ Liquid Soap", type: "Limpiador acuoso cicatrizante", img: "img/Facial/Acné/ACNAIDJABONLIQUIDO.png" },
            { name: "Acmed™ PRO", type: "Complemento oral en sobres", img: "img/Facial/Acné/ACMED-PRO-STICKS-BOX.jpg" }
        ]
    },
    rosacea_protocol: {
        name: "Tratamiento Rosácea Rosaid™",
        desc: "Crema para controlar la inflamación, las rojeces, la irritación, el picor y el escozor.",
        tag: "Calma y Alivio",
        isProtocol: false, 
        image: "img/Facial/Rosacea/ROSAID.png"
    },
    antiedad_protocol: {
        name: "Línea Antiedad Global Prototype™",
        desc: "Opciones avanzadas para signos de la edad, manchas y venitas:",
        tag: "Rejuvenecimiento",
        isProtocol: true,
        items: [
            { name: "Prototype™ Anti-Wrinkle Cream", type: "Combate los principales signos de la edad", img: "img/Facial/Antiedad/PROTOTYPE_ANTIAGE.png" },
            { name: "Prototype™ Cápsulas Resveratrol", type: "Retarda el envejecimiento celular", img: "img/Facial/Antiedad/PROTOTYPE_CAPSULAS.png" },
            { name: "Prototype™ Spider Veins", type: "Crema para tratar telangiectasias faciales", img: "img/Facial/Antiedad/PROTOTYPE_SPIDER_VEINS.png" },
            { name: "Prototype™ Lightening", type: "Combate la hipercromía y pigmentación", img: "img/Facial/Antiedad/PROTOTYPE_LIGHTENING.png" }
        ]
    },
    tazarene_oily: {
        name: "Tazarene™ 0.1% (Piel Grasa)",
        desc: "Retinoide de alta eficacia para pieles grasas o mixtas. Trata el fotoenvejecimiento y regula el sebo.",
        tag: "Renovación Celular",
        isProtocol: false,
        image: "img/Facial/PielesSecasGrasas/tazarene_0.1.png"
    },
    tazarene_dry: {
        name: "Tazarene™ 0.05% (Piel Seca)",
        desc: "Retinoide de baja concentración ideal para pieles secas. Minimiza irritaciones.",
        tag: "Renovación Suave",
        isProtocol: false,
        image: "img/Facial/PielesSecasGrasas/tazarene_0.05.png"
    },

    // ==========================================
    // 4. FOTOPROTECCIÓN
    // ==========================================
    sun_protocol: {
        name: "Línea Fotoprotección Prototype™ 50+",
        desc: "Prevención de la queratosis actínica con diferentes formatos para cada necesidad:",
        tag: "Defensa Solar Actínica",
        isProtocol: true,
        items: [
            { name: "Prototype™ 50+ Kids & Family", type: "Loción corporal facial y corporal extrema", img: "img/FotoProteccion/PROTOTYPE50_CORPORAL.png" },
            { name: "Prototype™ 50+ Face Cream", type: "Prevención facial diaria sin filtros químicos agresivos", img: "img/FotoProteccion/PROTOTYPE50_FACIAL.png" },
            { name: "Prototype™ BB Cream SPF 30", type: "Protección diaria con toque de color", img: "img/FotoProteccion/BBCREAM_CAJAyBOTE.png" }
        ]
    }
};

// ==========================================
// EL MOTOR (ÁRBOL DE DECISIÓN)
// ==========================================
const decisionTree = {
    start: {
        question: "¡Hola! ¿Qué área te gustaría cuidar o tratar hoy?",
        options: [
            { text: "Cuidado Facial (Acné, Arrugas, Rojeces...)", nextId: "facial_branch" },
            { text: "Cuidado Corporal y Piel Sensible", nextId: "body_branch" },
            { text: "Cabello, Cuero Cabelludo y Uñas", nextId: "hair_branch" },
            { text: "Protección Solar", result: "sun_protocol" }
        ]
    },

    // 1. RAMA CORPORAL Y PIEL SENSIBLE
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

    // 2. RAMA FACIAL
    facial_branch: {
        question: "¿Cuál es tu principal preocupación en el rostro?",
        options: [
            { text: "Granitos, poros obstruidos o marcas de acné", result: "acne_protocol" },
            { text: "Rojeces constantes, ardor o rosácea", result: "rosacea_protocol" },
            { text: "Arrugas, manchas, o venitas faciales (Spider Veins)", result: "antiedad_protocol" },
            { text: "Fotoenvejecimiento profundo (Uso de Retinoides)", nextId: "tazarene_branch" }
        ]
    },
    tazarene_branch: {
        question: "Para recomendarte la concentración de Tazarene™, ¿cómo es tu piel?",
        options: [
            { text: "Piel con tendencia grasa o mixta", result: "tazarene_oily" },
            { text: "Piel con tendencia seca", result: "tazarene_dry" }
        ]
    },

    // 3. RAMA CAPILAR Y UÑAS
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