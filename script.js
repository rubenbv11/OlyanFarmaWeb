// script.js - Lógica y transiciones de la App (Versión Definitiva con Protocolos)

const appContent = document.getElementById('app-content');

// Función para renderizar una pregunta
function renderQuestion(nodeId) {
    const node = decisionTree[nodeId];
    
    let optionsHtml = node.options.map(opt => {
        const action = opt.result ? `showLoading('${opt.result}')` : `renderQuestion('${opt.nextId}')`;
        return `<button class="option-card" onclick="${action}">${opt.text}</button>`;
    }).join('');

    appContent.innerHTML = `
        <div class="step-container step-active">
            <h2>${node.question}</h2>
            <div class="cards-container">
                ${optionsHtml}
            </div>
        </div>
    `;
}

// Función de carga simulada
function showLoading(productId) {
    appContent.innerHTML = `
        <div class="loader-container" style="display: flex;">
            <div class="loader"></div>
            <p class="loading-text">Analizando parámetros clínicos...</p>
        </div>
    `;

    setTimeout(() => {
        renderResult(productId);
    }, 2000);
}

// Función para renderizar el resultado final (Soporta Producto Único y Listas)
function renderResult(productId) {
    const product = productsDB[productId];
    let contentHtml = '';

    // Si el producto es una gama completa (Protocolo)
    if (product.isProtocol) {
        let itemsHtml = product.items.map(item => `
            <div style="display: flex; align-items: center; text-align: left; background: #f4f9fa; padding: 12px; border-radius: 10px; margin-bottom: 12px; border: 1px solid #e2e8f0;">
                <img src="${item.img}" alt="${item.name}" style="width: 50px; height: auto; margin-right: 15px; border-radius: 6px;" onerror="this.style.display='none'">
                <div>
                    <strong style="color: #2c3e50; font-size: 0.95rem; display: block;">${item.name}</strong>
                    <span style="font-size: 0.8rem; color: #718096;">${item.type}</span>
                </div>
            </div>
        `).join('');

        contentHtml = `
            <span class="medical-tag">${product.tag}</span>
            <h3 class="product-name" style="font-size: 1.3rem;">${product.name}</h3>
            <p class="product-desc">${product.desc}</p>
            <div style="margin-bottom: 25px;">
                ${itemsHtml}
            </div>
        `;
    } 
    // Si es un producto único
    else {
        contentHtml = `
            <span class="medical-tag">${product.tag}</span>
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='img/Logo_OYLAN_2022-alta.png'">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-desc">${product.desc}</p>
        `;
    }

    appContent.innerHTML = `
        <div class="result-container step-active" style="display: block;">
            ${contentHtml}
            <button class="btn-primary" style="margin-top: 15px;" onclick="renderQuestion('start')">Realizar nueva consulta</button>
        </div>
    `;
}

// INICIALIZACIÓN
renderQuestion('start');

// ====== ANIMACIONES DE SCROLL (INTERSECTION OBSERVER) ======
document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll(".reveal");

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});