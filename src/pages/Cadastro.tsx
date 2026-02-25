import { useState } from "react"
import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthBrand } from "@/components/AuthBrand"
import { AuthActionButton } from "@/components/AuthActionButton"
import { AuthSplitShell } from "@/components/AuthSplitShell"

export function Cadastro() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const canSubmit =
    nome.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== ""

  return (
    <AuthSplitShell
      sideTitle="Comece sua jornada na Vila Pay"
      sideDescription="Abra sua conta em minutos e acompanhe o mercado com uma experiência simples, segura e mobile first."
    >
      <div className="w-full max-w-sm">
        <AuthBrand subtitle="Crie sua conta" />

        <form className="space-y-3">
          <div className="space-y-1.5">
            <Label htmlFor="nome" className="text-[#6f6f78]">
              Nome completo
            </Label>
            <Input
              id="nome"
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              placeholder="Seu nome"
              className="h-12 rounded-xl border-[#e5e5ea] bg-white text-[#222229] placeholder:text-[#a0a0aa]"
            />
          </div>

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

          <div className="space-y-1.5">
            <Label htmlFor="confirm-password" className="text-[#6f6f78]">
              Confirmar senha
            </Label>
            <Input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="********"
              className="h-12 rounded-xl border-[#e5e5ea] bg-white text-[#222229] placeholder:text-[#a0a0aa]"
            />
          </div>

          <AuthActionButton canSubmit={canSubmit}>Criar conta</AuthActionButton>
        </form>

        <p className="mt-5 text-center text-sm text-[#8a8a93]">
          Já tem conta?{" "}
          <Link
            to="/"
            className="inline-flex rounded-full bg-[#ffefe4] px-3 py-1 font-semibold text-[#cf6f27] hover:bg-[#ffe6d5]"
          >
            Entrar
          </Link>
        </p>
      </div>
    </AuthSplitShell>
  )
}
