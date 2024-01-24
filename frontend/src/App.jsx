import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CreateBook from '../pages/CreateBooks'
import ShowBook from '../pages/ShowBook'
import EditBook from '../pages/EditBook'
import DeleteBook from '../pages/DeleteBook'
import Home from '../pages/Home'
function App() {
  return (
    <Routes>
      <Route path='/' element = {<Home/>} ></Route>
      <Route path='/books/create' element = {<CreateBook/>} ></Route>
      <Route path='/books/details/:id' element = {<ShowBook/>} ></Route>
      <Route path='/books/delete/:id' element = {<DeleteBook/>} ></Route>
      <Route path='/books/edit/:id' element = {<EditBook/>} ></Route>
    </Routes>
  )
}

export default App