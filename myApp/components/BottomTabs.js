import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "../theme/ThemeProvider";

import HomeScreen from "./HomeScreen";
import MyCardsScreen from "./MyCardsScreen";
import StatisticsScreen from "./StatisticsScreen";
import SettingsScreen from "./SettingsScreen";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const { currentTheme } = useTheme(); 

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "My Cards":
              iconName = "card-outline";
              break;
            case "Statistics":
              iconName = "stats-chart-outline";
              break;
            case "Settings":
              iconName = "settings-outline";
              break;
            default:
              iconName = "home-outline";
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex",
            backgroundColor: currentTheme.tabBarBackground, // Apply theme background color
          },
          null,
        ],
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Cards" component={MyCardsScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
