// data.js - Base de datos clínica de Olyan Farma

const productsDB = {
    acmed: {
        name: "Acmed™ Cream (Ácido Azelaico 20%)",
        image: "https://olyanfarma.es/wp-content/uploads/2021/04/acmed-crema-olyan-farma-1.png",
        desc: "Tratamiento de choque para el acné inflamatorio, marcas post-acné y control del sebo. Alta tolerancia.",
        tag: "Primera Elección Acné"
    },
    tazarene: {
        name: "Tazarene™ (Tazaroteno)",
        image: "https://olyanfarma.es/wp-content/uploads/2021/11/tazarene-01-olyan-farma.png",
        desc: "Retinoide tópico indicado para acné en pieles maduras, fotoenvejecimiento y reducción de hiperqueratosis.",
        tag: "Renovación Celular"
    },
    bionatar: {
        name: "Bionatar™ Champú / Crema",
        image: "https://olyanfarma.es/wp-content/uploads/2021/04/bionatar-champu-olyan-farma.png",
        desc: "Alivio intensivo para los síntomas de la psoriasis y dermatitis seborreica. Elimina las placas y calma el cuero cabelludo.",
        tag: "Tratamiento Psoriasis"
    },
    policalm: {
        name: "Policalm™ Cream",
        image: "https://olyanfarma.es/wp-content/uploads/2021/04/policalm-crema-olyan-farma.png",
        desc: "Calmante antipruriginoso muy potente. Ideal para picores severos, piel atópica y sequedad extrema.",
        tag: "Alivio Inmediato"
    },
    exscar: {
        name: "eXscar™ Cream",
        image: "https://olyanfarma.es/wp-content/uploads/2021/04/Exscar-boderm-olyan-farma.png",
        desc: "Producto sanitario para mejorar la elasticidad y apariencia de cicatrices antiguas y disminuir la formación de nuevas.",
        tag: "Reparación Dérmica"
    }
};

const decisionTree = {
    start: {
        question: "Seleccione el área dermatológica principal a evaluar:",
        options: [
            { text: "Acné, Imperfecciones y Piel Grasa", nextId: "acne_branch" },
            { text: "Piel Sensible, Rojeces o Picor", nextId: "sensible_branch" },
            { text: "Afecciones del Cuero Cabelludo", nextId: "hair_branch" },
            { text: "Cicatrices y Reparación Cutánea", result: "exscar" }
        ]
    },
    acne_branch: {
        question: "¿Qué característica define mejor la condición del paciente?",
        options: [
            { text: "Acné inflamatorio y/o marcas oscuras (post-acné)", result: "acmed" },
            { text: "Acné asociado a fotoenvejecimiento o piel madura", result: "tazarene" }
        ]
    },
    sensible_branch: {
        question: "¿Cuál es el síntoma predominante?",
        options: [
            { text: "Picor intenso, irritación y sequedad extrema", result: "policalm" },
            { text: "Placas con escamas gruesas (sospecha de psoriasis)", result: "bionatar" }
        ]
    },
    hair_branch: {
        question: "¿Qué afección capilar presenta?",
        options: [
            { text: "Descamación severa y placas (Dermatitis/Psoriasis)", result: "bionatar" }
        ]
    }
};