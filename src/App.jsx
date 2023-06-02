
import './App.css'
import Header from './components/Header/Header'
import Home from "./components/Home/Home"
import About from './components/about/About'

function App() {

  return (
    <>
     <Header/>
    <main className="main">
      <Home/>
      <About/>
    </main>
    </>
  )
}

export default App
