import './App.css'
import { Navbar, Footer, Hero } from './components'
// TODO: Add option to save a template for the user 
const App = () => (
  <div className='w-full min-h-screen grid place-items-center bg-[#040408]'>
    <Navbar/>
    <Hero />
  </div>
)

export default App
