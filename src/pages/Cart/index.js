import React, { useContext } from 'react'
import Context from '../../global/Context'
import axios from 'axios'
import { url } from '../../constants/urls'
import styles from './style'
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native'



export default function Cart(props){
  const { cart, setCart, setJob } = useContext(Context)


  const removeFromCart = (id)=>{
    const newCart = cart.filter(item=>{
      return item.id !== id
    })
    setCart(newCart)
  }

  const clearCart = ()=>{
    setCart([])
  }

  let total = 0
  cart && cart.forEach((item)=>{
    total += item.price
  })


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

        <ScrollView>
          {cart && cart.map(car=>{
            {console.log(car)}
            return(
              <View style={styles.cardContainer} key={car.id}>
                <View style={styles.cardContent}>
                  <Text style={styles.txtBtn}>{car.title}</Text>
                  <Text style={styles.txtBtn}>R$ {car.price}</Text>
                  <TouchableOpacity style={styles.btnNav}
                    onPress={()=> removeFromCart(car.id)}>
                    <Text style={styles.txtBtn}>Remover</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.btnContract}>
                  <TouchableOpacity style={styles.btnNav}
                    onPress={()=> getJobById(car.id)}>
                    <Text style={styles.txtBtn}>Contratar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          })}

          <View style={styles.cardTotal}>
            <Text style={styles.txtBtn}>Total: R$ {total}</Text>
            <TouchableOpacity style={styles.btnClearCart}
              onPress={clearCart}>
              <Text style={styles.txtBtn}>Limpar carrinho</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnBack}>
            <TouchableOpacity style={styles.btnClearCart}
              onPress={()=> props.navigation.navigate('List')}>
              <Text style={styles.txtBtn}>Voltar para lista</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

    </ImageBackground>
  )
}
