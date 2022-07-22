import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../../constants/urls'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Context from '../../global/Context'
import Eye from 'react-native-vector-icons/Entypo'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    ScrollView
} from 'react-native'



const Login = (props)=>{
    const { getToken } = useContext(Context)
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [eyeIcon, setEyeIcon] = useState('eye-with-line')
    const [secureText, setSecureText] = useState(true)


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


    const login = ()=>{
        const body = {
            phone,
            password
        }
        axios.post(`${url}/login`, body).then(res=>{
            getToken(res.data)
            props.navigation.navigate('Home')
        }).catch(e=>{
            alert(e.response.data)
        })
    }


    const limpar = ()=>{
        setPhone('')
        setPassword('')
    }


    return(
        <ImageBackground
            style={{flex:1}}
            source={require('../../../assets/terceirizacao.jpg')}>
            <View style={styles.container}>            
            <ScrollView>
                <TextInput style={styles.input}
                    onChangeText={setPhone}
                    value={phone}
                    placeholder='Telefone(somente números)'
                    keyboardType='numeric'
                    placeholderTextColor='rgba(255, 255, 255, 0.2)'/>
                <TextInput style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={secureText}
                    placeholder='Sua senha'
                    placeholderTextColor='rgba(255, 255, 255, 0.2)'/>
                <TouchableOpacity style={styles.eye}
                    onPress={visibility}>
                    <Eye name={eyeIcon} size={25} color='whitesmoke'/>
                </TouchableOpacity>
                
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.button}
                        onPress={limpar}>
                        <Text style={{color:'whitesmoke'}}>
                            Limpar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={login}>
                        <Text style={{color:'whitesmoke'}}>
                            Entrar
                        </Text>
                    </TouchableOpacity>                
                </View>
                <View style={{alignItems:'center', margin:20}}>
                    <Text style={{
                        color:'whitesmoke',
                        fontSize: 18
                    }}>
                        Ainda não tem cadastro? Clique <Text style={{color:'blue'}}
                            onPress={()=> props.navigation.navigate('Signup')}>
                            aqui
                        </Text>
                    </Text>
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
        right: '6%',
        top: '32%'
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

export default Login