import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import Header from "../Header";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function SimpleWiresModule({ navigation }) {

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

  const [step, setStep] = useState(0);

  return (

    <View style={styles.container}>

      <Header />

      <Text style={styles.h1}>Module des fils</Text>

      <View style={styles.footer}>

        <View style={styles.row}>
          
          <View style={styles.button}>
            <Button
              title={"Recommencer"}
              onPress={() => {
                setStep(0);
              }}
            />
          </View>

          <View style={styles.button}>
            <Button
              title={"Menu principal"}
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
          </View>

        </View>

      </View>

    </View>
  )
}