// context/CheckInNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CheckInPage1 from '../screens/check-in/CheckInPage1';
import CheckInPage2 from '../screens/check-in/CheckInPage2';
import CheckInPage3KeyIssue from '../screens/check-in/CheckInPage3KeyIssue';
import CheckInPage3formatedCrash from '../screens/check-in/CheckInPage3formatedCrash';
import CheckInPage3withoutInput from '../screens/check-in/CheckInPage3withoutInput';
import CheckInPage4 from '../screens/check-in/CheckInPage4';
import OtherPage from '../components/OtherPage';
import OtherPageInputKeyIssue from "../util/OtherPageInputKeyIssue"
import OtherPageInputFormatedCrash from "../util/OtherPageInputFormatedCrash"

const Stack = createStackNavigator();

const OtherStack = createStackNavigator();

const OtherNavigator = () => {
  return (
    <OtherStack.Navigator initialRouteName="CheckInPage3">
      {/* <OtherStack.Screen name="CheckInPage3" component={CheckInPage3} options={{ headerShown: false }} /> */}
      <OtherStack.Screen name="CheckInPage3" component={CheckInPage3withoutInput} options={{ headerShown: false }} />
      <OtherStack.Screen name="OtherPageInput" component={OtherPageInput} options={{ headerShown: false }} />
    </OtherStack.Navigator>
  );
};

const CheckInNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="CheckInPage1">
      <Stack.Screen name="CheckInPage1" component={CheckInPage1} options={{ headerShown: false }} />
      <Stack.Screen name="CheckInPage2" component={CheckInPage2} options={{ headerShown: false }} /> 
      <Stack.Screen name="CheckInPage3withoutInput" component={CheckInPage3withoutInput} options={{ headerShown: false }} />
      {/* <Stack.Screen name="CheckInPage3formatedCrash" component={CheckInPage3formatedCrash} options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="CheckInPage3KeyIssue" component={CheckInPage3KeyIssue} options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="OtherPageInputKeyIssue" component={OtherPageInputKeyIssue} options={{ headerShown: false }}/>  */}
      {/* <Stack.Screen name="OtherPageInputFormatedCrash" component={OtherPageInputFormatedCrash} options={{ headerShown: false }}/>  */}
      <Stack.Screen name="OtherPage" component={OtherPage} options={{ headerShown: false }}/>
      <Stack.Screen name="CheckInPage4" component={CheckInPage4} options={{ headerShown: false }} /> 
      {/* <Stack.Screen
        name="OtherNavigator"
        component={OtherNavigator}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default CheckInNavigator;

