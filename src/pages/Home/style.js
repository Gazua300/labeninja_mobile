import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  title:{
    color: 'whitesmoke',
    fontSize: 25,
    marginTop: 30
  },
  txtStyle: {
    color:'whitesmoke',
    margin: 15,
    fontSize: 18
  },
  bgImage: {
    flex: 1
  },
  imgPic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    opacity: 0.7,
    marginVertical: 20
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  btnNav: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#151E3D',
    width: 150,
    height: 40,
    borderRadius: 15,
    margin: 10,
    padding: 5
  },
  txtBtn: {
    color: 'whitesmoke'
  }
})

export default styles
