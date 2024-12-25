// context/CheckInNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CheckInPage1 from '../screens/check-in/CheckInPage1';
import CheckInPage2 from '../screens/check-in/CheckInPage2';
import OtherPage from '../components/OtherPage';

const Stack = createStackNavigator();

const CheckInNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="CheckInPage1">
      <Stack.Screen name="CheckInPage1" component={CheckInPage1} options={{ headerShown: false }} />
      <Stack.Screen name="CheckInPage2" component={CheckInPage2} options={{ headerShown: false }} /> 
      {/* <Stack.Screen name="CheckInPage3" component={CheckInPage3} options={{ headerShown: false }} />  */}
      <Stack.Screen name="OtherPage" component={OtherPage} options={{ headerShown: false }} // Disables the header
/>
    </Stack.Navigator>
  );
};

export default CheckInNavigator;
