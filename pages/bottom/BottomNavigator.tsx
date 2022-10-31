import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MainScreen from './mainScreen/mainScreen';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Main"
      screenOptions={{headerShown: false}}
    >
      <BottomTab.Screen
        name="Left"
        component={MainScreen}
        options={{
          title: 'Map',
          tabBarIcon: () => null,
        }}
      />
      <BottomTab.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: 'Home',
          tabBarIcon: () => null,
        }}
      />
      <BottomTab.Screen
        name="Right"
        component={MainScreen}
        options={{
          title: 'Admin',
          tabBarIcon: () => null,
        }}
      />
    </BottomTab.Navigator>
  );
}
