import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bgImage: {
    flex: 1
  },
  imgPic: {
    width: 120,
    height: 120
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  btnNav: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#151E3D',
    width: 130,
    height: 30,
    borderRadius: 15,
    margin: 10
  },
  txtBtn: {
    color: 'whitesmoke'
  }
})

export default styles
