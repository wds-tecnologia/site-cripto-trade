import type { ReactNode } from "react"

type AuthSplitShellProps = {
  children: ReactNode
  sideTitle: string
  sideDescription: string
}

export function AuthSplitShell({
  children,
  sideTitle,
  sideDescription,
}: AuthSplitShellProps) {
  return (
    <div className="w-full min-h-[calc(100vh-10rem)] rounded-2xl overflow-hidden border border-[#e5e5e7] bg-[#f4f4f5]">
      <div className="grid min-h-[calc(100vh-10rem)] lg:grid-cols-[1fr_1fr]">
        <section className="hidden lg:flex flex-col justify-between border-r border-[#dddddf] bg-[#ededee] p-6 xl:p-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1f1f24]">{sideTitle}</h2>
            <p className="max-w-md text-sm leading-relaxed text-[#6c6c74]">
              {sideDescription}
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#e3e3e6] bg-white">
            <img
              src="/18dff8c5-f029-4435-a7ad-ea53ee13dc0f.png"
              alt="Painel de mercado"
              className="h-64 w-full object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-[#e1e1e6] bg-white p-3 text-center text-xs font-medium text-[#4f4f57]">
              Segurança
            </div>
            <div className="rounded-xl border border-[#e1e1e6] bg-white p-3 text-center text-xs font-medium text-[#4f4f57]">
              Liquidez
            </div>
            <div className="rounded-xl border border-[#e1e1e6] bg-white p-3 text-center text-xs font-medium text-[#4f4f57]">
              Praticidade
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center p-5 sm:p-8">{children}</section>
      </div>
    </div>
  )
}
