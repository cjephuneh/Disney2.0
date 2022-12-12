import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./components/Login"


function App() {
   return (
   <Router>
    <Routes>
      <Route exact path='/'>
        <Login />
      </Route>
    </Routes>
   </Router>
  )
}

export default App
