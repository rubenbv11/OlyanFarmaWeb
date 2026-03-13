// script.js - Lógica y transiciones de la App
// Nota: Las variables productsDB y decisionTree ya están disponibles porque se cargaron antes desde data.js

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

// Función para renderizar el resultado final
function renderResult(productId) {
    const product = productsDB[productId];

    appContent.innerHTML = `
        <div class="result-container step-active" style="display: block;">
            <span class="medical-tag">${product.tag}</span>
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/180x250?text=Imagen+Olyan'">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-desc">${product.desc}</p>
            <button class="btn-primary" onclick="renderQuestion('start')">Realizar nueva consulta</button>
        </div>
    `;
}

// INICIALIZACIÓN
renderQuestion('start');

// ====== ANIMACIONES DE SCROLL (INTERSECTION OBSERVER) ======
// Esto detecta cuando un elemento '.reveal' entra en la pantalla para animarlo
document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll(".reveal");

    const revealOptions = {
        threshold: 0.15, // Se activa cuando el 15% del elemento es visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Deja de observar una vez animado
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});