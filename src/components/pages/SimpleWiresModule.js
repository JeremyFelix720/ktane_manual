import * as React from 'react';
import { useState, useMemo } from 'react';
import { StyleSheet, Button, View, Text, Touchable, TouchableOpacity } from 'react-native';
import Header from "../Header";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const possibleCoolors = ["blue", "red", "yellow", "white", "black"];

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
  const [colors, setColors] = useState(["blue", "blue", "blue", "blue", "blue", "blue"]);
  const [lastNumberIsPair, setLastNumberIsPair] = useState(true)

  const result = useMemo(() => {

    const nbBlueWires = colors.filter(color => color === 'blue').length
    const nbRedWires = colors.filter(color => color === 'red').length
    const nbYellowWires = colors.filter(color => color === 'yellow').length
    const nbWhiteWires = colors.filter(color => color === 'white').length
    const nbBlackWires = colors.filter(color => color === 'black').length

    if(colors.length === 3){

      if(nbRedWires === 0){
        return "Couper le deuxième fil."
      }

      else if(nbBlueWires > 1){
        return "Couper le dernier fil bleu."
      }

      else {
        return "Couper le dernier fil."
      }

    }

    else if(colors.length === 4){

      if(nbRedWires > 1 && lastNumberIsPair === false){
        return "Couper le dernier fil rouge"
      }

      else if(colors[3] === 'yellow' && nbRedWires === 0){
        return "Couper le premier fil"
      }

      else if(nbBlueWires === 1){
        return "Couper le premier fil."
      }

      else if(nbYellowWires > 1){
        return "Couper le dernier fil."
      }

      else {
        return "Couper le deuxième fil."
      }

    }

    /*
    else if(colors.length === 5){
      if(){
        return "Couper (...)"
      }
    }
    */

    /*
    else if(colors.length === 6){
      if(){
        return "Couper (...)"
      }
    }
    */

    return "Pas encore de solution."
  }, [colors])

  const handleWireNumber = (wireNumber) => {
    setStep(1)
    setColors(new Array(wireNumber).fill('blue'))
  }

  const handleChangeColor = (newColor, wireIndex) => {
    const newColors = [...colors]
    newColors[wireIndex] = newColor
    setColors(newColors)
  }

  const handleLastNumber = (isPairOrNot) => {
    setStep(3)
    setLastNumberIsPair(isPairOrNot)
  }


  return (

    <View style={styles.container}>

      <Header />

      <Text style={styles.h1}>Module des fils simples</Text>

      {step === 0 &&  // SI (...) ALORS
        <View style={styles.form}>
          <Text style={styles.h2}>Combien y a-t-il de fils ?</Text>

          <Button
            style={styles.button}
            title={"3"}
            onPress={() => handleWireNumber(3)}
          />

          <Button
            style={styles.button}
            title={"4"}
            onPress={() => handleWireNumber(4)}
          />

          <Button
            style={styles.button}
            title={"5"}
            onPress={() => handleWireNumber(5)}
          />

          <Button
            style={styles.button}
            title={"6"}
            onPress={() => handleWireNumber(6)}
          />

        </View>
      }

      {step === 1 &&  // SI (...) ALORS
        <View style={styles.form}>

          {colors.map((color, index) => (
            <View
              style={{flexDirection: 'column', marginBottom: 10}}
              key={index}
            >
              <View
                style={{backgroundColor: color, marginTop: 5, height:5, width: '100%',}}>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'center', margin: 5}}>
                {possibleCoolors.map((possibleColor, key) => (
                  <TouchableOpacity
                    key={key}
                    style={{backgroundColor: possibleColor, height: 30, width: 30, margin: 5}}
                    onPress={() => handleChangeColor(possibleColor, index)}
                  />
                ))}
              </View>
            </View>
          ))}

          <Button
            style={styles.button}
            title={"Valider cette combinaison de couleurs"}
            onPress={() => setStep(2)}
          />

        </View>
      }

      {step === 2 &&  // SI (...) ALORS

        <View style={styles.form}>

          <Text style={styles.h2}>Le dernier chiffre du numéro de série est-il pair ?</Text>

          <Button
            style={[styles.button, styles.buttonGreen]}
            title={"Oui"}
            onPress={() => handleLastNumber(true)}
          />

          <Button
            style={[styles.button, styles.buttonRed]}
            title={"Non"}
            onPress={() => handleLastNumber(false)}
          />

        </View>

      }

      {step === 3 &&  // SI (...) ALORS

        <Text style={styles.h2}>SOLUTION : {result}</Text>

      }

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


/*



*/