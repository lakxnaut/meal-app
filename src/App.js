import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Meal from './components/Meal'
import SingleMeal from './components/SingleMeal'

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>

          <Route path='/' element={<Meal />} />
          <Route path='/singlemeal' element={<SingleMeal />} />
        </Routes>
      </BrowserRouter> */}
      <Meal />
    </div>
  )
}

export default App