import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/Layout"
import { Home } from "@/pages/Home"
import { Cadastro } from "@/pages/Cadastro"
import { RecuperarSenha } from "@/pages/RecuperarSenha"
import { ALL_CONTENT_PAGES } from "@/config/navigation"
import { ContentPage } from "@/pages/ContentPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="recuperar-senha" element={<RecuperarSenha />} />
          {ALL_CONTENT_PAGES.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={<ContentPage title={page.title} description={page.description} />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
