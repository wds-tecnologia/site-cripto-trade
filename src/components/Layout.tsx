import { Outlet } from "react-router-dom"
import { SiteHeader } from "@/components/SiteHeader"

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 px-4 py-6 sm:py-8">
        <Outlet />
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-[#e2e2e8]">
        © 2022 - {new Date().getFullYear()} Todos os direitos reservados
      </footer>
    </div>
  )
}
