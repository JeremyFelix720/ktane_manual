import { StatusBar } from 'expo-status-bar';
import { Image, Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [step, setStep] = useState(0);
  const [battery, setBattery] = useState(0);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text>MANUEL SIMPLIFIÉ DE DÉSAMORÇAGE DE BOMBE</Text>
        <Image
          style={styles.image}
          source={{uri: 'img:/ktane-logo.png'}}
        />
        <StatusBar style="auto" />
      </View>

      {step === 0 &&  // SI (...) ALORS
        <View style={styles.form}>
          <Text style={styles.h2}>Est-ce que le bouton est rouge avec "Maintenir" écrit dessus ?</Text>

            <Button
              style={[styles.button, styles.buttonGreen]}
              title={"Oui"}
              onPress={() => {
                setStep(4);
              }}
            />

            <Button
              style={[styles.button, styles.buttonRed]}
              title={"Non"}
              onPress={() => {
                setStep(1);
              }}
            />

        </View>
      }
      
      {step === 1 &&  // SI (...) ALORS
          <View style={styles.form}>

            <Text style={styles.h2}>Combien y a-t-il de de piles ?</Text>

              <Button
                style={styles.button}
                title={"0 ou 1"}
                onPress={() => {
                  setStep(5);
                }}
              />

              <Button
                style={styles.button}
                title={"2"}
                onPress={() => {
                  setStep(2);
                  setBattery(2);
                }}
              />

              <Button
                style={styles.button}
                title={"3 ou +"}
                onPress={() => {
                  setStep(2);
                }}
              />

          </View>
        }

      {step === 2 &&  // SI (...) ALORS
        <View style={styles.form}>

          <Text style={styles.h2}>Est-ce qu'il y a écrit "Exploser" sur le bouton ?</Text>

            <Button
              style={[styles.button, styles.buttonGreen]}
              title={"Oui"}
              onPress={() => {
                setStep(4);
              }}
            />

            <Button
              style={[styles.button, styles.buttonRed]}
              title={"Non"}
              onPress={() => {
                {battery === 2 &&
                  setStep(5);
                }
                  setStep(3);
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
                onPress={() => {
                  setStep(4);
                }}
              />

              <Button
                style={[styles.button, styles.buttonRed]}
                title={"Non"}
                onPress={() => {
                  setStep(5);
                }}
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
                onPress={() => {
                  setStep(6);
                }}
              />


              <Button
                style={[styles.button, styles.buttonYellow]}
                title={"Jaune"}
                onPress={() => {
                  setStep(7);
                }}
              />

            <Button
              style={styles.button}
              title={"Blanche ou d'une autre couleur"}
              onPress={() => {
                setStep(8);
              }}
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

      <View style={[styles.button, styles.buttonBack]}>
        <Button
          title={"Recommencer"}
          onPress={() => {
            setStep(0);
          }}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    margin: 10,
  },

  header: {
    position: 'relative',
    top: 30,
    padding: 10,
    backgroundColor: '#C0C0C0',
    color: '#FFF',
    fontWeight: 'bold',
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

  h2: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: 24,
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

  buttonBack: {
    position: 'absolute',
    bottom: 30,
  }

});