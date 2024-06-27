import './App.css'
import Header from './components/Header/Header'
import Us from './components/Us/Us'
import Condition from './components/Condition/Condition'
import { useState } from 'react'


export default function App() {
  let [page,setPage] = useState(1)

  const changePage = (evt)=>{
    const numPage = evt.target.value
    setPage(numPage)
    console.log(numPage)
}

const paginas ={
  '1': <Us/>,
  '2': <Condition/>,
  '3': null
}


  return (
    <>
      <Header mudarPagina={changePage}/>
      {paginas[page]}
    </>
  )
}

