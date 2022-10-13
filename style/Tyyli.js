import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    fontWeight:'bold',
    padding:10,
    borderRadius:50
  },
  header: {
    marginTop: 30,
    backgroundColor: '#423e41',
    flexDirection: 'row',
    fontFamily: 'GemunuLibre',
    borderTopEndRadius:50,
    borderTopStartRadius:50
  },
  footer: {
    backgroundColor: '#423e41',
    flexDirection: 'row',
    borderBottomEndRadius:20,
    borderBottomStartRadius:20,
  },
  title: {
    color: 'white',
    flex: 1,
    fontSize: 54,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'GemunuLibre',
  },
  author: {
    color: 'white',
    flex: 1,
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'GemunuLibre',
  },
  gameboard: {
    backgroundColor: '#ceabf7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: 'white',
    padding:5,
    borderRadius:10,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 10,
    fontFamily: 'GemunuLibre',
    fontSize: 24,
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row",
  },
  grid:{
    alignItems: 'center',
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#9948f7",
    width: 'auto',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e302d8',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  buttonText: {
    color:"white",
    fontSize: 30,
    fontFamily: 'LatoRegular',
  },
  totalText: {
    backgroundColor: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    padding:5,
    fontFamily: 'LatoRegular',
  },
  bonusText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 5,
    fontFamily: 'GemunuLibre',
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    padding:5,
  },
  bonusTextClear: {
    backgroundColor: '#ceabf7',
  }
});