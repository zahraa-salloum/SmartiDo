import { createStackNavigator } from "@react-navigation/stack";
import TabStack from "./TabStack";
import ProfileScreen from "../screens/profile";
import { colors } from "../constants/constants";


const AppStack = () => {
   const Stack = createStackNavigator()
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={TabStack} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.light_purple,
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: colors.dark_purple,
          },
          headerTintColor: colors.dark_purple,
        }} />
      </Stack.Navigator>
  );
};

export default AppStack