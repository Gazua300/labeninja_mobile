import { useContext, useState } from "react"
import Context from "../../global/Context"
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { convertPhone } from "../../utils/convertPhone"
import { url } from "../../constants/urls"
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native"



export default function Detail(props){
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const { job } = useContext(Context)



    const contractJob = async()=>{
        const id = await AsyncStorage.getItem('token')
        const body ={
            name,
            phone,
            job: job.title,
            client: id,
            provider: job.id
        }
        axios.post(`${url}/job/${job.id}`, body).then(res=>{
            alert(res.data)
        }).catch(e=>{
            alert(e.response.data)
        })
    }


    return(
        <ImageBackground style={styles.bgImage}
            source={require('../../../assets/terceirizacao.jpg')}>
            <View style={styles.container}>
            <View style={styles.cardContainer}> 
                <Text style={styles.title}>{job.title}</Text>
                <View style={{margin:5}}>
                    <Text style={{color:'whitesmoke'}}>
                        <Text style={{fontWeight:'bold'}}>Descrição:</Text> {job.description}
                    </Text>
                    <Text style={{color:'whitesmoke'}}>
                        <Text style={{fontWeight:'bold'}}>Telefone:</Text> {convertPhone(job.phone)},00
                    </Text>
                    <Text style={{color:'whitesmoke'}}>
                        <Text style={{fontWeight:'bold'}}>Atendimento:</Text> {job.period}
                    </Text>
                </View>
            </View>
            <View style={{marginTop:50}}>
                <Text style={styles.title}>Contratação</Text>
                <TextInput style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder='Nome do contratante'
                    placeholderTextColor='rgba(255, 255, 255, 0.2)'/>
                <TextInput style={styles.input}
                    onChangeText={setPhone}
                    value={phone}
                    keyboardType='numeric'
                    placeholder='Telefone(somente números)'
                    placeholderTextColor='rgba(255, 255, 255, 0.2)'/>                
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.button}
                        onPress={contractJob}>
                        <Text style={{color:'whitesmoke'}}>Contratar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bgImage: {
        flex: 1
      },
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    cardContainer: {
        borderWidth: 1,
        borderColor: 'whitesmoke',
        marginTop: 50,
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 5
    },
    title: {
        fontSize: 20,
        color: 'whitesmoke',
        textAlign: 'center',
        marginBottom: 20
    },
    input: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'whitesmoke',
        height: 40,
        fontSize: 18,
        paddingHorizontal: 10,
        color: 'whitesmoke'
    },
    btnContainer: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#151E3D',
        padding: 5,
        width: 150,
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: '20%',
        marginTop: 20
    }
})