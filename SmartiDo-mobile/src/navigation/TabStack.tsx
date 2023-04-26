import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlansScreen from "../screens/plans";
import TasksScreen from "../screens/tasks";
import { Image } from "react-native";
import { colors } from "../constants/constants";
import LeaderboardScreen from "../screens/leaderboard";
import CalendarScreen from "../screens/calendar";
import SettingsScreen from "../screens/settings";

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
            title: "Leaderboard",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/leaderboard_active.png")
                    : require("../../assets/leaderboard_inactive.png")
                }
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
          name="Leaderboard"
          component={LeaderboardScreen}
        />
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
            title: "Calendar",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/calendar_active.png")
                    : require("../../assets/calendar_inactive.png")
                }
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
          name="Calendar"
          component={CalendarScreen}
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
      <Tabs.Screen
        options={{
            title: "Settings",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/settings_active.png")
                    : require("../../assets/settings_inactive.png")
                }
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
          name="Settings"
          component={SettingsScreen}
        />
    </Tabs.Navigator>
  );
};

export default TabStack;