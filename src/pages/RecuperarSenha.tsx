import { useState } from "react"
import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import { AuthBrand } from "@/components/AuthBrand"
import { AuthActionButton } from "@/components/AuthActionButton"
import { AuthSplitShell } from "@/components/AuthSplitShell"

export function RecuperarSenha() {
  const [email, setEmail] = useState("")
  const canSubmit = email.trim() !== ""

  return (
    <AuthSplitShell
      sideTitle="Não se preocupe, a gente resolve"
      sideDescription="Recupere o acesso da sua conta rapidamente e volte a acompanhar seus ativos sem complicação."
    >
      <div className="w-full max-w-sm">
        <AuthBrand subtitle="Recupere seu acesso" />

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

          <AuthActionButton canSubmit={canSubmit}>
            Enviar link de recuperação
          </AuthActionButton>
        </form>

        <div className="mt-5 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#6f6f78] hover:text-[#2b2b31] transition-colors"
          >
            <ArrowLeft className="size-4" />
            Voltar para o login
          </Link>
        </div>
      </div>
    </AuthSplitShell>
  )
}
