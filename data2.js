// data.js - Base de datos Completa Olyan Farma (Facial, Capilar, Solar, Corporal/Sensible)

const productsDB = {
    // ==========================================
    // 1. CORPORAL Y PIEL SENSIBLE (¡NUEVO!)
    // ==========================================
    exscar: {
        name: "eXscar™ Cream",
        image: "img/exscar.png",
        desc: "Ayuda a difuminar y alisar cicatrices, tanto recientes como antiguas. Mejora la elasticidad de la piel.",
        tag: "Piel Lisa",
        isProtocol: false
    },
    boskin_protocol: {
        name: "Protocolo Xerosis Boskin™",
        desc: "Tratamiento intensivo para la sequedad extrema (xerosis). Restaura la barrera lipídica y proporciona hidratación profunda.",
        tag: "Hidratación Extrema",
        isProtocol: true,
        items: [
            { name: "Boskin™ Shower Gel", type: "Higiene suave sin resecar", img: "img/boskin_gel.png" },
            { name: "Boskin™ Emollient Cream", type: "Crema emoliente de rescate", img: "img/boskin_cream.png" }
        ]
    },
    policalm_protocol: {
        name: "Protocolo Antiprurito Policalm™",
        desc: "Acción calmante inmediata para pieles con picor intenso, irritación o descamación.",
        tag: "Stop Picores",
        isProtocol: true,
        items: [
            { name: "Policalm™ Shower Gel", type: "Higiene calmante diaria", img: "img/policalm_gel.png" },
            { name: "Policalm™ Cream", type: "Alivio prolongado del picor corporal", img: "img/policalm_cream.png" },
            { name: "Policalm™ Spray", type: "Calma rápida para el cuero cabelludo", img: "img/policalm_spray.png" }
        ]
    },
    eczaid: {
        name: "Eczaid™ Cream",
        desc: "Producto sanitario formulado específicamente para el tratamiento y mantenimiento de la Dermatitis y el Eczema Atópico.",
        tag: "Alivio Atópico",
        isProtocol: false,
        image: "img/eczaid.png"
    },
    vitamono_protocol: {
        name: "Protocolo Antiinflamatorio Vitamono EF™",
        desc: "Tratamiento de choque sin corticoides para la inflamación, enrojecimiento y daño oxidativo de la piel.",
        tag: "Reparación y Calma",
        isProtocol: true,
        items: [
            { name: "Vitamono EF™ Lipogel", type: "Tratamiento tópico intensivo", img: "img/vitamono_lipogel.png" },
            { name: "Vitamono EF™ Cápsulas / Sobres", type: "Acción antioxidante desde el interior", img: "img/vitamono_caps.png" }
        ]
    },

    // ==========================================
    // 2. PROTOCOLOS CAPILARES
    // ==========================================
    hairgen_protocol: {
        name: "Protocolo Anticaída 360º Hairgen™",
        desc: "Abordaje completo para frenar la caída y estimular el crecimiento combinando tratamiento tópico y oral.",
        tag: "Fuerza y Densidad",
        isProtocol: true,
        items: [
            { name: "Hairgen™ Champú", type: "Higiene y estimulación", img: "img/hairgen_shampoo.png" },
            { name: "Hairgen™ Spray / Espuma", type: "Tratamiento tópico intensivo", img: "img/hairgen_spray.png" },
            { name: "Hairgen™ Cápsulas", type: "Complemento oral fortificante", img: "img/hairgen_caps.png" }
        ]
    },
    bionatar_protocol: {
        name: "Protocolo Psoriasis Bionatar™",
        desc: "Tratamiento integral formulado para aliviar las placas rojas, reducir la descamación severa y calmar el picor.",
        tag: "Control Psoriasis",
        isProtocol: true,
        items: [
            { name: "Bionatar™ Champú", type: "Higiene exfoliante y calmante", img: "img/bionatar_shampoo.png" },
            { name: "Bionatar™ Crema", type: "Para zonas localizadas muy resecas", img: "img/bionatar_cream.png" }
        ]
    },
    oliprox_protocol: {
        name: "Protocolo Dermatitis Seborreica Oliprox™",
        desc: "Acción antifúngica y antibacteriana para combatir la caspa grasa, escamas amarillentas y el exceso de sebo.",
        tag: "Equilibrio Capilar",
        isProtocol: true,
        items: [
            { name: "Oliprox™ Champú", type: "Higiene tratante de amplio espectro", img: "img/oliprox_shampoo.png" },
            { name: "Oliprox™ Espuma / Spray", type: "Mantenimiento sin aclarado", img: "img/oliprox_foam.png" }
        ]
    },

    // ==========================================
    // 3. PROTOCOLOS FACIALES
    // ==========================================
    acne_protocol: {
        name: "Protocolo Anti-Acné Integral",
        desc: "Rutina completa para purificar el poro, reducir la inflamación, eliminar marcas y mantener la piel sana desde el interior.",
        tag: "Piel Limpia",
        isProtocol: true,
        items: [
            { name: "Acnaid™ Cleanser", type: "Limpieza antibacteriana suave", img: "img/acnaid_cleanser.png" },
            { name: "Acmed™ Cream 20%", type: "Tratamiento intensivo despigmentante", img: "img/acmed.png" },
            { name: "Acmed™ PRO", type: "Complemento oral para el mantenimiento", img: "img/acmed_pro.png" }
        ]
    },
    rosacea_protocol: {
        name: "Tratamiento Rosácea Rosaid™",
        desc: "Producto sanitario formulado explícitamente para controlar la inflamación, las rojeces, la irritación y el escozor.",
        tag: "Calma y Alivio",
        isProtocol: false, 
        image: "img/rosaid.png"
    },
    antiedad_protocol: {
        name: "Protocolo Antiedad Global Prototype™",
        desc: "Cuidado avanzado para combatir los signos de la edad, aportar luminosidad y redensificar la piel.",
        tag: "Rejuvenecimiento",
        isProtocol: true,
        items: [
            { name: "Prototype™ Face Cream", type: "Crema antiedad reparadora", img: "img/prototype_cream.png" },
            { name: "Prototype™ Cápsulas", type: "Retrasa el envejecimiento celular", img: "img/prototype_caps.png" },
            { name: "Prototype™ Lightening", type: "Corrección de manchas", img: "img/prototype_lightening.png" }
        ]
    },
    tazarene_oily: {
        name: "Tazarene™ 0.1% (Piel Grasa)",
        desc: "Retinoide (Tazaroteno) de alta eficacia para renovar la textura de la piel, tratar el fotoenvejecimiento y regular el sebo.",
        tag: "Renovación Celular",
        isProtocol: false,
        image: "img/tazarene_01.png"
    },
    tazarene_dry: {
        name: "Tazarene™ 0.05% (Piel Seca)",
        desc: "Retinoide formulado específicamente para minimizar la irritación en pieles secas mientras combate el fotoenvejecimiento.",
        tag: "Renovación Suave",
        isProtocol: false,
        image: "img/tazarene_005.png"
    },

    // ==========================================
    // 4. FOTOPROTECCIÓN
    // ==========================================
    prototype_kids: {
        name: "Prototype™ 50+ Kids & Family",
        desc: "Loción facial y corporal de altísima protección frente al daño actínico. Muy resistente al agua, ideal para toda la familia.",
        tag: "Protección Familiar Extrema",
        isProtocol: false,
        image: "img/prototype_kids.png"
    },
    prototype_face50: {
        name: "Prototype™ 50+ Face Cream",
        desc: "Fotoprotección facial diaria extrema. Previene la queratosis actínica y protege el rostro del daño solar profundo.",
        tag: "Escudo Facial",
        isProtocol: false,
        image: "img/prototype_face50.png"
    },
    prototype_bb: {
        name: "Prototype™ BB Cream SPF 30",
        desc: "Cuidado protector de uso diario. Unifica el tono de la piel aportando un toque de color mientras te protege del sol.",
        tag: "Protección y Color",
        isProtocol: false,
        image: "img/prototype_bb.png"
    }
};

