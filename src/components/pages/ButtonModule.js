import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import Header from "../Header";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function ButtonModule({ navigation }) {

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
  const [battery, setBattery] = useState(1);

  const handleClick = (stepNumber, batteryNumber) => {
    setBattery(batteryNumber);
    setStep(stepNumber);
  }

  return (
    <View style={styles.container}>

      <Header />

      <Text style={styles.h1}>Module du bouton</Text>

      {step === 0 &&  // SI (...) ALORS
        <View style={styles.form}>
          <Text style={styles.h2}>Est-ce que le bouton est rouge avec "Maintenir" écrit dessus ?</Text>

            <Button
              style={[styles.button, styles.buttonGreen]}
              title={"Oui"}
              onPress={() => handleClick(4, battery)}
            />

            <Button
              style={[styles.button, styles.buttonRed]}
              title={"Non"}
              onPress={() => handleClick(1, battery)}
            />

        </View>
      }
      
      {step === 1 &&  // SI (...) ALORS
          <View style={styles.form}>

            <Text style={styles.h2}>Combien y a-t-il de de piles ?</Text>

              <Button
                style={styles.button}
                title={"0 ou 1"}
                onPress={() => handleClick(5, battery)}
              />

              <Button
                style={styles.button}
                title={"2"}
                onPress={() => handleClick(2, 2)}
              />

              <Button
                style={styles.button}
                title={"3 ou +"}
                onPress={() => handleClick(2, battery)}
              />

          </View>
        }

      {step === 2 &&  // SI (...) ALORS
        <View style={styles.form}>

          <Text style={styles.h2}>Est-ce qu'il y a écrit "Exploser" sur le bouton ?</Text>

            <Button
              style={[styles.button, styles.buttonGreen]}
              title={"Oui"}
              onPress={() => handleClick(4, battery)}
            />

            <Button
              style={[styles.button, styles.buttonRed]}
              title={"Non"}
              onPress={() => {
                {battery === 2 &&
                  setStep(5);
                }
                {battery !== 2 &&
                  setStep(3);
                }
              }}
            />

        </View>
      }

      {step === 3 &&  // SI (...) ALORS
          <View style={styles.form}>

            <Text style={styles.h2}>Est-ce qu'il y a un indicateur à côté du bouton avec écrit "FRK" dessus ?</Text>

              <Button
                style={[styles.button, styles.buttonGreen]}
                title={"Oui"}
                onPress={() => handleClick(4, battery)}
              />

              <Button
                style={[styles.button, styles.buttonRed]}
                title={"Non"}
                onPress={() => handleClick(5, battery)}
              />

          </View>
        }

        {step === 4 &&  // SI (...) ALORS
          <View style={styles.form}>

            <Text style={styles.h2}>SOLUTION : Appuyer et relâcher immédiatement le bouton.</Text>

          </View>
        }

        {step === 5 &&  // SI (...) ALORS
          <View style={styles.form}>

            <Text style={styles.h2}>Maintenir le bouton appuyé et attendre mon signal pour relâcher le bouton.</Text>

            <Text style={styles.h2}>Quelle est la couleur de la bande à côté du bouton ?</Text>

              <Button
                style={[styles.button, styles.buttonBlue]}
                title={"Bleue"}
                onPress={() => handleClick(6, battery)}
              />

              <Button
                style={[styles.button, styles.buttonYellow]}
                title={"Jaune"}
                onPress={() => handleClick(7, battery)}
              />

            <Button
              style={styles.button}
              title={"Blanche ou d'une autre couleur"}
              onPress={() => handleClick(8, battery)}
            />

          </View>
        }

      {step === 6 &&  // SI (...) ALORS
        <View style={styles.form}>

          <Text style={styles.h2}>Relâcher le bouton lorsque le compte à rebours affiche un 4 à n'importe quelle position.</Text>

        </View>
      }

      {step === 7 &&  // SI (...) ALORS
        <View style={styles.form}>

          <Text style={styles.h2}>Relâcher le bouton lorsque le compte à rebours affiche un 5 à n'importe quelle position.</Text>

        </View>
      }

      {step === 8 &&  // SI (...) ALORS
        <View style={styles.form}>

          <Text style={styles.h2}>Relâcher le bouton lorsque le compte à rebours affiche un 1 à n'importe quelle position.</Text>

        </View>
      }

      <View style={styles.footer}>

        <View style={styles.row}>
          
          <View style={styles.button}>
            <Button
              title={"Recommencer"}
              onPress={() => handleClick(0, 1)}
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
  );
}

