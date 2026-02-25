import { useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthBrand } from "@/components/AuthBrand"
import { AuthActionButton } from "@/components/AuthActionButton"

const marketItems = [
  { nome: "Bitcoin", preco: "R$ 340.805", variacao: "+2,42%" },
  { nome: "Ethereum", preco: "R$ 9.905,2", variacao: "+3,74%" },
  { nome: "Tether", preco: "R$ 5,1586", variacao: "-0,30%" },
  { nome: "USD Coin", preco: "R$ 5,1575", variacao: "-0,34%" },
  { nome: "Solana", preco: "R$ 423,0", variacao: "+5,20%" },
  { nome: "XRP", preco: "R$ 7,160", variacao: "+2,46%" },
  { nome: "Cardano", preco: "R$ 1,380", variacao: "+1,92%" },
  { nome: "Dogecoin", preco: "R$ 0,4855", variacao: "+0,75%" },
  { nome: "Polkadot", preco: "R$ 6,643", variacao: "+1,10%" },
]

function getAssetIcon(nome: string) {
  switch (nome) {
    case "Bitcoin":
      return "/btc.png"
    case "Ethereum":
      return "/ethereum.png"
    case "Tether":
      return "/tether.png"
    case "Solana":
      return "/solana.png"
    case "XRP":
      return "/riple.png"
    case "Cardano":
      return "/ada.svg"
    case "Dogecoin":
      return "/doge.svg"
    case "USD Coin":
      return "/usdc.svg"
    case "Polkadot":
      return "/polkadot.svg"
    default:
      return "/btc.png"
  }
}

export function Home() {
  const [searchParams] = useSearchParams()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const showLogin = searchParams.get("login") === "1"
  const canSubmit = email.trim() !== "" && password.trim() !== ""

  return (
    <div className="w-full min-h-[calc(100vh-9rem)] bg-[#f4f4f5] rounded-2xl overflow-hidden border border-[#e5e5e7]">
      <div className="grid min-h-[calc(100vh-9rem)] lg:grid-cols-[1.1fr_1fr]">
        <section className="hidden lg:block bg-[#ededee] p-6 xl:p-8 border-r border-[#dddddf]">
          <div className="mb-4 rounded-2xl overflow-hidden border border-[#e3e3e6] bg-white">
            <img
              src="/18dff8c5-f029-4435-a7ad-ea53ee13dc0f.png"
              alt="Mercado global"
              className="w-full h-40 object-cover"
            />
          </div>

          <div className="mb-4 rounded-2xl overflow-hidden border border-[#e3e3e6] bg-white">
            <img
              src="/18d164c7-58f4-4f02-ad6e-2bde393f27c7.png"
              alt="Investimentos em alta"
              className="w-full h-40 object-cover"
            />
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
            {marketItems.map((item) => {
              const positive = item.variacao.startsWith("+")
              return (
                <article
                  key={item.nome}
                  className="bg-white rounded-xl border border-[#e7e7ea] p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={getAssetIcon(item.nome)} alt={item.nome} className="size-5 object-contain" />
                      <p className="text-sm font-medium text-[#2d2d33]">{item.nome}</p>
                    </div>
                    <span
                      className={`text-xs font-semibold ${
                        positive ? "text-emerald-600" : "text-rose-500"
                      }`}
                    >
                      {item.variacao}
                    </span>
                  </div>
                  <p className="mt-2 text-base font-semibold text-[#1f1f23]">{item.preco}</p>
                  <p className="mt-2 text-xs text-[#8d8d95]">Volume (24h)</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="flex items-center justify-center p-5 sm:p-8">
          {showLogin ? (
            <div className="w-full max-w-sm">
              <AuthBrand subtitle="Acesse sua conta" />

              <form className="space-y-3">
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-[#6f6f78]">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="seu@email.com"
                    className="h-12 rounded-xl border-[#e5e5ea] bg-white text-[#222229] placeholder:text-[#a0a0aa]"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="password" className="text-[#6f6f78]">
                    Senha
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="********"
                    className="h-12 rounded-xl border-[#e5e5ea] bg-white text-[#222229] placeholder:text-[#a0a0aa]"
                  />
                </div>

                <AuthActionButton canSubmit={canSubmit}>Entrar</AuthActionButton>
              </form>

              <div className="mt-5 text-center">
                <Link
                  to="/recuperar-senha"
                  className="text-sm text-[#6f6f78] hover:text-[#2b2b31] transition-colors"
                >
                  Esqueceu a senha?
                </Link>
              </div>

              <p className="mt-5 text-center text-sm text-[#8a8a93]">
                Ainda não tem conta?{" "}
                <Link
                  to="/cadastro"
                  className="inline-flex rounded-full bg-[#ffefe4] px-3 py-1 font-semibold text-[#cf6f27] hover:bg-[#ffe6d5]"
                >
                  Cadastre-se
                </Link>
              </p>
            </div>
          ) : (
            <div className="w-full max-w-xl">
              <div className="rounded-3xl overflow-hidden border-4 border-[#f7931a] bg-white shadow-lg">
                <img
                  src="/tradelogo.png"
                  alt="Trade em tempo real"
                  className="w-full h-[420px] object-cover sm:h-[560px]"
                />
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
