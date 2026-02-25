import { Link } from "react-router-dom"

type ContentPageProps = {
  title: string
  description: string
}

export function ContentPage({ title, description }: ContentPageProps) {
  const pillars = [
    `Estratégia orientada por dados para ${title.toLowerCase()} com foco em clareza e escala.`,
    "Experiência pensada para iniciantes e avançados, com navegação simples e respostas rápidas.",
    "Segurança operacional como base, com processos transparentes e governança contínua.",
  ]

  const roadmap = [
    "Diagnóstico do cenário atual e definição de indicadores de sucesso.",
    "Implementação guiada por squads especializados com entregas incrementais.",
    "Monitoramento contínuo com ciclos de melhoria e ganhos de eficiência.",
  ]

  const faq = [
    {
      q: `Como a Vila Pay aborda ${title.toLowerCase()} na prática?`,
      a: "Combinamos tecnologia proprietária, operação assistida e comunicação transparente para transformar objetivos em resultados mensuráveis.",
    },
    {
      q: "Essa frente atende iniciantes e equipes experientes?",
      a: "Sim. A arquitetura de uso foi desenhada para reduzir fricção no onboarding e oferecer profundidade para operações mais sofisticadas.",
    },
    {
      q: "Quais ganhos posso esperar no curto e médio prazo?",
      a: "No curto prazo, visibilidade e controle. No médio prazo, ganho operacional, melhor previsibilidade e melhoria de performance.",
    },
  ]

  return (
    <div className="mx-auto w-full max-w-6xl rounded-2xl border border-[#e5e5ea] bg-white p-6 sm:p-10">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#f7931a]">
          Vila Pay Invest
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#1f1f26] sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#61616d] sm:text-lg">
          {description}
        </p>
      </div>

      <section className="mb-8 grid gap-4 md:grid-cols-3">
        {pillars.map((pillar) => (
          <article
            key={pillar}
            className="rounded-xl border border-[#e7e7ee] bg-[#fafafe] p-4 sm:p-5"
          >
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#4f46e5]">
              Pilar estratégico
            </h2>
            <p className="text-sm leading-relaxed text-[#5f5f6c]">{pillar}</p>
          </article>
        ))}
      </section>

      <section className="mb-8 rounded-2xl border border-[#e7e7ee] bg-[#fbfbff] p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-[#23232c]">Visão geral</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#5e5e69] sm:text-base">
          Em {title}, nossa proposta é transformar complexidade em decisão inteligente. Estruturamos
          fluxos, métricas e interfaces para que cada etapa da jornada seja previsível, segura e
          orientada a resultado. Isso significa menos ruído operacional, mais foco estratégico e uma
          experiência unificada em todos os canais.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#5e5e69] sm:text-base">
          A base de trabalho combina design de produto, análise de dados e operação assistida. Com
          isso, conseguimos traduzir necessidades de negócio em entregas concretas, mantendo ritmo de
          evolução e qualidade técnica. O objetivo final é simples: gerar confiança para crescer com
          consistência.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[#23232c]">
          Como evoluímos essa frente
        </h2>
        <div className="mt-4 space-y-3">
          {roadmap.map((step, index) => (
            <div
              key={step}
              className="flex items-start gap-3 rounded-xl border border-[#e8e8ef] bg-white p-4"
            >
              <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[#eef0ff] text-xs font-bold text-[#4f46e5]">
                {index + 1}
              </span>
              <p className="text-sm leading-relaxed text-[#5f5f6b]">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8 grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-[#e7e7ee] bg-white p-5">
          <h2 className="text-xl font-semibold text-[#23232c]">Impacto esperado</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#5f5f6c]">
            A expectativa para esta frente e elevar maturidade operacional, melhorar a eficiencia das
            equipes e reduzir tempo de resposta para decisoes criticas. Com cadencia de melhoria,
            consolidamos ganhos sustentaveis e ampliamos a capacidade de inovacao do ecossistema.
          </p>
        </article>

        <article className="rounded-xl border border-[#e7e7ee] bg-white p-5">
          <h2 className="text-xl font-semibold text-[#23232c]">Boas práticas adotadas</h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#5f5f6c]">
            <li>- Priorização por valor de negócio e impacto real no usuário.</li>
            <li>- Validação contínua com feedback rápido das partes interessadas.</li>
            <li>- Padrões de qualidade e segurança aplicados desde o início.</li>
          </ul>
        </article>
      </section>

      <section className="mb-8 rounded-2xl border border-[#e7e7ee] bg-[#fafafe] p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-[#23232c]">FAQ</h2>
        <div className="mt-4 space-y-4">
          {faq.map((item) => (
            <article key={item.q} className="rounded-xl border border-[#ececf2] bg-white p-4">
              <h3 className="text-sm font-semibold text-[#2e2e38] sm:text-base">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#60606c]">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="rounded-xl border border-dashed border-[#d7d7de] bg-[#fafafc] p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-[#5f5f6c]">
          Próximos passos: aprofundar estudos de caso, incluir métricas reais, adicionar provas
          sociais e evoluir os blocos desta página para uma experiência editorial completa. A base já
          está pronta para crescer.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/"
          className="rounded-lg bg-[#4f46e5] px-4 py-2 text-sm font-semibold text-white hover:bg-[#4338ca]"
        >
          Voltar para Home
        </Link>
        <Link
          to="/?login=1"
          className="rounded-lg border border-[#d9d9e2] bg-white px-4 py-2 text-sm font-semibold text-[#2f2f38] hover:bg-[#f6f6fa]"
        >
          Ir para Login
        </Link>
      </div>
    </div>
  )
}
