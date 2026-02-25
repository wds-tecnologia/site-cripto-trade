export type NavSubItem = {
  label: string
  path: string
  description: string
}

export type NavItem = {
  label: string
  path: string
  description: string
  submenu: NavSubItem[]
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Sobre a Vila Pay",
    path: "/sobre-vila-pay",
    description: "Conheça nossa história, propósito e pilares de confiança.",
    submenu: [
      {
        label: "Nossa história",
        path: "/sobre-vila-pay/nossa-historia",
        description: "Entenda como a Vila Pay nasceu e evoluiu.",
      },
      {
        label: "Segurança",
        path: "/sobre-vila-pay/seguranca",
        description: "Conheça os recursos de proteção da plataforma.",
      },
      {
        label: "Informações legais",
        path: "/sobre-vila-pay/informacoes-legais",
        description: "Acesse políticas, termos e informações regulatórias.",
      },
    ],
  },
  {
    label: "Preços",
    path: "/precos",
    description: "Consulte taxas, spreads e custos por tipo de operação.",
    submenu: [
      {
        label: "Tabela spot",
        path: "/precos/tabela-spot",
        description: "Veja as taxas para compra e venda spot.",
      },
      {
        label: "Conversão rápida",
        path: "/precos/conversao-rapida",
        description: "Confira custos para conversões instantâneas.",
      },
      {
        label: "Taxas de serviço",
        path: "/precos/taxas-de-servico",
        description: "Saques, depósitos e demais custos operacionais.",
      },
    ],
  },
  {
    label: "Produtos",
    path: "/produtos",
    description: "Explore soluções para investir, guardar e movimentar cripto.",
    submenu: [
      {
        label: "Conta digital",
        path: "/produtos/conta-digital",
        description: "Gerencie seus ativos em um único lugar.",
      },
      {
        label: "Rendimentos",
        path: "/produtos/rendimentos",
        description: "Produtos para buscar ganhos sobre seu saldo.",
      },
      {
        label: "Cartão",
        path: "/produtos/cartao",
        description: "Use seus ativos no dia a dia com praticidade.",
      },
    ],
  },
  {
    label: "Suporte",
    path: "/suporte",
    description: "Ajuda completa para sua jornada na plataforma.",
    submenu: [
      {
        label: "Central de ajuda",
        path: "/suporte/central-de-ajuda",
        description: "Guias rápidos e artigos para dúvidas frequentes.",
      },
      {
        label: "Contato",
        path: "/suporte/contato",
        description: "Fale com nosso time de atendimento.",
      },
      {
        label: "FAQ",
        path: "/suporte/faq",
        description: "Respostas diretas para perguntas comuns.",
      },
    ],
  },
  {
    label: "Vila Pay Business",
    path: "/vila-pay-business",
    description: "Soluções para empresas que operam com ativos digitais.",
    submenu: [
      {
        label: "Pagamentos",
        path: "/vila-pay-business/pagamentos",
        description: "Recebimentos e repasses com eficiência.",
      },
      {
        label: "API",
        path: "/vila-pay-business/api",
        description: "Integre seus sistemas com nossa infraestrutura.",
      },
      {
        label: "Parcerias",
        path: "/vila-pay-business/parcerias",
        description: "Modelos de parceria para escalar seu negócio.",
      },
    ],
  },
  {
    label: "Baixar o app",
    path: "/baixar-app",
    description: "Acesse a Vila Pay no celular e acompanhe o mercado em tempo real.",
    submenu: [
      {
        label: "Android",
        path: "/baixar-app/android",
        description: "Baixe o app para dispositivos Android.",
      },
      {
        label: "iOS",
        path: "/baixar-app/ios",
        description: "Baixe o app para iPhone.",
      },
      {
        label: "QR Code",
        path: "/baixar-app/qr-code",
        description: "Escaneie e acesse o download rapidamente.",
      },
    ],
  },
]

export const ALL_CONTENT_PAGES = NAV_ITEMS.flatMap((item) => [
  {
    title: item.label,
    path: item.path,
    description: item.description,
  },
  ...item.submenu.map((sub) => ({
    title: sub.label,
    path: sub.path,
    description: sub.description,
  })),
])
