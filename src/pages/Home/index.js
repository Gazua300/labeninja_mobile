import React from 'react'
import styles from './style'
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native'



export default function Home(props){
  return(
    <ImageBackground
      source={ require('../../../assets/ninjaWallpaper.jpg') }
      style={styles.bgImage}>

      <View style={styles.container}>
        <Image
          style={styles.imgPic}
          source={ require('../../../assets/ninja.png') }/>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnNav}
            onPress={()=> props.navigation.navigate('Register')}>
            <Text style={styles.txtBtn}>Cadastrar um ninja</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnNav}
            onPress={()=> props.navigation.navigate('List')}>
            <Text style={styles.txtBtn}>Contratar um ninja</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ImageBackground>
  )
}
