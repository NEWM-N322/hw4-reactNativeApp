import { View, Text, Pressable, StyleSheet} from 'react-native';

export const SecondScreen = ({ currentView, previousInput}) => {
        return (
                <View >
                <h1>
          {' '}
          <b>Welcome to Screen Two!</b>
          <Text style={styles.regularTxt}> You have entered your name as: {previousInput}</Text>
        </h1>
                <p style={styles.regularTxt} >
          {' '}
          You can click on the button to take you back home.{' '}
        </p>
         <Pressable style={styles.button} onPress={() => currentView('')}>
                <Text style={styles.buttonTxt}>GO HOME</Text>
                  </Pressable>
                </View>
              )
}

const styles = StyleSheet.create({
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
        regularTxt: {
                fontSize: 20
        }
})