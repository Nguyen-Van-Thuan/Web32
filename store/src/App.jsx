import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Layout from "./pages/Layout"
import Detail from "./pages/Detail"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          
          {/* Cong Thuc tao ra duong danh dong */}
          <Route path="products/:id" element={<Detail/>}/>

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
