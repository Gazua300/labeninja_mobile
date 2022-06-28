import { useContext, useState } from "react"
import Context from "../../global/Context"
import axios from 'axios'
import { url } from "../../constants/urls"
import { Picker } from '@react-native-picker/picker'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from "react-native"



export default function Detail(props){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [payment, setPayment] = useState('')
    const { job } = useContext(Context)



    const contractJob = ()=>{
        const body ={
            name,
            email,
            payment,
            job: job.title
        }
        axios.post(`${url}/job`, body).then(res=>{
            alert(`${job.title} contratado com sucesso`)
        }).catch(e=>{
            alert(e.response.data)
        })
    }


    return(
        <ImageBackground style={styles.bgImage}
            source={require('../../../assets/ninjaWallpaper.jpg')}>
            <View style={styles.cardContainer}> 
                <Text style={styles.title}>{job.title}</Text>
                <View style={{margin:5}}>
                    <Text style={{color:'whitesmoke'}}>
                        <Text style={{fontWeight:'bold'}}>Descrição:</Text> {job.description}
                    </Text>
                    <Text style={{color:'whitesmoke'}}>
                        <Text style={{fontWeight:'bold'}}>Preço:</Text> R$ {job.price},00
                    </Text>
                    <Text style={{color:'whitesmoke'}}>
                        <Text style={{fontWeight:'bold'}}>Prazo:</Text> {new Date(job.dueDate).toLocaleDateString()}
                    </Text>
                    <Text style={{color:'whitesmoke'}}>
                        <Text style={{fontWeight:'bold'}}>Forma de pagamento:</Text> {job.payment}
                    </Text>
                </View>
            </View>
            <View style={{marginTop:50}}>
                <Text style={styles.title}>Contratação</Text>
                <TextInput style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder='Nome do contratante'
                    placeholderTextColor={'whitesmoke'}/>
                <TextInput style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder='nome@email.com'
                    placeholderTextColor={'whitesmoke'}/>
                <View style={styles.pickerContainer}>
                    <Picker 
                        selectedValue={payment}
                        onValueChange={(itemValue, itemIndex)=>
                        setPayment(itemValue)}>                    
                        
                        <Picker.Item style={styles.pickerContent}
                            label="Débito" value='Débito'/>
                        <Picker.Item style={styles.pickerContent}
                            label="Crédito" value='Crédito'/>
                        <Picker.Item style={styles.pickerContent}
                            label="Pix" value='Pix'/>
                        <Picker.Item style={styles.pickerContent}
                            label="Boleto" value='Boleto'/>

                    </Picker>
                </View>
                <TouchableOpacity style={styles.button}
                    onPress={contractJob}>
                    <Text style={{color:'whitesmoke'}}>Contratar</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bgImage: {
        flex: 1
      },
    cardContainer: {
        borderWidth: 1,
        borderColor: 'whitesmoke',
        margin: 10,
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
        paddingLeft: 15,
        color: 'whitesmoke'
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: 'whitesmoke',
        borderRadius: 10,
        margin: 15
    },
    pickerContent: {
        fontSize: 18
    },
    button: {
        backgroundColor: '#151E3D',
        padding: 5,
        width: 250,
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: '20%',
        marginTop: 20
    }
})