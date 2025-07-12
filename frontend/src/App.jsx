import React from 'react'
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import UpdatePage from "./pages/UpdatePage"


const App = () => {
  return (
    <div>
     <Routes>
   <Route  path="/"  element={<HomePage/>}/>
   <Route  path="/CreatePage"  element={<CreatePage/>}/>
   <Route  path="/UpdatePage"  element={<UpdatePage/>}/>


     </Routes>
    
    </div>
  )
}

export default App