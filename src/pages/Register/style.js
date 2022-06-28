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
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnNav: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#151E3D',
    width: 150,
    height: 40,
    borderRadius: 15,
    margin: 10
  },
  txtBtn: {
    color: 'whitesmoke',
    fontSize: 15
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
  inputContainer: {
    marginTop: 30
  },
  pickerContent: {
    color: 'gray'
  },
  pickerContainer: {
    margin: 10
  },
  txtPicker: {
    color: 'whitesmoke',
    marginTop: 25,
    marginLeft: 20,
    fontSize: 18
  }
})

export default styles
