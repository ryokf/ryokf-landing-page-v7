import About from './section/About';
import Hero from './section/Hero';
import Navbar from './section/Navbar';
const App = () => {
  return (
    <main className='max-w-full mx-auto'>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
    </main>
  )
}

export default App