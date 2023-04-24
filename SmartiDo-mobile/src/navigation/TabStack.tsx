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
        headerTitleAlign: "center",
        headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: colors.dark_purple,
          },
        tabBarStyle: {
            backgroundColor: colors.light_purple,
            height: 60,
          },
        tabBarActiveTintColor: colors.dark_purple,
        tabBarInactiveTintColor: colors.purple,
        }}>
      <Tabs.Screen
        options={{
            title: "Plans",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/plan_active.png")
                    : require("../../assets/plan_inactive.png")
                }
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
          name="Plan"
          component={PlansScreen}
        />
      <Tabs.Screen
        options={{
            title: "Tasks",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/tasks_active.png")
                    : require("../../assets/tasks_inactive.png")
                }
                style={{ width: 40, height: 40 }}
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