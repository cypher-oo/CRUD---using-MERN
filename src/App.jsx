import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'  
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import Users from './Users'

const App =() => {
  const [count, setCount] = useState(0)

  return (
   
     
     <Router>
     <Routes>
      < Route path='/' element={<Users />}/>
      <Route path='/create' element={<CreateUser/>}/>
      <Route path='update/:id' element={<UpdateUser/>}/>
     </Routes>
     </Router>
    
  );
};

export default App
