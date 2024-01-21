import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.netlify.app/api/react-tours'
function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading]= useState(true);

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchTours();
  },[]);
  if(loading){
    return <Loading/>
  }
  {
  return <Tours/>
  }
}

export default App
