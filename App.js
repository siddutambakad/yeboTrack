import 'react-native-gesture-handler';
import React, {useState, useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LoginPage from './screens/LoginPage';
import VerifyOtpScreen from './screens/VerifyOtpScreen';
import HomeScreen from './screens/HomeScreen';
import TestScreen from './screens/TestScreen';
import DriverHomeScreen from './screens/DriverHomeScreen';

const Stack = createStackNavigator();

function StackNavigator() {
  // const [showSplash, setShowSplash] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowSplash(false);
  //   }, 1000);
  // }, []);
  return (
    <Stack.Navigator>
      {/* {showSplash && (
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
      )} */}
      {/* <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{headerShown: false}}
      />  */}
      {/* <Stack.Screen
        name="Verify"
        component={VerifyOtpScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Driver"
        component={DriverHomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
