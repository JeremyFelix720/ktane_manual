// import { useNavigate } from "react-router-dom";
import Header from "../Header";
import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({ navigation }) {

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
      bottom: 30,
    },
  
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    image: {
      width: 150,
    },
  
    form: {
      position: 'relative',
      top: 80,
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

  return (

    <View style={styles.container}>

      <Header />

      <View style={styles.form}>

        <Text style={styles.h2}>Choisissez un Module</Text>

        <Button
          style={[styles.button, styles.buttonGreen]}
          title={"Le bouton"}
          onPress={() => {
            navigation.navigate('ButtonModule');
          }}
        />

        <Button
          style={[styles.button, styles.buttonGreen]}
          title={"Les fils simples"}
          onPress={() => {
            navigation.navigate('SimpleWiresModule');
          }}
        />

      </View>

    </View>

  );
}
