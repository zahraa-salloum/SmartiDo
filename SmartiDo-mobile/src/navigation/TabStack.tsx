import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlansScreen from "../screens/plans";
import TasksScreen from "../screens/tasks";
import { Image } from "react-native";

const TabStack = () => {
    
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/plan_active.png")
                    : require("../../assets/plan_inactive.png")
                }
                // style={{ width: 25, height: 25 }}
              />
            ),
          }}
          name="Plan"
          component={PlansScreen}
        />
      <Tabs.Screen
        options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/tasks_active.png")
                    : require("../../assets/tasks_inactive.png")
                }
                // style={{ width: 25, height: 25 }}
              />
            ),
          }}
          name="Tas"
          component={TasksScreen}
        />
    </Tabs.Navigator>
  );
};

export default TabStack;