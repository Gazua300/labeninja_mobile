import React, { createContext, useState } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { url } from '../constants/urls'


const Context = createContext()


export const Provider = (props)=>{
  const [providerJob, setProviderJob] = useState([])
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


  const jobByProvider = async()=>{
    const id = AsyncStorage.getItem('token')

    axios.get(`${url}/provider/jobs/${id}`).then(res=>{
      console.log(res.data)
    }).catch(e=>{
      alert(e.response.data)
    })
  }


  


  
   


  return<Context.Provider value={{
    getAllJobs, jobs, job, setJob, getToken, jobByProvider, providerJob
  }}>
          { props.children }
        </Context.Provider>
}

export default Context
