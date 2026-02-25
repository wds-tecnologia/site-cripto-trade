import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronDown, Globe, Menu, X } from "lucide-react"
import { NAV_ITEMS } from "@/config/navigation"

const LANGUAGE_OPTIONS = [
  { code: "BR", label: "Português (Brasil)" },
  { code: "PT", label: "Português (Portugal)" },
  { code: "EN", label: "Inglês" },
  { code: "ES", label: "Espanhol" },
  { code: "PY", label: "Paraguai" },
] as const

const DEFAULT_LANGUAGE_CODE = "BR"
const LANGUAGE_STORAGE_KEY = "vilapay-language"

function getInitialLanguageCode() {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE_CODE
  }

  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
  const isValidLanguage = LANGUAGE_OPTIONS.some((language) => language.code === savedLanguage)
  return isValidLanguage ? savedLanguage : DEFAULT_LANGUAGE_CODE
}

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentLanguageCode, setCurrentLanguageCode] = useState(getInitialLanguageCode)

  const handleLanguageChange = (languageCode: string) => {
    setCurrentLanguageCode(languageCode)
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, languageCode)
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#e6e6eb] bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/80">
      <div className="h-1 bg-linear-to-r from-[#4f46e5] via-[#8b5cf6] to-[#3b82f6]" />

      <div className="mx-auto flex h-16 w-full max-w-[1320px] items-center justify-between px-3 sm:px-5">
        <Link to="/" className="flex items-center">
          <img
            src="/vilapaylogo.png"
            alt="Vila Pay Invest"
            className="h-9 w-auto object-contain sm:h-10"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-5">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                to={item.path}
                className="inline-flex items-center gap-1 py-2 text-[15px] font-medium text-[#2f2f36] hover:text-[#4f46e5] transition-colors"
              >
                {item.label}
                <ChevronDown className="size-3.5 text-[#6f6f77]" />
              </Link>

              <div className="invisible absolute left-0 top-full z-50 mt-2 min-w-[230px] rounded-xl border border-[#e4e4ea] bg-white p-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.path}
                    to={subItem.path}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-[#3a3a44] hover:bg-[#f5f6ff] hover:text-[#4f46e5]"
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-sm font-medium text-[#2f2f36] hover:bg-[#f5f5f9]"
            >
              <Globe className="size-4" />
              {currentLanguageCode}
              <ChevronDown className="size-3.5 text-[#6f6f77]" />
            </button>

            <div className="invisible absolute right-0 top-full z-50 mt-2 min-w-[220px] rounded-xl border border-[#e4e4ea] bg-white p-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
              {LANGUAGE_OPTIONS.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => handleLanguageChange(language.code)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                    currentLanguageCode === language.code
                      ? "bg-[#f0f2ff] text-[#4f46e5]"
                      : "text-[#3a3a44] hover:bg-[#f5f6ff] hover:text-[#4f46e5]"
                  }`}
                >
                  <span>{language.label}</span>
                  <span className="text-xs text-[#777784]">{language.code}</span>
                </button>
              ))}
            </div>
          </div>
          <Link
            to="/?login=1"
            className="rounded-xl bg-[#eef0ff] px-4 py-2 text-sm font-semibold text-[#4f46e5] transition-colors hover:bg-[#e3e6ff]"
          >
            Iniciar sessão
          </Link>
          <Link
            to="/cadastro"
            className="rounded-xl bg-[#4f46e5] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#4338ca]"
          >
            Abra uma conta
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to="/?login=1"
            className="rounded-lg bg-[#eef0ff] px-3 py-2 text-xs font-semibold text-[#4f46e5]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Entrar
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#e4e4ea] text-[#4a4a54]"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-[#e6e6eb] bg-white px-3 pb-4 pt-3 lg:hidden">
          <nav className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.path} className="rounded-lg border border-[#ececf2] p-2">
                <Link
                  to={item.path}
                  className="block rounded-md px-2 py-2 text-sm font-semibold text-[#2f2f36] hover:bg-[#f7f7fb]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                <div className="mt-1 space-y-1 pl-2">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className="block rounded-md px-2 py-1.5 text-xs font-medium text-[#60606b] hover:bg-[#f7f7fb] hover:text-[#4f46e5]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="mt-3 rounded-lg border border-[#ececf2] p-2">
            <p className="mb-1 inline-flex items-center gap-2 px-2 text-xs font-semibold uppercase tracking-wide text-[#6a6a74]">
              <Globe className="size-3.5" />
              Idioma
            </p>
            <div className="space-y-1">
              {LANGUAGE_OPTIONS.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => handleLanguageChange(language.code)}
                  className={`flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-xs font-medium transition-colors ${
                    currentLanguageCode === language.code
                      ? "bg-[#f0f2ff] text-[#4f46e5]"
                      : "text-[#3a3a44] hover:bg-[#f5f6ff] hover:text-[#4f46e5]"
                  }`}
                >
                  <span>{language.label}</span>
                  <span className="text-[10px] text-[#777784]">{language.code}</span>
                </button>
              ))}
            </div>
          </div>

          <Link
            to="/cadastro"
            className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4338ca]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Abra uma conta
          </Link>
        </div>
      )}
    </header>
  )
}
