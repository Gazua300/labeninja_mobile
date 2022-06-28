import React, { useEffect, useState, useContext } from 'react'
import styles from './style'
import axios from 'axios'
import Context from '../../global/Context'
import { url } from '../../constants/urls'
import { convertDate } from '../../utils/convertDate'
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl
} from 'react-native'



export default function List(props){
  const { addToCart, getAllJobs, jobs, setJob } = useContext(Context)  
  const [refreshing, setRefreshing] = useState(false)


  useEffect(()=>{
    getAllJobs()
  }, [])


  const onRefresh = ()=>{
    setRefreshing(true)
    setTimeout(()=>{
      setRefreshing(false)
    }, 2000)
  }


  const getJobById = (id)=>{
    axios.get(`${url}/job/${id}`).then(res=>{
      setJob(res.data)
      props.navigation.navigate('Detalhes')
    }).catch(e=>{
      alert(e.response.data)
    })
  }



  return(
    <ImageBackground
      source={ require('../../../assets/ninjaWallpaper.jpg') }
      style={styles.bgImage}>
      <ScrollView refreshControl={<RefreshControl onRefresh={onRefresh}
        refreshing={refreshing}/>}>

        {jobs && jobs.map(job=>{
          return(
            <View key={job.id}
              style={styles.card}>
              <View style={styles.cardContent}>
                <Text style={styles.txtBtn}><Text style={styles.legend}>Título:</Text> {job.title}</Text>
                <Text style={styles.txtBtn}><Text style={styles.legend}>Descrição:</Text> {job.description}</Text>
                <Text style={styles.txtBtn}><Text style={styles.legend}>Preço:</Text> R$ {job.price}</Text>
                <Text style={styles.txtBtn}><Text style={styles.legend}>Pagamento:</Text> {job.paymentMethods}</Text>
                <Text style={styles.txtBtn}><Text style={styles.legend}>Prazo:</Text> {convertDate(job.dueDate)}</Text>
                <View style={styles.btnContainer}>
                  <TouchableOpacity style={styles.btnNav}
                    onPress={()=> getJobById(job.id)}>
                    <Text style={styles.txtBtn}>Contratar serviço</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnNav}
                    onPress={()=> addToCart(job)}>
                    <Text style={styles.txtBtn}>Carrinho</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )
        })}
      </ScrollView>
    </ImageBackground>
  )
}
