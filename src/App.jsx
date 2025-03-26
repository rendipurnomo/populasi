import { BrowserRouter, Route, Routes } from "react-router-dom"
import {  Home, Unit} from "./pages"
import Layouts from "./layouts"
import Details from "./pages/Details"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home/>} />
          <Route path="/unit/:codeUnit" element={<Unit/>}/>
          <Route path="/unit/:codeUnit/:nomor" element={<Details/>} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
