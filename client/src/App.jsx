import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Schools from './components/Schools.jsx'
import Shop from './components/Shop.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import UniformProcess from './components/UniformProcess.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Schools />
        <UniformProcess />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
