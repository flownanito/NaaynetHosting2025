import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import We from "./pages/we/We"
import Shop from "./pages/shop/Shop"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/Home" element={<Home />}> </Route>
        <Route path="/Shop" element={<Shop />}> </Route>
        <Route path="/We" element={<We />}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
