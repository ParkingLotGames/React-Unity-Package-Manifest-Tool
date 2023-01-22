import './App.css'
import { Navbar, Footer, Hero } from './components'

const App = () => (
  <div className='w-full min-h-screen grid place-items-center bg-[#373737]'>
    <Navbar/>
    <Hero />
  </div>
)

export default App
