import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';

import SplashScreen from './finalMAD/pages/SplashScreen';
import SignIn from './finalMAD/pages/SignIn';
import SignUp from './finalMAD/pages/SignUp';
import SignUp2 from './finalMAD/pages/SignUp2';
import Menu from './finalMAD/pages/Menu';
import ListProduk from './finalMAD/pages/ListProduk';
import Checkout from './finalMAD/pages/Checkout';
import Payment from './finalMAD/pages/Payment';
import PaymentSucces from './finalMAD/pages/PaymentSucces';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp2"
          component={SignUp2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ListProduk"
          component={ListProduk}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PaymentSucces"
          component={PaymentSucces}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
