import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import EventDetails from './pages/EventDetails'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }) }, [pathname])
  return null
}

export default function App() {
  return <><ScrollToTop/><Navbar/><main><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/events" element={<Events/>}/>
    <Route path="/events/:slug" element={<EventDetails/>}/>
    <Route path="/careers" element={<Careers/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes></main><Footer/></>
}
