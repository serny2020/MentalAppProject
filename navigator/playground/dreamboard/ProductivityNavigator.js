import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductivityToolkitScreen from "../../../screens/playground/productivity/ProductivityToolkitScreen";
import ThreeKsTechniqueScreen from "../../../screens/playground/productivity/ThreeKsTechniqueScreen";
import StepOneScreen from "../../../screens/playground/productivity/StepOneScreen";
import StepTwoScreen from "../../../screens/playground/productivity/StepTwoScreen";
import StepThreeScreen from "../../../screens/playground/productivity/StepThreeScreen";
import EisenhowerMatrix from "../../../screens/playground/productivity/EisenhowerMatrix";
import EisenhowerMatrixInteractive from "../../../screens/playground/productivity/EisenhowerMatrixInteractive";

const Stack = createStackNavigator();

const ProductivityNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ProductivityToolkit">
      <Stack.Screen
        name="ProductivityToolkit"
        component={ProductivityToolkitScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ThreeKsTechniqueScreen"
        component={ThreeKsTechniqueScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EisenhowerMatrix"
        component={EisenhowerMatrix}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EisenhowerMatrixInteractive"
        component={EisenhowerMatrixInteractive}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepOneScreen"
        component={StepOneScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepTwoScreen"
        component={StepTwoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepThreeScreen"
        component={StepThreeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProductivityNavigator;
