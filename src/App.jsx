import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Header from './components/Header'



function App() {
   return (
    <>
      <Header />  
      <Login />
    </>
    
  )
}

export default App
