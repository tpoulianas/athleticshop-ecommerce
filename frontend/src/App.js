import Login from "./login"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from "./SignUp"
import Home from "./Home"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/SignUp' element={<SignUp />}></Route>
      <Route path='/Home' element={<Home />}></Route>
    </Routes>
      <Login />
    </BrowserRouter>
  )
}

export default App
