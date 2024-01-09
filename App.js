import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [step, setStep] = useState(0);
  const [battery, setBattery] = useState(0);

  return (
    <View style={styles.container}>
      <Text>MANUEL SIMPLIFIE DE DÉSAMORÇAGE DE BOMBE (KTANE)</Text>
      <StatusBar style="auto" />

      {step === 0 &&  // SI (...) ALORS
        <View style={styles.container}>
          <Text>Est-ce que le bouton est rouge avec "Maintenir" écrit dessus ?</Text>
          
          <Button
            title={"Oui"}
            onPress={() => {
              setStep(4);
            }}
          />

          <Button
            title={"Non"}
            onPress={() => {
              setStep(1);
            }}
          />

        </View>
      }
      
      {step === 1 &&  // SI (...) ALORS
          <View style={styles.container}>

            <Text>Combien y a-t-il de de piles ?</Text>

            <Button
              title={"0 ou 1"}
              onPress={() => {
                setStep(5);
              }}
            />

            <Button
              title={"2"}
              onPress={() => {
                setStep(2);
                setBattery(2);
              }}
            />

            <Button
              title={"3 ou +"}
              onPress={() => {
                setStep(2);
              }}
            />

          </View>
        }

      {step === 2 &&  // SI (...) ALORS
        <View style={styles.container}>

          <Text>Est-ce qu'il y a écrit "Exploser" sur le bouton ?</Text>

          <Button
            title={"Oui"}
            onPress={() => {
              setStep(4);
            }}
          />

          <Button
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
          <View style={styles.container}>

            <Text>Est-ce qu'il y a un indicateur à côté du bouton avec écrit "FRK" dessus ?</Text>

            <Button
              title={"Oui"}
              onPress={() => {
                setStep(4);
              }}
            />

            <Button
              title={"Non"}
              onPress={() => {
                setStep(5);
              }}
            />

          </View>
        }

        {step === 4 &&  // SI (...) ALORS
          <View style={styles.container}>

            <Text>SOLUTION : Appuyer et relâcher immédiatement le bouton.</Text>

          </View>
        }

        {step === 5 &&  // SI (...) ALORS
          <View style={styles.container}>

            <Text>Maintenir le bouton appuyé et attendre mon signal pour relâcher le bouton.</Text>

            <Text>Quelle est la couleur de la bande à côté du bouton ?</Text>

            <Button
              title={"Bleue"}
              onPress={() => {
                setStep(6);
              }}
            />

            <Button
              title={"Jaune"}
              onPress={() => {
                setStep(7);
              }}
            />

            <Button
              title={"Blanche ou d'une autre couleur"}
              onPress={() => {
                setStep(8);
              }}
            />

          </View>
        }

      {step === 6 &&  // SI (...) ALORS
        <View style={styles.container}>

          <Text>Relâcher le bouton lorsque le compte à rebours affiche un 4 à n'importe quelle position.</Text>

        </View>
      }

      {step === 7 &&  // SI (...) ALORS
        <View style={styles.container}>

          <Text>Relâcher le bouton lorsque le compte à rebours affiche un 5 à n'importe quelle position.</Text>

        </View>
      }

      {step === 8 &&  // SI (...) ALORS
        <View style={styles.container}>

          <Text>Relâcher le bouton lorsque le compte à rebours affiche un 1 à n'importe quelle position.</Text>

        </View>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});