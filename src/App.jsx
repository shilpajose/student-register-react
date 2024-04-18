import './App.css'
import { Routes,Route } from 'react-router-dom'
import Header from './Components/Header'
import LandingPage from './Pages/LandingPage'
import HomePage from './Pages/HomePage'

function App() {

  return (
    <>
      <Header />
      <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/home' element={<HomePage/>}></Route>
      </Routes>
    </>
  )
}

export default App
