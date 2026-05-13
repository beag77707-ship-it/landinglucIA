import React, { useState } from 'react';

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Pega aquí la URL que te dará el Google Apps Script
  const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzSoTFh7LC-VRDuNnlk2rFc4G7rP-xq_89BAbw2DW-ek66Wj_IAf4PLoZoLHk6jqZcE/exec";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Recoger todos los checkboxes seleccionados
    const doloresSeleccionados = formData.getAll('dolor_principal');
    data['dolor_principal'] = doloresSeleccionados.join(', ') as string;

    try {
      // Enviamos a Google Apps Script usando "no-cors"
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setIsSuccess(true);
    } catch (error) {
      console.error("Error enviando el formulario:", error);
      setIsSuccess(true); 
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 font-sans pb-24">
      {/* Navbar Minimalista */}
      <nav className="w-full max-w-6xl mx-auto px-6 py-8 flex justify-between items-center z-50 relative">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Quboss Media" className="h-6 w-auto" />
          <span className="font-medium tracking-[0.2em] text-sm opacity-80 border-l border-white/20 pl-3">lucIA</span>
        </div>
        <a href="#acceso" className="text-sm font-medium hover:text-blue-400 transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10">
          Solicitar Acceso
        </a>
      </nav>

      {/* Hero Section */}
      <main className="relative w-full max-w-6xl mx-auto px-6 pt-12 md:pt-24 flex flex-col items-center">
        {/* Gradiente Radial de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Etiqueta Exclusiva */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium mb-10 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Estamos seleccionando las primeras marcas personales
        </div>

        {/* Titular */}
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-center leading-[1.1] max-w-5xl z-10">
          Publica contenido todos los días <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            sin grabarte todos los días.
          </span>
        </h1>

        {/* Subtexto */}
        <p className="mt-8 text-lg md:text-xl text-gray-400 font-light text-center max-w-2xl leading-relaxed z-10">
          Creamos tu avatar digital, tus guiones y tu contenido automatizado. 
          Escala en redes sociales y ahorra docenas de horas cada semana.
        </p>

        {/* Visual Mockup Section - Infographic */}
        <div className="relative mt-20 w-full max-w-5xl rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a]/50 backdrop-blur-md z-10 shadow-[0_20px_100px_-20px_rgba(59,130,246,0.15)] flex flex-col items-center justify-center p-8 md:p-16">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />
           
           <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl gap-4 md:gap-8 z-10 relative">
             
             {/* Step 1: Guiones */}
             <div className="flex-1 w-full bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center shadow-lg hover:bg-white/10 transition-colors">
               <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 2v7h7M10 12h4m-4 4h4"></path></svg>
               </div>
               <h3 className="text-xl font-bold text-white mb-2">1. Guiones IA</h3>
               <p className="text-sm text-gray-400">Generación automática de ideas y textos.</p>
             </div>

             {/* Arrow */}
             <div className="hidden md:flex flex-col items-center justify-center opacity-50">
               <svg className="w-8 h-8 text-blue-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
             </div>

             {/* Step 2: Avatar */}
             <div className="flex-1 w-full bg-white/5 border border-blue-500/30 p-6 rounded-2xl flex flex-col items-center text-center shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden group">
               <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
               <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(59,130,246,0.5)] z-10">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
               </div>
               <h3 className="text-xl font-bold text-white mb-2 z-10">2. Avatar Digital</h3>
               <p className="text-sm text-blue-200 z-10">Clon realista hiper-preciso en vídeo.</p>
             </div>

             {/* Arrow */}
             <div className="hidden md:flex flex-col items-center justify-center opacity-50">
               <svg className="w-8 h-8 text-blue-400 animate-pulse delay-75" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
             </div>

             {/* Step 3: Contenido */}
             <div className="flex-1 w-full bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center shadow-lg hover:bg-white/10 transition-colors">
               <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                 <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
               </div>
               <h3 className="text-xl font-bold text-white mb-2">3. Vídeo Listo</h3>
               <p className="text-sm text-gray-400">Exportado, editado y listo para publicar.</p>
             </div>

           </div>

           <div className="mt-12 text-center z-10">
              <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400 tracking-tight drop-shadow-sm pb-4">
                Sin grabarte ni un segundo.
              </h2>
           </div>
        </div>

        {/* Formulario (Acceso) */}
        <div id="acceso" className="mt-32 w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 relative z-10 shadow-2xl">
          <h2 className="text-3xl font-bold mb-2">Acceso Anticipado a LucIA</h2>
          <p className="text-gray-400 mb-8 text-sm">Rellena el formulario para entrar en la lista de espera exclusiva. Todos los campos son obligatorios.</p>

          {isSuccess ? (
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">¡Solicitud enviada!</h3>
              <p className="text-blue-200 text-sm">Hemos recibido tus datos correctamente. Nuestro equipo revisará tu perfil y te contactaremos muy pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm font-medium text-gray-300">Nombre completo</label>
                  <input required type="text" id="nombre" name="nombre" placeholder="Ana García" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Correo electrónico</label>
                  <input required type="email" id="email" name="email" placeholder="hola@ejemplo.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="instagram" className="text-sm font-medium text-gray-300">Instagram / Marca</label>
                <input required type="text" id="instagram" name="instagram" placeholder="@tu_marca_aqui" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
              </div>

              <div className="space-y-2">
                <label htmlFor="motivo" className="text-sm font-medium text-gray-300">¿Por qué quieres crear tu avatar digital?</label>
                <textarea required id="motivo" name="motivo" rows={3} placeholder="Cuéntanos brevemente tu objetivo..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"></textarea>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-300 block mb-3">¿Qué te quita más tiempo actualmente? (Puedes elegir varias)</label>
                
                {[
                  { id: 'grabar', label: 'Grabar vídeos' },
                  { id: 'editar', label: 'Editar' },
                  { id: 'guiones', label: 'Pensar guiones' },
                  { id: 'publicar', label: 'Publicar constantemente' },
                  { id: 'escalar', label: 'Escalar contenido' }
                ].map((option) => (
                  <label key={option.id} className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 cursor-pointer transition-colors group">
                    <div className="relative flex items-center">
                      <input type="checkbox" name="dolor_principal" value={option.label} className="peer sr-only" />
                      <div className="w-5 h-5 rounded-md border border-gray-500 peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all flex items-center justify-center">
                        <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{option.label}</span>
                  </label>
                ))}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full mt-4 bg-white text-black hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold py-4 px-8 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.2)] flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Procesando...</span>
                ) : (
                  <>
                    Quiero mi avatar digital
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </main>

      <footer className="mt-24 border-t border-white/5 pt-8 text-center">
        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Quboss Media. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
