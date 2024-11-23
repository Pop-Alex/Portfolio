import {BrowserRouter} from "react-router-dom"
import {About,Contact,Hero,Navbar,Works,StarsCanvas,Tech,Footer} from './components'


const App=()=> {
 

  return (
    <BrowserRouter>
    <div className="relative z-0  ">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        
        <Hero/>
      </div>
      <About/>
      <Tech/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
    </BrowserRouter>
    
  )
}

export default App
