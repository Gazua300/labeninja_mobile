import React, { useState } from 'react'
import axios from 'axios'
import { url } from '../../constants/urls'
import styles from './style'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'



export default function Register(props){
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [phone, setPhone] = useState('')
  const [period, setPeriod] = useState('')
  const placeholderBackground = 'rgba(255, 255, 255, 0.2)'



  const registJob = ()=>{
    const body = {
      title,
      description,
      phone,
      period
    }
    
    axios.post(`${url}/jobs`, body).then(res=>{
      alert(`${title} cadastrado com sucesso!`)
    }).catch(err=>{
      alert(err.response.data)
    })
    
  }




  return(
    <ImageBackground
      source={ require('../../../assets/terceirizacao.jpg') }
      style={styles.bgImage}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.formContainer}>
            <TextInput style={styles.input}
              onChangeText={setTitle}
              value={title}
              placeholderTextColor={placeholderBackground}
              placeholder='Título'
              />

            <TextInput style={styles.textarea}
              onChangeText={setDescription}
              value={description}
              multiline={true}
              placeholderTextColor={placeholderBackground}
              placeholder='Descrição dos seus serviços'
              />

            <TextInput style={styles.input}
              onChangeText={setPhone}
              value={phone}
              keyboardType='numeric'
              placeholderTextColor={placeholderBackground}
              placeholder='Telefone'
              />

            <TextInput style={styles.textarea}
              onChangeText={setPeriod}
              value={period}
              placeholderTextColor={placeholderBackground}
              placeholder='Período de atendimento'
              />


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
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  )
}
