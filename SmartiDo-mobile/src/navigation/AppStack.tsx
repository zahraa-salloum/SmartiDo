import { createStackNavigator } from "@react-navigation/stack";
import TabStack from "./TabStack";


const AppStack = () => {
   const Stack = createStackNavigator()
  return (
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="Tabs" component={TabStack} />
      </Stack.Navigator>
  );
};

export default AppStack