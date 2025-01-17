import About from './section/About';
import Hero from './section/Hero';
import Navbar from './section/Navbar';
import Projects from './section/Projects';
const App = () => {
  return (
    <main className='max-w-full mx-auto'>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
    </main>
  )
}

export default App