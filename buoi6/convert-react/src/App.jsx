import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Browse from "./pages/Browse"
import Detail from "./pages/Detail"
import Streams from "./pages/Streams"
import Profile from "./pages/Profile"
import Layout from "./components/Layout"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="browse" element={<Browse />} />
          <Route path="details" element={<Detail />} />
          <Route path="streams" element={<Streams />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App