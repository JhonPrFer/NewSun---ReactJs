import { Routes, Route } from "react-router"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Home from "./pages/Home/Home"
import "./App.css"

export default function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  )}


