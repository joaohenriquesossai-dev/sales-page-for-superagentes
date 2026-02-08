
import React, { useState } from 'react';

const App: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('annually');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const prices = {
    monthly: { operacional: 118, gerencial: 388, executivo: 1188 },
    annually: { operacional: 88, gerencial: 288, executivo: 888 }
  };

  // Links fornecidos pelo usuário
  const links = {
    operacional: {
      trial: {
        monthly: "https://checkout.stripe.com/c/pay/cs_live_b1VsNt0xx1o40wAw9bBA1v7vX2qsvqSyrbdY5wPO8C6lax2lyjHyQnaeVq#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSd2cGd2ZndsdXFsamtQa2x0cGBrYHZ2QGtkZ2lgYSc%2FcXdwYCknZHVsTmB8Jz8ndW5aaWxzYFowNFdJa2BER3BBcW1sQ3w3ZkIxQ3A8SmBWVFBjUF1%2FbzFgNUZgamZtcTRwNGJmPDMwYG1uUjRJRFNUT3A3V25yQmRmTzFuMm5fSEp9QVJvbHxuMGZRcEk8RDU1bzN3MHxBUlAnKSdjd2poVmB3c2B3Jz9xd3BgKSdnZGZuYndqcGthRmppancnPycmNDU0NTQ1JyknaWR8anBxUXx1YCc%2FJ2hwaXFsWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl",
        annually: "https://checkout.stripe.com/c/pay/cs_live_b1DUlQucF2lZZ65eVkrg4DSAsFcJAWRRsTutDuPjr7YcGoNHf3Mi1Uckso#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSd2cGd2ZndsdXFsamtQa2x0cGBrYHZ2QGtkZ2lgYSc%2FcXdwYCknZHVsTmB8Jz8ndW5aaWxzYFowNFdJa2BER3BBcW1sQ3w3ZkIxQ3A8SmBWVFBjUF1%2FbzFgNUZgamZtcTRwNGJmPDMwYG1uUjRJRFNUT3A3V25yQmRmTzFuMm5fSEp9QVJvbHxuMGZRcEk8RDU1bzN3MHxBUlAnKSdjd2poVmB3c2B3Jz9xd3BgKSdnZGZuYndqcGthRmppancnPycmNDU0NTQ1JyknaWR8anBxUXx1YCc%2FJ2hwaXFsWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl"
      },
      subscribe: {
        monthly: "https://go.hotmart.com/Q95877314B?ap=9348",
        annually: "https://go.hotmart.com/Q95877314B?ap=e37a"
      }
    },
    gerencial: {
      subscribe: {
        monthly: "https://go.hotmart.com/Q95877314B?ap=a28c",
        annually: "https://go.hotmart.com/Q95877314B?ap=5e3a"
      }
    },
    executivo: {
      subscribe: {
        monthly: "https://go.hotmart.com/Q95877314B?ap=eaa1",
        annually: "https://go.hotmart.com/Q95877314B?ap=7791"
      }
    }
  };

  const handleOpenLink = (url: string) => {
    if (url && url !== "#") {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">Super Agentes</div>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Acessar Plataforma
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 px-4 bg-gradient-to-b from-slate-100 to-white text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Transforme sua operação com Agentes de Inteligência Artificial que trabalham por você
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Automatize fluxos complexos, otimize a produtividade da sua equipe e recupere seu tempo através de uma gestão inteligente de processos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="px-8 py-4 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
            >
              Escolher Plano
            </button>
          </div>
        </div>
      </header>

      {/* Problem Section - Linked as 'Recursos' contextually */}
      <section id="recursos" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">O desafio de crescer sem perder a eficiência</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center md:text-left">
              <h3 className="font-bold text-lg mb-3">Sobrecarga Manual</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Horas gastas em tarefas que não agregam valor estratégico ao seu negócio.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center md:text-left">
              <h3 className="font-bold text-lg mb-3">Rotinas Repetitivas</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Processos que se repetem diariamente, drenando a energia da sua equipe.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center md:text-left">
              <h3 className="font-bold text-lg mb-3">Escala Limitada</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Dificuldade de atender mais clientes sem aumentar custos proporcionalmente.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center md:text-left">
              <h3 className="font-bold text-lg mb-3">Gargalos</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Informações descentralizadas e falta de automação contextualizada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Linked as 'Como funciona' */}
      <section id="como-funciona" className="py-20 bg-slate-900 text-white px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Conheça o Super Agentes: Sua infraestrutura de IA</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-12 max-w-4xl mx-auto">
            Desenvolvemos uma plataforma intuitiva que democratiza o uso de agentes inteligentes. 
            Crie, gerencie e implemente assistentes que executam atendimentos e organizam dados sem programação.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 bg-slate-800 rounded-3xl">
              <div className="text-blue-400 text-2xl font-bold mb-4">01</div>
              <h4 className="text-xl font-bold mb-2">Criação Simples</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Configure seus agentes através de interfaces visuais intuitivas.</p>
            </div>
            <div className="p-8 bg-slate-800 rounded-3xl">
              <div className="text-blue-400 text-2xl font-bold mb-4">02</div>
              <h4 className="text-xl font-bold mb-2">Gestão Centralizada</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Monitore todas as interações e o desempenho em um único painel.</p>
            </div>
            <div className="p-8 bg-slate-800 rounded-3xl">
              <div className="text-blue-400 text-2xl font-bold mb-4">03</div>
              <h4 className="text-xl font-bold mb-2">Zero Código</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Focado em resultados práticos para qualquer perfil profissional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-black text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Escolha o melhor plano para você</h2>
            <p className="text-slate-400 text-lg">Escolha um plano que atenda às suas necessidades e comece agora mesmo.</p>
            
            <div className="mt-10 flex items-center justify-center gap-4">
              <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-white' : 'text-slate-500'}`}>Mensal</span>
              <button 
                onClick={() => setBillingPeriod(prev => prev === 'monthly' ? 'annually' : 'monthly')}
                className="w-12 h-6 bg-slate-700 rounded-full relative p-1 transition-all"
              >
                <div className={`w-4 h-4 bg-white rounded-full transition-transform transform ${billingPeriod === 'annually' ? 'translate-x-6 bg-[#FF6B4A]' : 'translate-x-0'}`}></div>
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-medium ${billingPeriod === 'annually' ? 'text-white' : 'text-slate-500'}`}>Anual</span>
                <span className="bg-[#FF6B4A] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">25% OFF</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Plano Operacional */}
            <div className="bg-[#111] p-8 rounded-2xl border border-slate-800 flex flex-col">
              <h3 className="text-lg font-bold mb-6">Operacional</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">R$ {billingPeriod === 'monthly' ? prices.monthly.operacional : prices.annually.operacional}</span>
                <span className="text-slate-500 text-sm ml-1">/mês</span>
              </div>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">Perfeito para pequenos negócios começarem com IA conversacional.</p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-slate-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>
                  2 Agente Inteligente
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-slate-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>
                  2 Banco de Conhecimento
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-slate-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>
                  Iterações Ilimitadas no WhatsApp
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-slate-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>
                  Acesso a recursos essenciais do Super Agentes
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-slate-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>
                  6 vagas no time
                </li>
              </ul>
              
              <div className="space-y-3">
                <button 
                  onClick={() => handleOpenLink(links.operacional.subscribe[billingPeriod])}
                  className="w-full py-3 bg-[#FF6B4A] text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity"
                >
                  {billingPeriod === 'monthly' ? 'Assinar Mensal' : 'Assinar Anual'}
                </button>
              </div>
            </div>

            {/* Plano Gerencial */}
            <div className="bg-[#111] p-0 rounded-2xl border border-[#FF6B4A] flex flex-col relative">
              <div className="bg-[#FF6B4A] text-white text-center py-2 text-xs font-bold uppercase rounded-t-2xl">
                Mais popular
              </div>
              <div className="p-8 pt-6 flex flex-col h-full">
                <h3 className="text-lg font-bold mb-6">Gerencial</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">R$ {billingPeriod === 'monthly' ? prices.monthly.gerencial : prices.annually.gerencial}</span>
                  <span className="text-slate-500 text-sm ml-1">/mês</span>
                </div>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">Para empresas em crescimento que desejam escalar seu atendimento.</p>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="text-slate-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>
                    6 Agentes Inteligente
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="text-slate-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>
                    10 Bancos de Conhecimento
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="text-slate-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>
                    20 vagas no time
                  </li>
                </ul>
                
                <button 
                  onClick={() => handleOpenLink(links.gerencial.subscribe[billingPeriod])}
                  className="w-full py-4 bg-[#FF6B4A] text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity"
                >
                  {billingPeriod === 'monthly' ? 'Assinar Mensal' : 'Assinar Anual'}
                </button>
              </div>
            </div>

            {/* Plano Executivo */}
            <div className="bg-[#111] p-8 rounded-2xl border border-slate-800 flex flex-col">
              <h3 className="text-lg font-bold mb-6">Executivo</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">R$ {billingPeriod === 'monthly' ? prices.monthly.executivo : prices.annually.executivo}</span>
                <span className="text-slate-500 text-sm ml-1">/mês</span>
              </div>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">Projetado para empresas que buscam automatizar suas operações.</p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-slate-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>
                  30 Agentes Inteligente
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-slate-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>
                  40 Bancos de Conhecimento
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-slate-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>
                  60 vagas no time
                </li>
              </ul>
              
              <button 
                onClick={() => handleOpenLink(links.executivo.subscribe[billingPeriod])}
                className="w-full py-3 bg-[#1A1A1A] text-slate-400 font-bold rounded-lg text-sm hover:text-white transition-colors mt-auto"
              >
                {billingPeriod === 'monthly' ? 'Assinar Mensal' : 'Assinar Anual'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 underline decoration-blue-500 underline-offset-8">Para quem é ideal</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></span>
                <span className="text-slate-700 font-medium">Empreendedores que buscam escala sem aumento de custos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></span>
                <span className="text-slate-700 font-medium">Profissionais Liberais que precisam otimizar sua agenda.</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 underline decoration-red-500 underline-offset-8">Para quem não é</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-red-100 text-red-600 p-1 rounded-full"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></span>
                <span className="text-slate-700 font-medium">Quem busca soluções milagrosas sem aplicação prática.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Confidence Section */}
      <section className="py-20 bg-white border-t border-slate-100 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Nossa Missão Institucional</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <h4 className="font-bold text-slate-900 mb-3">Tecnologia Profissional</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Plataforma em constante evolução, focada em estabilidade e suporte técnico.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-3">Eficiência Responsável</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Foco em organização e automação inteligente para escalar resultados reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600 text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Pronto para liderar a nova era da produtividade?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="px-10 py-5 bg-white text-blue-600 rounded-2xl text-xl font-bold hover:bg-blue-50 shadow-2xl transition-all w-full sm:w-auto"
            >
              Começar Agora
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black text-white px-4 border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-start gap-12">
          {/* Logo and Copyright */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-[#FF6B4A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M13 4l-2 16" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-2xl font-bold tracking-tight">Super Agentes<span className="text-[10px] align-top">™</span></span>
            </div>
            <div className="space-y-1">
              <p className="text-slate-400 text-sm font-medium">Copyright © 2025 SuperAgentes</p>
              <p className="text-slate-500 text-xs">Todos os direitos reservados</p>
            </div>
          </div>

          {/* Resources and Functionality */}
          <div className="grid grid-cols-1 gap-4">
            <button 
              onClick={() => scrollToSection('recursos')}
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium text-left"
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium text-left"
            >
              Como funciona
            </button>
          </div>

          {/* Removed Privacy Policies Button as per request */}
          <div className="flex md:justify-end">
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
