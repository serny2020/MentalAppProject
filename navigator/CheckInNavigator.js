// context/CheckInNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CheckInPage1 from '../screens/check-in/CheckInPage1';
import CheckInPage2 from '../screens/check-in/CheckInPage2';
import CheckInPage3KeyIssue from '../screens/check-in/CheckInPage3KeyIssue';
import CheckInPage3formatedCrash from '../screens/check-in/CheckInPage3formatedCrash';
import CheckInPage3withoutInput from '../screens/check-in/CheckInPage3withoutInput';
import Details from '../screens/check-in/Details';
import Thoughts from '../screens/check-in/Thoughts';
import Challenge from '../screens/check-in/Challenge';
import Reframe from '../screens/check-in/Reframe';
import CognitiveDistortionsPage from '../screens/check-in/CognitiveDistortionsPage';
import ChallengeTips from '../screens/check-in/ChallengeTips';
import ReframeTips from '../screens/check-in/ReframeTips';
import Summary from '../screens/check-in/Summary';
import SummarySample from '../screens/check-in/SummarySample';
import Finish from '../screens/check-in/Finish';
import OtherPage from '../components/OtherPage';
import CircularOther from '../components/CircularOther';
import OtherPageInputKeyIssue from "../util/OtherPageInputKeyIssue"
import OtherPageInputFormatedCrash from "../util/OtherPageInputFormatedCrash"

const Stack = createStackNavigator();

const OtherStack = createStackNavigator();


const CheckInNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="CheckInPage1">
      <Stack.Screen name="CheckInPage1" component={CheckInPage1} options={{ headerShown: false }} />
      <Stack.Screen name="CheckInPage2" component={CheckInPage2} options={{ headerShown: false }} /> 
      {/* <Stack.Screen name="CheckInPage3withoutInput" component={CheckInPage3withoutInput} options={{ headerShown: false }} /> */}
      <Stack.Screen name="CheckInPage3KeyIssue" component={CheckInPage3KeyIssue} options={{ headerShown: false }} />
      <Stack.Screen name="OtherPageInputKeyIssue" component={OtherPageInputKeyIssue} options={{ headerShown: false, presentation:'modal' }}/> 
      {/* <Stack.Screen name="CheckInPage3formatedCrash" component={CheckInPage3formatedCrash} options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="OtherPageInputFormatedCrash" component={OtherPageInputFormatedCrash} options={{ headerShown: false }}/>  */}
      <Stack.Screen name="OtherPage" component={OtherPage} options={{ headerShown: false, presentation:'modal'}}/>      
      <Stack.Screen name="CircularOther" component={CircularOther} options={{ headerShown: false, presentation:'modal'}}/>      
      <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} /> 
      <Stack.Screen name="Thoughts" component={Thoughts} options={{ headerShown: false }} /> 
      <Stack.Screen name="Challenge" component={Challenge} options={{ headerShown: false }} /> 
      <Stack.Screen name="Reframe" component={Reframe} options={{ headerShown: false }} /> 
      <Stack.Screen name="CognitiveDistortionsPage" component={CognitiveDistortionsPage} options={{ headerShown: false, presentation:'modal' }} /> 
      <Stack.Screen name="ChallengeTips" component={ChallengeTips} options={{ headerShown: false, presentation:'modal' }} /> 
      <Stack.Screen name="ReframeTips" component={ReframeTips} options={{ headerShown: false, presentation:'modal' }} /> 
      <Stack.Screen name="Summary" component={Summary} options={{ headerShown: false }} /> 
      <Stack.Screen name="SummarySample" component={SummarySample} options={{ headerShown: false }} /> 
      <Stack.Screen name="Finish" component={Finish} options={{ headerShown: false }} /> 
    </Stack.Navigator>
  );
};

export default CheckInNavigator;

