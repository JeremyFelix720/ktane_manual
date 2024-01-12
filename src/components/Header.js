import { Image, StyleSheet, Button, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Header(){

  return (
    <View style={styles.header}>
      <Text>MANUEL SIMPLIFIÉ DE DÉSAMORÇAGE DE BOMBE</Text>
      <Image
        style={styles.image}
        source={{uri: 'img:/ktane-logo.png'}}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    margin: 10,
  },

  header: {
    padding: 10,
    backgroundColor: '#C0C0C0',
    color: '#FFF',
    fontWeight: 'bold',
  },

  footer: {
    flex:1,
    position: 'absolute',
    bottom: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  image: {
    width: 150,
  },

  form: {
    position: 'relative',
    top: 40,
    color: '#303030',
    flexDirection: 'column',
  },

  h1: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 15,
  },

  h2: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
    marginBottom: 15,
  },

  button: {
    alignSelf: 'center',
    backgroundColor: '#696969',
    color: '#FFF',
    fontWeight: 'bold',
    margin: '10',
  },

  buttonRed: {
    backgroundColor: '#FF0000',
  },

  buttonGreen: {
    backgroundColor: '#32CD32',
  },

  buttonBlue: {
    backgroundColor: '#4169E1',
  },

  buttonYellow: {
    backgroundColor: '#FFD700',
  },

})