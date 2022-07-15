import { useEffect, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { url } from "../../constants/urls"
import axios from 'axios'
import { StyleSheet, View, Text, ImageBackground } from "react-native"



const EditUser = (props)=>{
    const [perfil, setPerfil] = useState({})
    const [jobs, setJobs] = useState([])
console.log(jobs)


    const hiredByProvider = async()=>{
        const id = await AsyncStorage.getItem('token')

        axios.get(`${url}/provider/${id}`).then(res=>{
            setJobs(res.data)
        }).catch(e=>{
            alert(e.response.data)
        })
    }

    useEffect(()=>{
        (async()=>{
            const id = await AsyncStorage.getItem('')
        })()
        hiredByProvider()
    }, [])

    

    return(
        <ImageBackground
            style={{flex:1}}
            source={require('../../../assets/terceirizacao.jpg')}>                
            <View style={styles.container}>

            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }
})

export default EditUser