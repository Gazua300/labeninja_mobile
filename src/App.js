import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from './global/Context'
import { StatusBar, Pressable, StyleSheet, Text } from 'react-native'
import Home from './pages/Home'
import List from './pages/List'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Detail from './pages/Detail'



const Stack = createNativeStackNavigator()

export default function App(){

  return(
        <Provider>
          <NavigationContainer>
            <StatusBar style='auto'/>
            <Stack.Navigator
              initialRouteName='Home'
              screenOptions={screenOptions}>

              <Stack.Screen
              name='Home'
              component={Home}
              options={({navigation})=> ({
                headerLeft: ()=>(
                  <Pressable style={styles.btnNav}
                    onPress={()=> navigation.navigate('Cart')}>
                    <Text style={styles.txtBtn}>Carrinho</Text>
                  </Pressable>
                ),
                headerRight: ()=>(
                  <Pressable style={styles.btnNav}
                    onPress={()=> navigation.navigate('Home')}>
                    <Text style={styles.txtBtn}>Home</Text>
                  </Pressable>
                )
              })}/>

              <Stack.Screen
              name='List'
              component={List}
              options={({navigation})=> ({
                headerLeft: ()=>(
                  <Pressable style={styles.btnNav}
                    onPress={()=> navigation.navigate('Cart')}>
                    <Text style={styles.txtBtn}>Carrinho</Text>
                  </Pressable>
                ),
                title: 'Lista',
                headerRight: ()=>(
                  <Pressable style={styles.btnNav}
                    onPress={()=> navigation.navigate('Home')}>
                    <Text style={styles.txtBtn}>Home</Text>
                  </Pressable>
                )
              })}/>

              <Stack.Screen
              name='Register'
              component={Register}
              options={({navigation})=> ({
                headerLeft: ()=>(
                  <Pressable style={styles.btnNav}
                    onPress={()=> navigation.navigate('Cart')}>
                    <Text style={styles.txtBtn}>Carrinho</Text>
                  </Pressable>
                ),
                title: 'Cadastrar Serviço',
                headerRight: ()=>(
                  <Pressable style={styles.btnNav}
                    onPress={()=> navigation.navigate('Home')}>
                    <Text style={styles.txtBtn}>Home</Text>
                  </Pressable>
                )
              })}/>

              <Stack.Screen
              name='Cart'
              component={Cart}
              options={({navigation})=> ({
                headerLeft: ()=>(
                  <Pressable style={styles.btnNav}
                    onPress={()=> navigation.navigate('Cart')}>
                    <Text style={styles.txtBtn}>Carrinho</Text>
                  </Pressable>
                ),
                title: 'Carrinho',
                headerRight: ()=>(
                  <Pressable style={styles.btnNav}
                    onPress={()=> navigation.navigate('Home')}>
                    <Text style={styles.txtBtn}>Home</Text>
                  </Pressable>
                )
              })}/>

              <Stack.Screen
                name='Detalhes'
                component={Detail}
                options={({navigation})=> ({
                  headerLeft: ()=>(
                    <Pressable style={styles.btnNav}
                      onPress={()=> navigation.navigate('Cart')}>
                      <Text style={styles.txtBtn}>Carrinho</Text>
                    </Pressable>
                  ),
                  title: 'Contratar serviço',
                  headerRight: ()=>(
                    <Pressable style={styles.btnNav}
                      onPress={()=> navigation.navigate('Home')}>
                      <Text style={styles.txtBtn}>Home</Text>
                    </Pressable>
                  )
                })}/>
                
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
