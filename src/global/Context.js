import React, { createContext, useState } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { url } from '../constants/urls'


const Context = createContext()


export const Provider = (props)=>{
  const [cart, setCart] = useState([])
  const [jobs, setJobs] = useState([])
  const [job, setJob] = useState({})



  const getToken = async(tk)=>{
    try{

      await AsyncStorage.setItem('token', tk)

    }catch(e){
      alert(e)
    }
  }
  
  
  const getAllJobs = ()=>{
    axios.get(`${url}/jobs`).then(res=>{
      setJobs(res.data)
    }).catch(err=>{
      alert(err.response.data)
    })
  }


  const addToCart = (job)=>{
    const newCart = [...cart, job]
    setCart(newCart)
  }


  
   


  return<Context.Provider value={{ cart, setCart, addToCart, getAllJobs,
  jobs, job, setJob, getToken}}>
          { props.children }
        </Context.Provider>
}

export default Context
