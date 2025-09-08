import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Page1 from './components/Page1' 
import Page2 from './components/Page2' 
import Header from './components/Header'
import Musicpart from './components/Musicpart'

function App() {
  return (
    <Router>
      <Musicpart/>

      <div className='app overflow-x-clip min-h-screen'> 
        <Header/>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/arrested" element={<Page2 />} />
        </Routes>
      </div>
      
    </Router>
  )
}

export default App