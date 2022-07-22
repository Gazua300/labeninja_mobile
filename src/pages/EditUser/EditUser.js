import { useEffect, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { url } from "../../constants/urls"
import axios from 'axios'
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from "react-native"



const EditUser = (props)=>{
    const [perfil, setPerfil] = useState({})
    const [jobs, setJobs] = useState([])
console.log(jobs)


    const getUser = async()=>{
        const id = await AsyncStorage.getItem('token')

        axios.get(`${url}/user/${id}`).then(res=>{
            setPerfil(res.data)
        }).catch(e=>{
            alert(e.response.data)
        })
    }


    const hiredByProvider = async()=>{
        const id = await AsyncStorage.getItem('token')

        axios.get(`${url}/provider/jobs/${id}`).then(res=>{
            setJobs(res.data)
        }).catch(e=>{
            alert(e.response.data)
        })
    }

    useEffect(()=>{
        hiredByProvider()
        getUser()
    }, [])

    

    return(
        <ImageBackground
            style={{flex:1}}
            source={require('../../../assets/terceirizacao.jpg')}>                
            <View style={styles.container}>
                <View style={styles.txtContainer}>
                    <Text style={styles.txtStyle}>
                        {perfil.name}{'\n'}
                        {perfil.phone}
                    </Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{color:'whitesmoke'}}>Deslogar</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.txtLine}>
                    Serviços que você cadastrou
                </Text>
                <View style={{
                    borderWidth: 1,
                    marginTop: 10,
                    marginHorizontal: 10,
                    borderColor: 'whitesmoke'
                }} />
                <ScrollView>
                    {jobs.length > 0 ? jobs.map(job=>{
                        return(
                            <View key={job.id}
                                style={styles.card}>
                                <Text style={styles.title}>{job.title}</Text>
                                <Text style={styles.txtJob}>
                                    {job.description}{'\n'}
                                    {job.phone}{'\n'}
                                    {job.period}
                                </Text>
                            </View>
                        ) 
                    }) : <Text>Nenhum serviços ainda</Text>}
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    txtContainer: {
        margin: 50,
        alignItems: 'center'
    },
    txtStyle: {
        fontSize: 18,
        color: 'whitesmoke',
        textAlign: 'center'
    },
    txtLine: {
        color: 'whitesmoke',
        textAlign: 'center',
        fontSize: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#151E3D',
        width: 150,
        height: 40,
        borderRadius: 15,
        marginTop: 50
      },
      card: {
        borderColor: 'whitesmoke',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 10
      },
      title: {
        color: 'whitesmoke',
        textAlign: 'center',
        fontSize: 18
      },
      txtJob: {
        color: 'whitesmoke'
      }
})

export default EditUser