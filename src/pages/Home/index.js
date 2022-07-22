import React, { useEffect } from 'react'
import styles from './style'
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  BackHandler
} from 'react-native'
//import AsyncStorage from '@react-native-async-storage/async-storage'



export default function Home(props){


  BackHandler.addEventListener('hardwareBackPress', ()=>{
    props.navigation.navigate('Home')
    
    return true 
  })


  // useEffect(()=>{
  //   (async()=>{
  //     await AsyncStorage.clear()
  //   })()
  // }, [])

  return(
    <ImageBackground
      source={ require('../../../assets/terceirizacao.jpg') }
      style={styles.bgImage}>

      <View style={styles.container}>
        <Text style={styles.title}>Sejam bem vindos!</Text>
        <Text style={styles.txtStyle}>
          Essa é a nossa aplicação de terceirização
          de serviços. Onde você poderá contratar uma prestação de serviços ou
          cadastrar um serviço seu.
        </Text>
        <Image
          style={styles.imgPic}
          source={ require('../../../assets/homeIcon.jpg') }/>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnNav}
            onPress={()=> props.navigation.navigate('Register')}>
            <Text style={styles.txtBtn}>Cadastrar serviço</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnNav}
            onPress={()=> props.navigation.navigate('List')}>
            <Text style={styles.txtBtn}>Contratar serviço</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ImageBackground>
  )
}
