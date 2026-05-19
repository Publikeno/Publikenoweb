(function() {
    const checkInterval = setInterval(() => {
        const footer = document.querySelector('footer');
        if (footer && !document.getElementById('publikeno-conversational-section')) {
            const contactSection = document.createElement('section');
            contactSection.id = 'contacto';
            contactSection.className = 'py-24 bg-slate-900 text-white border-t border-slate-800';
            contactSection.innerHTML = `
                <div class="container mx-auto px-4 max-w-4xl text-center" id="publikeno-conversational-section">
                    <div class="mb-12">
                        <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                            ¿Listo para escalar tu negocio?
                        </h2>
                        <p class="text-xl text-gray-400 mb-10 leading-relaxed">
                            Olvídate de los formularios lentos. Hablemos directamente por WhatsApp y descubre cómo podemos ayudarte a generar más leads hoy mismo.
                        </p>
                        
                        <div class="flex flex-col md:flex-row items-center justify-center gap-6">
                            <a href="https://wa.me/5219981545555?text=Hola%20Publikeno,%20me%20gustaría%20recibir%20una%20auditoría%20gratuita%20de%20mi%20negocio." 
                               style="background-color: #2563eb; color: white; padding: 1rem 2rem; border-radius: 0.75rem; font-weight: bold; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; width: 100%; max-width: 300px; transition: all 0.3s ease;"
                               onmouseover="this.style.backgroundColor='#1d4ed8'" 
                               onmouseout="this.style.backgroundColor='#2563eb'">
                                🚀 Solicitar Auditoría Gratuita
                            </a>
                            
                            <a href="https://wa.me/5219981545555?text=Hola%20Publikeno,%20quiero%20más%20información%20sobre%20sus%20servicios." 
                               style="border: 2px solid #60a5fa; color: #60a5fa; padding: 1rem 2rem; border-radius: 0.75rem; font-weight: bold; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; width: 100%; max-width: 300px; transition: all 0.3s ease;"
                               onmouseover="this.style.backgroundColor='#60a5fa'; this.style.color='white'" 
                               onmouseout="this.style.backgroundColor='transparent'; this.style.color='#60a5fa'">
                                💬 Chatear con un experto
                            </a>
                        </div>
                    </div>
                    
                    <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-500">
                        <div class="flex flex-col items-center">
                            <div class="mb-2 text-blue-500 font-bold">⚡ Respuesta inmediata</div>
                            <p>Atención personalizada en menos de 5 minutos.</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="mb-2 text-blue-500 font-bold">🎯 Estrategia a medida</div>
                            <p>Analizamos tu caso sin compromiso.</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="mb-2 text-blue-500 font-bold">🤖 Tecnología IA</div>
                            <p>Implementamos lo último en automatización.</p>
                        </div>
                    </div>
                </div>
            `;
            
            // Eliminar cualquier sección de contacto previa si existe
            const oldContact = document.getElementById('contacto');
            if (oldContact) oldContact.remove();
            
            footer.parentNode.insertBefore(contactSection, footer);
            clearInterval(checkInterval);
        }
    }, 1000);
})();
