import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllUnits from '../../organisms/AllUnits/AllUnits'

const Reports = () => {
  return (
    <Routes>
        <Route path="/" element = {<AllUnits/>}></Route>
    </Routes>
  )
}

export default Reports