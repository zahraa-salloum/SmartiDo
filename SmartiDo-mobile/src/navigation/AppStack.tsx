import { createStackNavigator } from "@react-navigation/stack";
import TabStack from "./TabStack";
import ProfileScreen from "../screens/profile";


const AppStack = () => {
   const Stack = createStackNavigator()
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={TabStack} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
  );
};

export default AppStack