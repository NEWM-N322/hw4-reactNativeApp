//app.js

//importing all components needed
//importing useState from react
import { useState } from 'react';
//react-native
import { View, SafeAreaView, StyleSheet } from 'react-native';


//import screens needed

//home screen
import {HomeScreen}  from './components/HomeScreen';

//second screen
import { SecondScreen } from './components/SecondScreen';

export default function App() {
   //create a constant variable
   const [currentView, setCurrentView] = useState();
  //return a safe area view w/ a nav that will allow for navigation btwn home screen and the second screen
  return (
    <SafeAreaView style={styles.container}>
    {!currentView ? (
      <View>
        <HomeScreen currentView={setCurrentView} />
         
      </View> 
       ) : ( 
       <SecondScreen currentView={setCurrentView} previousInput={currentView} />
    )}
  </SafeAreaView>
  );
}

//create a stylesheet for app
const styles = StyleSheet.create({
  //container, entire app
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c1a99e'
  },
});
