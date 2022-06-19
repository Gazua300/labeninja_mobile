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
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnNav: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#151E3D',
    width: 150,
    height: 30,
    borderRadius: 15,
    marginTop: 10
  },
  txtBtn: {
    color: 'whitesmoke'
  },
  legend: {
    color: 'whitesmoke',
    fontWeight: 'bold'
  },
  card: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'whitesmoke',
    borderRadius: 10,
    padding: 5
  },
  cardContent: {
    margin: 10
  }
})

export default styles
