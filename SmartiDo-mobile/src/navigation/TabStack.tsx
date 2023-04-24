import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlansScreen from "../screens/plans";
import TasksScreen from "../screens/tasks";
import { Image } from "react-native";
import { colors } from "../constants/palette";

const TabStack = () => {
    
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: colors.light_purple,
        },
        tabBarStyle: {
            backgroundColor: colors.light_purple,
            height: 60,
          },
        }}>
      <Tabs.Screen
        options={{
            title: "Plans",
            headerTintColor: colors.dark_purple,
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/plan_active.png")
                    : require("../../assets/plan_inactive.png")
                }
                style={{ width: 25, height: 25 }}
              />
            ),
          }}
          name="Plan"
          component={PlansScreen}
        />
      <Tabs.Screen
        options={{
            title: "Tasks",
            headerTintColor: colors.dark_purple,
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/tasks_active.png")
                    : require("../../assets/tasks_inactive.png")
                }
                style={{ width: 25, height: 25 }}
              />
            ),
          }}
          name="Tasks"
          component={TasksScreen}
        />
    </Tabs.Navigator>
  );
};

export default TabStack;