// ==========================================
// EL MOTOR (ÁRBOL DE DECISIÓN)
// ==========================================
const decisionTree = {
    start: {
        question: "¡Hola! ¿Qué área te gustaría cuidar o tratar hoy?",
        options: [
            { text: "Cuidado Facial (Granos, Arrugas, Rojeces...)", nextId: "facial_branch" },
            { text: "Piel Sensible y Corporal (Picores, Atopía, Sequedad...)", nextId: "body_branch" }, // ¡NUEVA RAMA!
            { text: "Problemas en el Cuero Cabelludo o Caída", nextId: "hair_branch" },
            { text: "Protección Solar y Prevención", nextId: "sun_branch" }
        ]
    },

    // 1. RAMA CORPORAL Y PIEL SENSIBLE (NUEVA)
    body_branch: {
        question: "¿Qué síntoma o condición corporal te preocupa más?",
        options: [
            { text: "Sequedad extrema, aspereza y tirantez (Xerosis)", result: "boskin_protocol" },
            { text: "Picor intenso e irritación constante (Prurito)", result: "policalm_protocol" },
            { text: "Brotes de piel atópica o eccemas", result: "eczaid" },
            { text: "Inflamación, enrojecimiento o daño oxidativo agudo", result: "vitamono_protocol" },
            { text: "Quiero mejorar el aspecto de una cicatriz", result: "exscar" }
        ]
    },

    // 2. RAMA FACIAL
    facial_branch: {
        question: "¿Cuál es tu principal preocupación en el rostro?",
        options: [
            { text: "Granitos, puntos negros o marcas de acné", result: "acne_protocol" },
            { text: "Rojeces constantes, ardor o rosácea", result: "rosacea_protocol" },
            { text: "Arrugas, flacidez o prevención antiedad general", result: "antiedad_protocol" },
            { text: "Fotoenvejecimiento o textura muy irregular (Uso de Retinoides)", nextId: "tazarene_branch" }
        ]
    },
    tazarene_branch: {
        question: "Para recomendarte la concentración ideal de retinoide, ¿cómo es tu piel?",
        options: [
            { text: "Piel con tendencia grasa o mixta", result: "tazarene_oily" },
            { text: "Piel con tendencia seca", result: "tazarene_dry" }
        ]
    },

    // 3. RAMA CAPILAR
    hair_branch: {
        question: "¿Qué síntomas notas exactamente en tu cabeza?",
        options: [
            { text: "Noto que se me cae mucho el pelo o pierde densidad", result: "hairgen_protocol" },
            { text: "Tengo caspa muy gruesa, placas rojas y secas que pican", result: "bionatar_protocol" },
            { text: "Tengo caspa amarillenta, exceso de grasa y picor", result: "oliprox_protocol" }
        ]
    },

    // 4. RAMA SOLAR
    sun_branch: {
        question: "¿Qué tipo de protección solar estás buscando?",
        options: [
            { text: "Protección facial diaria de muy alta eficacia (SPF 50+)", result: "prototype_face50" },
            { text: "Protección facial diaria con un toque de color (BB Cream)", result: "prototype_bb" },
            { text: "Protector corporal y facial para toda la familia y niños", result: "prototype_kids" }
        ]
    }
};