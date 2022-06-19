import React, { createContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { url } from '../constants/urls'


const Context = createContext()


export const Provider = (props)=>{
  const [cart, setCart] = useState([])


  const addToCart = (job)=>{
    const newCart = [...cart, job]
    setCart(newCart)
  }


  const contractJob = async(job)=>{
    const token = await AsyncStorage.getItem('token')

    const body = {
      title: job.title,
      price: job.price
    }
    axios.post(`${url}/jobs/${token}`, body).then(res=>{
      alert(res.data)
    }).catch(err=>{
      alert(err.response.data)
    })
  }


  return<Context.Provider value={{ cart, setCart, addToCart, contractJob }}>
          { props.children }
        </Context.Provider>
}

export default Context
