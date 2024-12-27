// context/CheckInNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CheckInPage1 from '../screens/check-in/CheckInPage1';
import CheckInPage2 from '../screens/check-in/CheckInPage2';
import CheckInPage3 from '../screens/check-in/CheckInPage3';
import OtherPage from '../components/OtherPage';
import OtherPageInput from "../util/OtherPageInput"

const Stack = createStackNavigator();

const OtherStack = createStackNavigator();

const OtherNavigator = () => {
  return (
    <OtherStack.Navigator initialRouteName="CheckInPage3">
      <OtherStack.Screen name="CheckInPage3" component={CheckInPage3} options={{ headerShown: false }} />
      <OtherStack.Screen name="OtherPageInput" component={OtherPageInput} options={{ headerShown: false }} />
    </OtherStack.Navigator>
  );
};

const CheckInNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="CheckInPage1">
      <Stack.Screen name="CheckInPage1" component={CheckInPage1} options={{ headerShown: false }} />
      <Stack.Screen name="CheckInPage2" component={CheckInPage2} options={{ headerShown: false }} /> 
      <Stack.Screen name="OtherPage" component={OtherPage} options={{ headerShown: false }}/>
      {/* <Stack.Screen name="CheckInPage3" component={CheckInPage3} options={{ headerShown: false }} />  */}
      {/* <Stack.Screen name="OtherPageInput" component={OtherPageInput} options={{ headerShown: false }}/>  */}
      <Stack.Screen
        name="OtherNavigator"
        component={OtherNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CheckInNavigator;
