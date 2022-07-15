import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  bgImage: {
    flex: 1
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: 'whitesmoke',
    margin: 10,
    borderRadius: 10,
  },
  cardTotal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'whitesmoke'
  },
  btnContract: {
    alignItems: 'center'
  },
  btnNav: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#151E3D',
    width: 80,
    height: 30,
    borderRadius: 15,
    margin: 10
  },
  btnClearCart: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#151E3D',
    width: 120,
    height: 30,
    borderRadius: 15,
    margin: 10
  },
  btnBack: {
    alignItems: 'center'
  },
  txtBtn: {
    color: 'whitesmoke'
  }
})

export default styles
