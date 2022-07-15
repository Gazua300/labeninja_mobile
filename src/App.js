import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from './global/Context'
import Person from 'react-native-vector-icons/Ionicons'
import HomeIcon from 'react-native-vector-icons/Entypo'
import Login from './pages/Login/Login'
import Home from './pages/Home'
import List from './pages/List'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Detail from './pages/Detail'
import EditUser from './pages/EditUser/EditUser'
import { StatusBar, StyleSheet, TouchableOpacity } from 'react-native'



const Stack = createNativeStackNavigator()

export default function App(){

  return(
        <Provider>
          <NavigationContainer>
            <StatusBar backgroundColor='#151E3D'/>
            <Stack.Navigator
              initialRouteName='Login'
              screenOptions={screenOptions}>
              
              <Stack.Screen
                name='Login'
                component={Login}/>

              <Stack.Screen
                name='Home'
                component={Home}
                options={({navigation})=> ({
                headerLeft: ()=>(
                  <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                    <HomeIcon name='home' size={30} color='#151E3D'/>
                  </TouchableOpacity>
                ),
                headerRight: ()=>(
                  <TouchableOpacity onPress={()=> navigation.navigate('EditUser')}>
                    <Person name='person' size={30} color='#151E3D'/>
                  </TouchableOpacity>
                )
              })}/>

              <Stack.Screen
              name='List'
              component={List}
              options={({navigation})=> ({
                headerLeft: ()=>(
                  <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                    <HomeIcon name='home' size={30} color='#151E3D'/>
                  </TouchableOpacity>
                ),
                title: 'Lista',
                headerRight: ()=>(
                  <TouchableOpacity onPress={()=> navigation.navigate('EditUser')}>
                    <Person name='person' size={30} color='#151E3D'/>
                  </TouchableOpacity>
                )
              })}/>

              <Stack.Screen
              name='Register'
              component={Register}
              options={({navigation})=> ({
                headerLeft: ()=>(
                  <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                    <HomeIcon name='home' size={30} color='#151E3D'/>
                  </TouchableOpacity>
                ),
                title: 'Cadastrar Serviço',
                headerRight: ()=>(
                  <TouchableOpacity onPress={()=> navigation.navigate('EditUser')}>
                    <Person name='person' size={30} color='#151E3D'/>
                  </TouchableOpacity>
                )
              })}/>

              <Stack.Screen
              name='Cart'
              component={Cart}
              options={({navigation})=> ({
                headerLeft: ()=>(
                  <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                    <HomeIcon name='home' size={30} color='#151E3D'/>
                  </TouchableOpacity>
                ),
                title: 'Carrinho',
                headerRight: ()=>(
                  <TouchableOpacity onPress={()=> navigation.navigate('EditUser')}>
                    <Person name='person' size={30} color='#151E3D'/>
                  </TouchableOpacity>
                )
              })}/>

              <Stack.Screen
                name='Detalhes'
                component={Detail}
                options={({navigation})=> ({
                  headerLeft: ()=>(
                    <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                      <HomeIcon name='home' size={30} color='#151E3D'/>
                    </TouchableOpacity>
                  ),
                  title: 'Contratar serviço',
                  headerRight: ()=>(
                    <TouchableOpacity onPress={()=> navigation.navigate('EditUser')}>
                      <Person name='person' size={30} color='#151E3D'/>
                    </TouchableOpacity>
                  )
                })}/>

                <Stack.Screen
                  name='EditUser'
                  component={EditUser}
                  options={({navigation})=>({
                    title:'Atualizar Dados',
                    headerRight: ()=>(
                      <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                        <HomeIcon name='home' size={30} color='#151E3D'/>
                      </TouchableOpacity>
                    )
                  })} />
                
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
  )
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#2e2e2e'
  },
  headerTitleStyle: {
    color: 'whitesmoke'
  },
  headerTitleAlign: 'center'
}

const styles = StyleSheet.create({
  btnNav: {
    backgroundColor: '#151E3D',
    padding: 10,
    borderRadius: 10
  },
  txtBtn: {
    color: 'whitesmoke'
  }
})
