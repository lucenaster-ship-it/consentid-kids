import { motion } from "motion/react";
import { ShieldCheck, AlertTriangle, CheckCircle, ArrowRight, Instagram, Lock, Zap, BarChart3, Users, Mail, Phone, MessageSquare } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="font-sans font-bold text-xl tracking-tight text-slate-900">ConsentID <span className="text-blue-600">Kids</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#problema" className="hover:text-blue-600 transition-colors">O Problema</a>
            <a href="#solucao" className="hover:text-blue-600 transition-colors">Solução</a>
            <a href="#como-funciona" className="hover:text-blue-600 transition-colors">Como Funciona</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Login</button>
            <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-white grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             className="lg:col-span-7"
          >
            <div className="risk-alert mb-8">
              🚨 Alerta de Risco Digital
            </div>
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Não perca seu <span className="gradient-instagram">Instagram</span> por falta de consentimento.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              O uso de imagens de crianças sem prova de validação é a maior causa de banimentos em contas de marketing. Proteja seu faturamento hoje.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="p-4 border border-slate-100 rounded-2xl bg-white shadow-sm">
                <div className="text-3xl font-extrabold text-red-500">82%</div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mt-1">Denúncias fatais</div>
              </div>
              <div className="p-4 border border-slate-100 rounded-2xl bg-white shadow-sm">
                <div className="text-3xl font-extrabold text-slate-900">100%</div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mt-1">Provas Digitais</div>
              </div>
              <div className="p-4 border border-slate-100 rounded-2xl bg-white shadow-sm">
                <div className="text-3xl font-extrabold text-blue-600">0ms</div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mt-1">Risco Residual</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Quero Proteger meu Marketing
              </button>
              <button className="w-full sm:w-auto bg-white text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg border border-slate-200 hover:border-slate-300 transition-all">
                Ver Demo
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative bg-white rounded-[2.5rem] shadow-premium p-8 border border-white">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-xs font-bold text-slate-400 tracking-widest">SCANNER DE IA v2.4</div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase">Validado</div>
                </div>
                
                <div className="aspect-square w-full bg-slate-100 rounded-2xl overflow-hidden mb-8 shadow-inner border border-slate-200/50">
                  <img src="https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=1469&auto=format&fit=crop" alt="Scan child athlete" className="w-full h-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-black/60 to-transparent">
                    <div className="flex items-center gap-2 text-white">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">Análise em tempo real</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                   <div className="flex items-center justify-between">
                     <span className="text-slate-600 text-sm font-medium">Segurança de Consentimento</span>
                     <span className="text-green-600 font-bold">98%</span>
                   </div>
                   <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                     <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "98%" }}
                        transition={{ duration: 1, delay: 1 }}
                        className="h-full bg-green-500 rounded-full" 
                     />
                   </div>
                   <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-200">
                       <CheckCircle className="w-5 h-5" />
                     </div>
                     <div>
                       <p className="text-[10px] uppercase font-extrabold text-blue-600 leading-none mb-1">Prova Registrada</p>
                       <p className="text-sm text-slate-700 font-semibold tracking-tight">ID: #4882-X. Assinado via WhatsApp.</p>
                     </div>
                   </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-36 px-4 py-3 bg-yellow-400 rounded-2xl rotate-6 shadow-xl border-4 border-white">
                <p className="text-[10px] font-black uppercase text-black leading-tight mb-1">Risco de Denúncia</p>
                <p className="text-2xl font-black text-black">BAIXO</p>
              </div>
              <div className="absolute -bottom-6 -left-6 w-36 px-4 py-3 bg-slate-900 rounded-2xl -rotate-6 shadow-xl border-4 border-slate-800">
                <p className="text-[10px] font-black uppercase text-white/50 leading-tight mb-1 tracking-widest">Instagram</p>
                <p className="text-2xl font-black text-green-400 uppercase tracking-tight">Safe</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ProblemSection() {
  const problems = [
    {
      icon: <Users className="w-6 h-6 text-red-500" />,
      title: "Sem controle de consentimento",
      description: "Você publica e depois reza para que ninguém denuncie ou peça para remover."
    },
    {
      icon: <Lock className="w-6 h-6 text-red-500" />,
      title: "Contratos genéricos",
      description: "Documentos em papel que se perdem e não têm validade específica para uso digital moderno."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      title: "Risco invisível",
      description: "Uma única denúncia pode ser gatilho para o Instagram banir sua conta permanentemente."
    }
  ];

  return (
    <section id="problema" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
            O marketing digital com crianças é um <span className="text-red-600 italic">terreno perigoso.</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg">
            Muitas empresas focam na estética do post, ignorando que o maior risco é o bloqueio do canal de vendas principal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-premium"
            >
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-8">
                {p.icon}
              </div>
              <h3 className="font-sans font-bold text-2xl mb-4 text-slate-900">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ImpactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-sans text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 leading-tight tracking-tighter">
              Uma única denúncia pode interromper <br />
              <span className="text-red-600 underline decoration-red-200 underline-offset-8 decoration-4">meses de investimento.</span>
            </h2>
            
            <div className="space-y-8">
              {[
                { label: "Campanha perdida", text: "Remoção imediata de conteúdos patrocinados ativos." },
                { label: "Cliente insatisfeito", text: "Dano de imagem para sua agência ou sua escola." },
                { label: "Retrabalho", text: "Ter que regravar ou reeditar vídeos por falta de permissão." },
                { label: "Bloqueio de conta", text: "O Instagram não pergunta, ele suspende por segurança." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-red-100 flex items-center justify-center mt-0.5">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-1">{item.label}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-slate-900 rounded-[2rem] text-white border-l-4 border-blue-600 shadow-2xl">
              <p className="italic text-lg opacity-90 leading-relaxed">
                "O maior risco não é jurídico. É perder o acesso ao seu maior ativo: seu perfil do Instagram e suas campanhas de tráfego pago."
              </p>
            </div>
          </div>

          <div className="relative">
             <div className="absolute -inset-8 bg-blue-600/5 rounded-[3rem] blur-3xl opacity-50" />
             <div className="relative bg-white border border-slate-200 rounded-[3rem] p-10 shadow-premium">
                <div className="flex items-center gap-5 mb-10 pb-10 border-b border-slate-100">
                   <div className="w-14 h-14 bg-linear-to-tr from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <Instagram className="text-white w-7 h-7" />
                   </div>
                   <div>
                      <p className="font-bold text-xl text-slate-900">Notificação do Sistema</p>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Alerta crítico</p>
                   </div>
                </div>
                <div className="space-y-6">
                   <div className="p-5 bg-red-50 border border-red-100 rounded-2xl">
                      <p className="text-red-900 font-bold mb-1">Conteúdo desativado</p>
                      <p className="text-sm text-red-700 leading-relaxed">Seu vídeo foi removido devido a uma denúncia de uso indevido de imagem infantil.</p>
                   </div>
                   <div className="p-5 bg-amber-50 border border-amber-100 rounded-2xl">
                      <p className="text-amber-900 font-bold mb-1">Conta sob revisão</p>
                      <p className="text-sm text-amber-700 leading-relaxed">O alcance orgânico da sua conta foi limitado por 30 dias até validação de prova.</p>
                   </div>
                </div>
                <div className="mt-10 pt-10 flex justify-between items-center text-xs font-black tracking-[0.2em] text-slate-400">
                   <span>PREJUÍZO ESTIMADO EM ADS</span>
                   <span className="text-red-600 text-lg tracking-normal">R$ -12.450</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
