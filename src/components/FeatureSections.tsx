import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, Zap, Shield, AlertCircle, Play, Smartphone, FileCheck, Check, Plus, MessageSquare, Instagram } from "lucide-react";

export function SolutionSection() {
  const features = [
    {
      title: "Coleta Inteligente",
      icon: <Smartphone className="w-6 h-6" />,
      desc: "Coleta inteligente de prova jurídica com carimbo de tempo e ID digital via WhatsApp."
    },
    {
      title: "Prova de Registro",
      icon: <FileCheck className="w-6 h-6" />,
      desc: "Cada consentimento gera um hash único para provar que você foi autorizado publicamente."
    },
    {
      title: "Risco Residual Zero",
      icon: <Zap className="w-6 h-6" />,
      desc: "O sistema valida se a imagem ou vídeo possui a autorização correta antes do upload."
    }
  ];

  return (
    <section id="solucao" className="py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-bold text-xs tracking-[0.3em] uppercase">A Solução ConsentID</span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-white mt-6 mb-8 leading-tight">
            A primeira plataforma que <br />
            <span className="text-blue-500 font-sans">valida antes de publicar.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg whitespace-pre-line">
            Não somos apenas um contrato digital. 
            Somos seu firewall contra denúncias e perdas financeiras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-10 bg-slate-800/40 border border-slate-700/50 rounded-[2rem] hover:bg-slate-800 transition-all group">
              <div className="w-14 h-14 bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-400 mb-8 border border-blue-800/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight font-sans">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RiskAnalysisDemo() {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<null | 'safe' | 'low' | 'high'>(null);

  const runAnalysis = () => {
    setAnalyzing(true);
    setResult(null);
    setTimeout(() => {
      setAnalyzing(false);
      setResult('safe');
    }, 2500);
  };

  return (
    <section className="py-24 bg-white grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mb-8 uppercase tracking-widest border border-slate-200">
           <Zap className="w-3 h-3 text-blue-500 fill-blue-500" /> Scanner de IA v2.4
        </div>
        <h2 className="font-sans text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">Score de Segurança em Tempo Real</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
          Nossa tecnologia exclusiva analisa o contexto da imagem e cruza com os consentimentos ativos para dar nota à segurança do seu marketing.
        </p>

        <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-[3rem] p-8 md:p-14 shadow-premium relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative group overflow-hidden rounded-[2rem] bg-slate-200 aspect-square flex items-center justify-center border-8 border-slate-50 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1438&auto=format&fit=crop" alt="Marketing session" className={`w-full h-full object-cover transition-all duration-700 ${analyzing ? 'blur-md scale-110 grayscale' : ''}`} />
                {analyzing && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/60 text-white backdrop-blur-sm">
                    <div className="w-16 h-16 border-4 border-white/20 border-t-blue-400 rounded-full animate-spin mb-6" />
                    <p className="font-bold text-sm tracking-widest uppercase">Mapeando Rostos & Autorizações...</p>
                  </div>
                )}
                {!analyzing && !result && (
                  <button onClick={runAnalysis} className="absolute bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-2xl flex items-center gap-3 hover:bg-blue-700 hover:scale-105 transition-all text-lg">
                    <Play className="w-5 h-5 fill-white" /> Iniciar Escaneamento
                  </button>
                )}
                
                {result && (
                  <div className="absolute top-6 left-6 right-6">
                    <div className="flex justify-between items-start">
                       <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white shadow-lg">
                          <p className="text-[10px] font-black text-slate-400 uppercase leading-none mb-1">Metadados</p>
                          <p className="font-bold text-slate-900">Validado</p>
                       </div>
                       <div className="bg-green-500 p-3 rounded-xl shadow-lg animate-bounce">
                          <Check className="text-white w-6 h-6" />
                       </div>
                    </div>
                  </div>
                )}
             </div>

             <div className="text-left space-y-10">
                <div className="space-y-4">
                   <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Resultado do Protocolo</p>
                   <AnimatePresence mode="wait">
                      {!result ? (
                        <motion.div 
                          key="waiting" 
                          initial={{ opacity: 0 }} 
                          animate={{ opacity: 1 }} 
                          className="flex items-center gap-5 text-slate-400"
                        >
                          <div className="w-4 h-4 rounded-full bg-slate-300 animate-ping" />
                          <p className="font-bold text-xl uppercase tracking-tight">Aguardando Execução</p>
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="result" 
                          initial={{ x: 20, opacity: 0 }} 
                          animate={{ x: 0, opacity: 1 }}
                          className="flex items-center gap-6"
                        >
                          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center border-2 border-green-200">
                             <Shield className="w-8 h-8 text-green-600" />
                          </div>
                          <div>
                             <p className="font-sans font-black text-4xl text-green-600 uppercase tracking-tight">Status: SAFE</p>
                             <p className="text-slate-500 font-medium">98% de Confiança Digital • 0 Riscos Detectados</p>
                          </div>
                        </motion.div>
                      )}
                   </AnimatePresence>
                </div>
                
                <div className="space-y-4">
                   <div className="flex justify-between text-xs font-black text-slate-500 tracking-widest">
                      <span>SEGURANÇA DE CONTEÚDO</span>
                      <span className="text-blue-600">VALIDAÇÃO COMPLETA</span>
                   </div>
                   <div className="h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                      <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: result ? '98%' : '15%' }} 
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={`h-full rounded-full transition-colors duration-500 ${result ? 'bg-green-500' : 'bg-blue-400'}`} 
                      />
                   </div>
                </div>

                <div className="p-6 bg-blue-50/50 rounded-[2rem] border border-blue-100/50 shadow-inner">
                   <p className="text-xs font-black text-blue-600 mb-2 uppercase tracking-tighter">Prova Registrada</p>
                   <p className="text-lg text-slate-700 font-bold tracking-tight">ID: #4882-X. Assinado via WhatsApp em 22/04.</p>
                </div>

                <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                   Ver Relatório Completo de Segurança
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { 
      n: "01", 
      title: "Crie sua campanha", 
      desc: "Agrupe fotos e vídeos de um evento ou sessão de fotos.",
      phoneContent: (
        <div className="flex flex-col h-full bg-slate-900 text-white p-4 justify-center items-center text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl mb-4 flex items-center justify-center">
            <Plus className="w-8 h-8" />
          </div>
          <p className="font-bold">Nova Campanha</p>
          <p className="text-xs text-slate-400">Escola de Ballet - 2026</p>
        </div>
      )
    },
    { 
      n: "02", 
      title: "Envie via WhatsApp", 
      desc: "Os pais recebem um link intuitivo para validação biométrica.",
      phoneContent: (
        <div className="flex flex-col h-full bg-[#E5DDD5]">
          <div className="bg-[#075E54] p-3 flex items-center gap-2 text-white shadow-md">
            <div className="w-8 h-8 rounded-full bg-slate-300 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1374&auto=format&fit=crop" className="w-full h-full object-cover" />
            </div>
            <div className="leading-none">
              <p className="text-xs font-bold">Marketing Escola</p>
              <p className="text-[10px] opacity-70">online</p>
            </div>
          </div>
          <div className="flex-1 p-3 flex flex-col justify-end">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="bg-white p-2 rounded-lg rounded-tl-none shadow-sm text-[11px] max-w-[85%]"
            >
              <p className="text-slate-900 font-medium mb-1">Olá! Precisamos da sua autorização para o vídeo do Ballet.</p>
              <p className="text-blue-600 underline">consentid.kids/campanha/9821</p>
              <p className="text-[9px] text-slate-400 text-right mt-1">14:02</p>
            </motion.div>
          </div>
          <div className="p-2 bg-slate-100 flex gap-2">
            <div className="flex-1 bg-white rounded-full h-8 px-3 flex items-center text-slate-400 text-[10px]">Mensagem</div>
          </div>
        </div>
      )
    },
    { 
      n: "03", 
      title: "Assinatura instantânea", 
      desc: "Validamos a identidade e coletamos o consentimento em 30s.",
      phoneContent: (
        <div className="flex flex-col h-full bg-white p-4">
          <div className="flex items-center gap-2 mb-6 text-slate-900">
             <Shield className="w-4 h-4 text-blue-600" />
             <span className="text-[10px] font-black uppercase tracking-tighter">ConsentID Proxy</span>
          </div>
          <p className="text-xs font-bold text-slate-900 mb-2">Termo de Uso de Imagem</p>
          <div className="bg-slate-50 p-2 rounded border border-slate-100 text-[9px] text-slate-600 mb-6 max-h-24 overflow-hidden leading-tight">
            Autorizo o uso da imagem do meu filho(a) para fins de divulgação institucional e campanhas de marketing digital...
          </div>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-blue-200"
          >
            Assinar agora
          </motion.button>
          <p className="text-[8px] text-slate-400 text-center mt-4">Criptografia de ponta-a-ponta ativada.</p>
        </div>
      )
    },
    { 
      n: "04", 
      title: "Risco Residual Zero", 
      desc: "Antes de subir no Instagram, verifique se está 100% seguro.",
      phoneContent: (
        <div className="flex flex-col h-full bg-emerald-50 p-4 justify-center items-center text-center">
          <motion.div 
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            className="w-16 h-16 bg-emerald-500 rounded-full mb-4 flex items-center justify-center text-white shadow-xl shadow-emerald-200"
          >
            <Check className="w-8 h-8" />
          </motion.div>
          <p className="font-bold text-emerald-900 text-sm italic">Consentimento Validado</p>
          <p className="text-[10px] text-emerald-700 mt-2 font-medium">Hash #9821-X registrado no Blockchain.</p>
          <div className="mt-8 flex gap-2">
            <Instagram className="w-4 h-4 text-emerald-400" />
            <Smartphone className="w-4 h-4 text-emerald-400" />
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900 uppercase">Simples. Geométrico. <span className="text-blue-600">Seguro.</span></h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto leading-relaxed">Elimine a burocracia sem abrir mão da segurança absoluta do seu canal de vendas.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            {steps.map((s, i) => (
              <motion.div 
                key={i} 
                onMouseEnter={() => setActiveStep(i)}
                onClick={() => setActiveStep(i)}
                className={`p-8 rounded-[2rem] border transition-all cursor-pointer ${activeStep === i ? 'bg-white border-blue-200 shadow-premium' : 'bg-transparent border-transparent grayscale opacity-50'}`}
              >
                <div className="flex gap-6 items-start">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-sans font-black text-xl border transition-colors ${activeStep === i ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-400 border-slate-200'}`}>
                    {s.n}
                  </div>
                  <div>
                    <h3 className="font-sans font-extrabold text-xl mb-2 text-slate-900 tracking-tight leading-tight">{s.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-[300px] h-[600px] bg-slate-900 rounded-[3rem] p-3 border-4 border-slate-800 shadow-2xl relative overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-2xl z-20 flex justify-center pt-1">
                  <div className="w-12 h-1 bg-slate-800 rounded-full" />
                </div>
                
                {/* Screen Content */}
                <div className="w-full h-full bg-slate-200 rounded-[2.2rem] overflow-hidden relative">
                   <AnimatePresence mode="wait">
                      <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full h-full"
                      >
                        {steps[activeStep].phoneContent}
                      </motion.div>
                   </AnimatePresence>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute -inset-10 bg-blue-600/10 rounded-[4rem] blur-3xl -z-10 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
