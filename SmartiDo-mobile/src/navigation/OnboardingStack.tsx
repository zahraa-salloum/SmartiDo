import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from "../screens/signup";
import LoginScreen from "../screens/login";

const OnboardingStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;