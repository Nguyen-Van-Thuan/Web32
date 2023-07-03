import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Layout from "./pages/Layout"
import Detail from "./pages/Detail"
import Login from "./pages/Login"
import PrivateRouter from "./auth/PrivateRouter"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          {/* Client */}
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="products/:id" element={<Detail/>}/>
          <Route path="login" element={<Login/>}/>
          
          {/* Admin */}
          <Route path="dashboad" element={<PrivateRouter/>}/>

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
