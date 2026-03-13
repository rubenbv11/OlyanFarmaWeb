// script.js - Lógica, Transiciones y Funciones Premium

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

// Pantalla de carga simulada
function showLoading(productId) {
    appContent.innerHTML = `
        <div class="loader-container" style="display: flex;">
            <div class="loader"></div>
            <p class="loading-text">Generando protocolo dermatológico...</p>
        </div>
    `;

    setTimeout(() => {
        renderResult(productId);
    }, 2000);
}

// Renderizar Resultado con Funciones Premium (PDF y Localizador)
function renderResult(productId) {
    const product = productsDB[productId];
    let contentHtml = '';

    // Construcción visual del producto/protocolo
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
            <div id="print-area">
                <span class="medical-tag">${product.tag}</span>
                <h3 class="product-name" style="font-size: 1.3rem;">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div style="margin-bottom: 25px;">${itemsHtml}</div>
            </div>
        `;
    } else {
        contentHtml = `
            <div id="print-area">
                <span class="medical-tag">${product.tag}</span>
                <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='img/Logo_OYLAN_2022-alta.png'">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
            </div>
        `;
    }

    // Botones Premium inyectados al final
    appContent.innerHTML = `
        <div class="result-container step-active" style="display: block;">
            ${contentHtml}
            
            <div class="action-buttons no-print">
                <button class="btn-primary" onclick="window.print()">📄 Guardar Receta (PDF)</button>
                <button class="btn-outline" onclick="showPharmacyLocator()">📍 Dónde Comprar</button>
                <button class="btn-text" onclick="renderQuestion('start')">↺ Hacer otra consulta</button>
            </div>

            <div id="pharmacy-locator" class="no-print" style="display:none; margin-top: 20px; padding: 15px; background: #f0f7f8; border-radius: 10px; text-align: left;">
                <p style="margin:0 0 10px 0; font-size: 0.9rem; font-weight:600; color:#2c3e50;">Introduce tu Código Postal:</p>
                <div style="display:flex; gap:10px;">
                    <input type="text" placeholder="Ej. 28001" style="flex:1; padding:10px; border:1px solid #cbd5e0; border-radius:5px; font-size: 1rem;">
                    <button id="search-btn" class="btn-primary" style="width:auto; padding:10px 20px; border-radius:5px;" onclick="simulateSearch()">Buscar</button>
                </div>
                <div id="pharmacy-results" style="display:none; margin-top: 15px; font-size: 0.85rem; color: #285e61; background: #e6fffa; padding: 10px; border-radius: 5px;">
                    <strong>✅ ¡Hay 3 farmacias cerca!</strong><br>
                    Tienen stock de tu protocolo dermatológico. (Esta función se conectará a la base de datos real).
                </div>
            </div>
        </div>
    `;
}

// Funciones del Localizador
function showPharmacyLocator() {
    document.getElementById('pharmacy-locator').style.display = 'block';
}

function simulateSearch() {
    const btn = document.getElementById('search-btn');
    btn.innerHTML = "⌛";
    setTimeout(() => {
        btn.innerHTML = "Buscar";
        document.getElementById('pharmacy-results').style.display = 'block';
    }, 1200);
}

// INICIALIZACIÓN
renderQuestion('start');

// ====== ANIMACIONES DE SCROLL ======
document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll(".reveal");
    const revealOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);
    reveals.forEach(reveal => revealOnScroll.observe(reveal));
});