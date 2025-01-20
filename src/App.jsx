import About from './section/About';
import Hero from './section/Hero';
import Navbar from './section/Navbar';
import Projects from './section/Projects';
import Contact from './section/Contact';
import Footer from './section/Footer';
import Experience from './section/Experience';
const App = () => {
  return (
    <main className='max-w-full mx-auto'>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  )
}

export default App