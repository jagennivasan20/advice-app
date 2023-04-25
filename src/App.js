import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from './Card'
import "./App.css"
const App = () => {
  const [advice,setAdvice] = useState("")
useEffect(()=>{
  fetchAdvice()
},[])

const fetchAdvice = async()=>{
  try {
    const response = await axios.get("https://api.adviceslip.com/advice") 
    setAdvice(response.data.slip.advice);
  } catch (error) {
    console.log(error);
  }
}
  return (
    <div className="app">
    <Card
    advice={advice}
    handleClick={fetchAdvice}
    />
    </div>
  )
}

export default App