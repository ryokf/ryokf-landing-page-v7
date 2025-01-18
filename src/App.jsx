import About from './section/About';
import Hero from './section/Hero';
import Navbar from './section/Navbar';
import Projects from './section/Projects';
import Contact from './section/Contact';
const App = () => {
  return (
    <main className='max-w-full mx-auto'>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </main>
  )
}

export default App