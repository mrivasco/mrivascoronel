// app.js
// JS mínimo para:
// 1) Scroll al formulario desde los CTAs.
// 2) Validación simple del formulario de leads.

/**
 * Función auxiliar para hacer scroll suave a un elemento
 * @param {HTMLElement} element
 */
function smoothScrollTo(element) {
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.addEventListener("DOMContentLoaded", function () {
    const scrollBtnTop = document.getElementById("scroll-to-form");
    const scrollBtnBottom = document.getElementById("scroll-to-form-bottom");
    const leadForm = document.getElementById("lead-form");
    const formFeedback = document.getElementById("form-feedback");

    const formSection = document.getElementById("form-title");

    // Eventos de los botones de CTA que hacen scroll al formulario
    if (scrollBtnTop) {
        scrollBtnTop.addEventListener("click", function () {
            smoothScrollTo(formSection);
        });
    }

    if (scrollBtnBottom) {
        scrollBtnBottom.addEventListener("click", function () {
            smoothScrollTo(formSection);
        });
    }

    // Validación simple de formulario
    if (leadForm && formFeedback) {
        leadForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const nombre = leadForm.nombre.value.trim();
            const email = leadForm.email.value.trim();
            const perfil = leadForm.perfil.value;

            // Validación básica en el cliente
            if (!nombre || !email || !perfil) {
                formFeedback.textContent =
                    "Por favor, completa los campos obligatorios.";
                formFeedback.style.color = "#b91c1c"; // rojo oscuro
                return;
            }

            // Validación muy simple de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formFeedback.textContent = "Ingresa un correo electrónico válido.";
                formFeedback.style.color = "#b91c1c";
                return;
            }

            // Si pasa la validación, mostramos mensaje de éxito
            formFeedback.textContent =
                "¡Gracias! Hemos registrado tu interés en las novedades de GPT-5.";
            formFeedback.style.color = "#047857"; // verde

            // Opcional: limpiar campos
            leadForm.reset();
        });
    }
});
