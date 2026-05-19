(function() {
    const checkInterval = setInterval(() => {
        const footer = document.querySelector('footer');
        if (footer && !document.getElementById('publikeno-contact-form')) {
            const contactSection = document.createElement('section');
            contactSection.id = 'contacto';
            contactSection.className = 'py-20 bg-slate-900 text-white';
            contactSection.innerHTML = `
                <div class="container mx-auto px-4 max-w-4xl">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
                        <p class="text-gray-400">Envíanos un mensaje y te responderemos a la brevedad.</p>
                    </div>
                    <form action="https://formspree.io/f/xpwqnzre" method="POST" class="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700" id="publikeno-contact-form">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label class="block text-sm font-medium mb-2">Nombre Completo</label>
                                <input type="text" name="name" required class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-2">Correo Electrónico</label>
                                <input type="email" name="email" required class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                            </div>
                        </div>
                        <div class="mb-6">
                            <label class="block text-sm font-medium mb-2">Teléfono / WhatsApp</label>
                            <input type="tel" name="phone" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                        </div>
                        <div class="mb-6">
                            <label class="block text-sm font-medium mb-2">¿En qué podemos ayudarte?</label>
                            <textarea name="message" rows="4" required class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition duration-300 transform hover:scale-[1.02]">
                            Enviar Mensaje
                        </button>
                        <div id="form-status" class="mt-4 text-center hidden"></div>
                    </form>
                </div>
            `;
            footer.parentNode.insertBefore(contactSection, footer);
            clearInterval(checkInterval);
            
            // Manejo del envío del formulario
            const form = document.getElementById('publikeno-contact-form');
            const status = document.getElementById('form-status');
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const data = new FormData(form);
                status.textContent = 'Enviando...';
                status.className = 'mt-4 text-center text-blue-400';
                status.classList.remove('hidden');
                
                try {
                    const response = await fetch(form.action, {
                        method: 'POST',
                        body: data,
                        headers: { 'Accept': 'application/json' }
                    });
                    if (response.ok) {
                        status.textContent = '¡Gracias! Tu mensaje ha sido enviado correctamente.';
                        status.className = 'mt-4 text-center text-green-400';
                        form.reset();
                    } else {
                        status.textContent = 'Hubo un error. Por favor, intenta de nuevo.';
                        status.className = 'mt-4 text-center text-red-400';
                    }
                } catch (error) {
                    status.textContent = 'Error de conexión. Intenta más tarde.';
                    status.className = 'mt-4 text-center text-red-400';
                }
            });
        }
    }, 1000);
})();
