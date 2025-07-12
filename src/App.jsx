

import Navbar from './sections/Navbar'
import Projects from './sections/Projects'
import Hero from './sections/Hero'
import About from './sections/About'
import Clients from './sections/Clients'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'> 
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
