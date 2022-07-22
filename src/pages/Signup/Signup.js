import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../../constants/urls'
import Eye from 'react-native-vector-icons/Entypo'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Context from '../../global/Context'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    ScrollView
} from 'react-native'



const Signup = (props)=>{
    const { getToken } = useContext(Context)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [passConfirm, setPassConfirm] = useState('')
    const [eyeIcon, setEyeIcon] = useState('eye-with-line')
    const [secureText, setSecureText] = useState(true)
    const [eyeIcon2, setEyeIcon2] = useState('eye-with-line')
    const [secureText2, setSecureText2] = useState(true)
    const backgroundPlaceholder = 'rgba(255, 255, 255, 0.5)'


    useEffect(()=>{
        (async()=>{
            const token = await AsyncStorage.getItem('token')
            if(token){
                props.navigation.navigate('Home')
            }
        })()
    }, [])


    const visibility = ()=>{
        if(eyeIcon === 'eye-with-line'){
            setEyeIcon('eye')
            setSecureText(false)
        }else if(eyeIcon === 'eye'){
            setEyeIcon('eye-with-line')
            setSecureText(true)
        }
    }

    const visibility2 = ()=>{
        if(eyeIcon2 === 'eye-with-line'){
            setEyeIcon2('eye')
            setSecureText2(false)
        }else if(eyeIcon2 === 'eye'){
            setEyeIcon2('eye-with-line')
            setSecureText2(true)
        }
    }



    const signup = ()=>{
        const body = {
            name,
            phone,
            password
        }

        if(password !== passConfirm){
            alert('As senha não correspondem!')
        }else{
            axios.post(`${url}/signin`, body).then(res=>{
                getToken(res.data)
                props.navigation.navigate('Home')
            }).catch(e=>{
                alert(e.response.data)
            })
        }
        
    }


    const limpar = ()=>{
        setName('')
        setPassConfirm('')
        setPhone('')
        setPassword('')
    }


    return(
        <ImageBackground
            style={{flex:1}}
            source={require('../../../assets/terceirizacao.jpg')}>
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.txtStyle}>
                        Preencha o formulário com seus dados para criar uma nova conta.
                    </Text>
                    <TextInput style={styles.input}
                        onChangeText={setName}
                        value={name}
                        placeholder='Seu nome'
                        placeholderTextColor={backgroundPlaceholder}/>   

                    <TextInput style={styles.input}
                        onChangeText={setPhone}
                        value={phone}
                        keyboardType='numeric'
                        placeholder='Telefone(somente números)'
                        placeholderTextColor={backgroundPlaceholder}/>
                
                    <TextInput style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={secureText}
                        placeholder='Sua senha'
                        placeholderTextColor={backgroundPlaceholder}/>
                    <TouchableOpacity style={styles.eye}
                        onPress={visibility}>
                        <Eye name={eyeIcon} size={25} color='whitesmoke'/>
                    </TouchableOpacity>
                
                    <TextInput style={styles.input}
                        onChangeText={setPassConfirm}
                        value={passConfirm}
                        secureTextEntry={secureText2}
                        placeholder='Confirme sua senha'
                        placeholderTextColor={backgroundPlaceholder}/>
                    <TouchableOpacity style={styles.eye2}
                        onPress={visibility2}>
                        <Eye name={eyeIcon2} size={25} color='whitesmoke'/>
                    </TouchableOpacity>
                    
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{color:'whitesmoke'}}
                                onPress={limpar}>
                                Limpar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={signup}>
                            <Text style={{color:'whitesmoke'}}>
                                Entrar
                            </Text>
                        </TouchableOpacity>                
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingTop: 50,
        padding: 10
    },
    txtStyle: {
        color: 'whitesmoke',
        textAlign: 'center',
        margin: 10,
        fontSize: 15
    },
    input: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'whitesmoke',
        height: 40,
        fontSize: 18,
        paddingHorizontal: 10,
        color:'whitesmoke'
      },
      eye: {
        position: 'absolute',
        left: '88%',
        top: '55%'
      },
      eye2: {
        position: 'absolute',
        left: '88%',
        top: '71%'
      },
      btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#151E3D',
        width: 150,
        height: 40,
        borderRadius: 15,
        margin: 10
      },
})

export default Signup