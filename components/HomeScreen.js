//screen one
//import useState from react
import { useState } from 'react';

//import react-native
import {TextInput, View, Text, Pressable, StyleSheet } from 'react-native';

//create the function that will be used in home page
//needs the nav and route in order to allow navigation btwn screens
export const HomeScreen = ({ currentView }) => {
  //create the useState which will help switch screens
  const [whatView, setWhatView] = useState();

  //return homepage set up
  return (
 <View style={styles.container}>
  <h1>
          {' '}
          <b>Homework Four</b>
        </h1>
        <p style={styles.regularTxt} >
          {' '}
          Welcome Homework Four! This assignment was created locally through React Native. Type in your name and click on the button that reads <i>Click Me</i> to view the second screen.{' '}
        </p>
   <View>
        <Text style={styles.name}> What is your name?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setWhatView}
        />
           <Pressable style={styles.button} onPress={() => currentView(whatView)}>
      <Text style={styles.buttonTxt}>CLICK ME</Text>
    </Pressable>
      </View>
  </View>
  );
}

//stylesheet
const styles = StyleSheet.create({
        container: {
                width: 500,
                marginRight: 60
        },
        textInput: {
          backgroundColor: '#fff',
          width: 500,
          height: 50,
          paddingLeft: 20,
          marginBottom: 20,
          marginTop: 20
        },
      
        button: {
          backgroundColor: '#BB85AB',
          padding: 20,
          alignItems: 'center',
          borderRadius: 4,
        },
        buttonTxt: {
                color: '#FFF',
                fontWeight: 'bold',
                fontSize: 20,
        },
        name: {
                fontSize: 20,
                fontStyle: 'italic',
        },
        regularTxt: {
                fontSize: 20
        }
      })
