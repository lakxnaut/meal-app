import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Meal from './components/Meal'
import SingleMeal from './components/SingleMeal'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Meal />} />
          <Route path='/singlemeal' element={<SingleMeal />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App