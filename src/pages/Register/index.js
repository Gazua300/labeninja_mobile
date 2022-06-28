import React, { useState } from 'react'
import axios from 'axios'
import { Picker } from '@react-native-picker/picker'
import { url } from '../../constants/urls'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './style'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Alert
} from 'react-native'



export default function Register(props){
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [payment, setPayment] = useState()
  const [dueDate, setDueDate] = useState('')



  const registJob = ()=>{
    const body = {
      title,
      description,
      price,
      payment,
      dueDate
    }
    axios.post(`${url}/jobs`, body).then(res=>{
      alert(`${title} cadastrado com sucesso!`)
    }).catch(err=>{
      alert(err.response.data)
    })
  }


  const logout = async()=>{
    try{
      await AsyncStorage.clear()
      props.navigation.navigate('Home')
    }catch(e){
      alert(e)
    }
  }


  return(
    <ImageBackground
      source={ require('../../../assets/ninjaWallpaper.jpg') }
      style={styles.bgImage}>

      <ScrollView style={styles.inputContainer}>
        <TextInput style={styles.input}
          onChangeText={setTitle}
          value={title}
          placeholderTextColor={'whitesmoke'}
          placeholder='Título'
          />

        <TextInput style={styles.input}
          onChangeText={setDescription}
          value={description}
          placeholderTextColor={'whitesmoke'}
          placeholder='Descrição'
          />

        <TextInput style={styles.input}
          onChangeText={setPrice}
          value={price}
          keyboardType='numeric'
          placeholderTextColor={'whitesmoke'}
          placeholder='Preço'
          />

        <TextInput style={styles.input}
          onChangeText={setDueDate}
          value={dueDate}
          placeholderTextColor={'whitesmoke'}
          placeholder='dd/mm/aaaa'
          />

        <Text style={styles.txtPicker}>Formas de pagamento:</Text>
        <Picker style={styles.pickerContainer}
          selectedValue={payment}
          onValueChange={(itemValue, itemIndex)=>
          setPayment(itemValue) }>

          <Picker.Item style={styles.pickerContent}
            label='Cartão de crédito' value='Cartão de crédito'/>
          <Picker.Item style={styles.pickerContent}
            label='Cartão de débito' value='Cartão de débito'/>
          <Picker.Item style={styles.pickerContent}
            label='Paypal' value='Paypal'/>
          <Picker.Item style={styles.pickerContent}
            label='Boleto' value='Boleto'/>
          <Picker.Item style={styles.pickerContent}
            label='Pix' value='Pix'/>

        </Picker>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnNav}
            onPress={registJob}>
            <Text style={styles.txtBtn}>Cadastrar serviço</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnNav}
            onPress={()=> props.navigation.navigate('List')}>
            <Text style={styles.txtBtn}>Lista</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </ImageBackground>
  )
}
