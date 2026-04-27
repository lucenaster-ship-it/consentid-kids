import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, HelpCircle, MessageSquare, Send, Instagram, Facebook, Linkedin, ShieldCheck } from "lucide-react";

export function ROICalculator() {
  const [postsPerMonth, setPostsPerMonth] = useState(10);
  const [costPerPost, setCostPerPost] = useState(500);
  const [penaltyCost, setPenaltyCost] = useState(5000);

  const platformCost = 99;
  const potentialLoss = (postsPerMonth * costPerPost) + penaltyCost;
  const monthlySavings = potentialLoss - platformCost;
  const roi = ((monthlySavings / platformCost) * 100).toLocaleString('pt-BR', { maximumFractionDigits: 0 });

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] pointer-events-none" />
           
           <div className="text-center mb-16">
              <h2 className="font-sans text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
                 Calculadora de <span className="text-blue-400 italic">ROI & Risco</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                 Descubra quanto você economiza ao proteger seu faturamento e sua conta do Instagram contra denúncias e bloqueios.
              </p>
           </div>

           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
              <div className="bg-slate-800/50 p-8 md:p-10 rounded-[2.5rem] border border-slate-700/50 space-y-8 shadow-inner">
                 <div className="space-y-4">
                    <div className="flex justify-between items-end">
                       <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-2">Posts com crianças /mês</label>
                       <span className="text-xl font-bold font-sans text-blue-400">{postsPerMonth}</span>
                    </div>
                    <input 
                      type="range" min="1" max="100" step="1" 
                      value={postsPerMonth} 
                      onChange={(e) => setPostsPerMonth(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                 </div>

                 <div className="space-y-4">
                    <div className="flex justify-between items-end">
                       <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-2">Investimento médio por post (R$)</label>
                       <span className="text-xl font-bold font-sans text-blue-400">R$ {costPerPost.toLocaleString('pt-BR')}</span>
                    </div>
                    <input 
                      type="range" min="100" max="5000" step="100" 
                      value={costPerPost} 
                      onChange={(e) => setCostPerPost(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                 </div>

                 <div className="space-y-4">
                    <div className="flex justify-between items-end">
                       <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-2">Custo de perda de conta/campanha (R$)</label>
                       <span className="text-xl font-bold font-sans text-blue-400">R$ {penaltyCost.toLocaleString('pt-BR')}</span>
                    </div>
                    <input 
                      type="range" min="500" max="50000" step="500" 
                      value={penaltyCost} 
                      onChange={(e) => setPenaltyCost(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                 </div>

                 <div className="pt-6 border-t border-slate-700/50">
                    <div className="flex justify-between items-center opacity-60">
                       <span className="text-xs font-bold uppercase tracking-widest">Custo ConsentID Kids</span>
                       <p className="text-lg font-bold">R$ {platformCost}/mês</p>
                    </div>
                 </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl p-10 md:p-12 rounded-[2.5rem] border border-white/10 text-center flex flex-col justify-center shadow-premium relative group overflow-hidden">
                 <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 <div className="relative z-10 space-y-10">
                    <div>
                       <p className="text-xs text-slate-400 font-black uppercase tracking-[0.3em] mb-4">Economia Potencial Mensal</p>
                       <p className="text-blue-500 text-6xl md:text-7xl font-black font-sans leading-none tracking-tighter mb-2">
                          R$ {monthlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                       </p>
                       <p className="text-sm font-bold text-slate-400">Risco total evitado por mês</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-6 bg-slate-800/80 rounded-2xl border border-slate-700 shadow-xl">
                          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">ROI Estimado</p>
                          <p className="text-2xl font-black text-emerald-400">{roi}%</p>
                       </div>
                       <div className="p-6 bg-slate-800/80 rounded-2xl border border-slate-700 shadow-xl">
                          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Status</p>
                          <p className="text-2xl font-black text-blue-400">PROTEGIDO</p>
                       </div>
                    </div>

                    <p className="text-slate-300 italic text-lg leading-relaxed">
                       "O custo da segurança é invisível até que o erro aconteça. Não espere o bloqueio."
                    </p>
                    
                    <button className="w-full bg-blue-600 py-6 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30 text-xs">
                       Garantir Minha Proteção
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    {
      q: "Preciso disso se já tenho contrato de gaveta?",
      a: "Sim, o Instagram não lê seus papéis físicos. Em caso de denúncia, você precisa de uma prova digital válida, instantânea e vinculada aos metadados do arquivo publicado."
    },
    {
      q: "Como funciona para os pais?",
      a: "Super simples. Você envia um link via WhatsApp, eles abrem no navegador do celular, leem os termos resumidos e assinam digitalmente. Leva menos de 30 segundos."
    },
    {
      q: "Isso é obrigatório?",
      a: "Pela LGPD e pelo ECA, sim. Mas para o seu negócio, é vital para evitar o 'Shadowban' ou a suspensão completa da conta por denúncia de uso indevido de imagem infantil."
    },
    {
      q: "Posso exportar os relatórios?",
      a: "Com certeza. Você tem um dashboard completo com histórico de todas as campanhas e consentimentos para apresentar em qualquer auditoria ou processo."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white grid-bg">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-sans text-4xl md:text-5xl font-black text-center mb-20 text-slate-900 uppercase tracking-tighter">Perguntas Frequentes</h2>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-premium group hover:border-blue-200 transition-all">
              <div className="flex gap-6">
                <HelpCircle className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                   <h3 className="font-sans font-black text-xl mb-4 tracking-tight text-slate-900 uppercase">{f.q}</h3>
                   <p className="text-slate-600 leading-relaxed text-lg">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
           <div className="flex flex-col justify-center">
              <div className="risk-alert mb-8 self-start">🛡️ Canal de Vendas Seguro</div>
              <h2 className="font-sans text-5xl md:text-6xl font-black mb-8 text-slate-900 leading-none tracking-tighter">
                Seu marketing <br /> depende do <br /> <span className="text-blue-600">Instagram.</span>
              </h2>
              <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
                Não deixe sua fonte de receitas em risco por uma burocracia mal resolvida. 
                Projeta seu canal digital em 24h.
              </p>
              
              <div className="space-y-5">
                 <div className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-bold text-slate-700">Trial gratuito de 7 dias</span>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-bold text-slate-700">Setup guiado em 15 minutos</span>
                 </div>
              </div>
           </div>

           <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-premium relative">
              <div className="absolute -top-4 right-10 bg-slate-900 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                 Ativação Imediata
              </div>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest pl-2">Nome</label>
                      <input required type="text" placeholder="Seu nome" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest pl-2">E-mail</label>
                      <input required type="email" placeholder="seu@email.com" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                     <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest pl-2">Empresa</label>
                        <input required type="text" placeholder="Marketing Agency" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium" />
                     </div>
                     <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest pl-2">WhatsApp</label>
                        <input required type="tel" placeholder="(00) 00000-0000" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium" />
                     </div>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3">
                    Quero proteger meu marketing <Send className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-slate-400 text-center uppercase font-black tracking-widest mt-6">Protocolo de Segurança Ativo em conformidade com LGPD.</p>
                </form>
              ) : (
                <div className="text-center py-16">
                   <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner border border-green-200">
                      <Check className="w-10 h-10 text-green-600" />
                   </div>
                   <h3 className="font-sans text-3xl font-black mb-4 uppercase tracking-tighter">Solicitação enviada!</h3>
                   <p className="text-slate-600 text-lg font-medium">Em instantes um especialista entrará em contato para liberar sua demonstração.</p>
                </div>
              )}
           </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 border-l border-slate-800">
           <div className="p-10 border-r border-slate-800 flex flex-col justify-center">
              <p className="text-slate-500 text-[10px] font-black uppercase mb-4 tracking-widest">O Problema</p>
              <p className="text-white text-sm leading-relaxed font-medium">Uma denúncia encerra meses de investimento e seu canal de vendas principal de forma irreversível.</p>
           </div>
           <div className="p-10 border-r border-slate-800 flex flex-col justify-center">
              <p className="text-slate-500 text-[10px] font-black uppercase mb-4 tracking-widest">A Solução</p>
              <p className="text-white text-sm leading-relaxed font-medium">Coleta inteligente de prova jurídica com carimbo de tempo e ID digital via biometria WhatsApp.</p>
           </div>
           <div className="p-10 border-r border-slate-800 flex flex-col justify-center">
              <p className="text-slate-500 text-[10px] font-black uppercase mb-4 tracking-widest">ROI Garantido</p>
              <p className="text-white text-sm leading-relaxed font-medium">Custo de perda: R$ 5k+. Custo do sistema: R$ 99/mês. Proteja o faturamento da sua empresa agora.</p>
           </div>
           <div className="p-10 flex flex-col justify-center bg-blue-600/[0.05]">
              <div className="flex flex-col gap-3">
                 <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-1">Acesso Rápido</p>
                 <input type="email" placeholder="E-mail profissional" className="bg-white/5 border border-slate-700 px-5 py-3 rounded-xl text-sm text-white outline-none focus:border-blue-500 transition-all font-medium" />
                 <button className="w-full bg-blue-600 text-white font-black py-4 rounded-xl text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all">
                    Ativar Demonstração Grátis
                 </button>
              </div>
           </div>
        </div>

        <div className="py-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">
           <div className="flex items-center gap-3 mb-6 md:mb-0">
             <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
               <div className="w-3 h-3 bg-white rounded-full"></div>
             </div>
             <span>ConsentID <span className="text-blue-600">Kids</span></span>
           </div>
           <div className="flex gap-8">
              <p>© 2026</p>
              <p className="hover:text-blue-500 cursor-pointer transition-colors">Termos</p>
              <p className="hover:text-blue-500 cursor-pointer transition-colors">Privacidade</p>
           </div>
        </div>
      </div>
    </footer>
  );
}
