import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from "../screens/signup";
import LoginScreen from "../screens/login";

const OnboardingStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;