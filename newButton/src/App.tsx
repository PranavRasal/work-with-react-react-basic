import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { 

const [conter , setconster]= useState(2)


const decrease = () => {
if (conter > 0 ){
setconster(conter - 1)
}}

const increase = () => {
if(conter < 5){
 setconster(conter => conter +1)
  setconster(conter => conter +1)
   
}}


  return (
    <>
      <h1>age {conter}</h1>
    <button onClick={increase}>increase {conter}</button><br />
      <button onClick={decrease}>decrease {conter}</button>
    </>
  )
}

export default App
