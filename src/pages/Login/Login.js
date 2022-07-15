import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../../constants/urls'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Context from '../../global/Context'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    StyleSheet
} from 'react-native'



const Login = (props)=>{
    const { getToken } = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    useEffect(()=>{
        (async()=>{
            const token = await AsyncStorage.getItem('token')
            if(token){
                props.navigation.navigate('Home')
            }
        })()
    }, [])



    const login = ()=>{
        const body = {
            email,
            password
        }
        axios.post(`${url}/login`, body).then(res=>{
            getToken(res.data)
        }).catch(e=>{
            alert(e.response.data)
        })
    }


    const limpar = ()=>{
        setEmail('')
        setPassword('')
    }


    return(
        <ImageBackground
            style={{flex:1}}
            source={require('../../../assets/terceirizacao.jpg')}>

            <View style={styles.container}>            
                <TextInput style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder='nome@email.com'
                    placeholderTextColor='rgba(255, 255, 255, 0.2)'/>
                <TextInput style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                    placeholder='nome@email.com'
                    placeholderTextColor='rgba(255, 255, 255, 0.2)'/>
                
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
                        Ainda não tem cadastro? Clique <Text style={{color:'blue'}}>
                            aqui
                        </Text>
                    </Text>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
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