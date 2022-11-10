import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import AdminScreen from './adminScreen/adminScreen';
import MainScreen from './mainScreen/mainScreen';
import SearchScreen from './searchScreen/searchScreen';
import SecondScreen from './secondScreen/secondScreen';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Main"
      screenOptions={{headerShown: false}}
    >
      <BottomTab.Screen
        name="First"
        component={MainScreen}
        options={{
          title: 'Home',
          tabBarIcon: () => null,
        }}
      />
      <BottomTab.Screen
        name="Second"
        component={SecondScreen}
        options={{
          title: 'Recomand',
          tabBarIcon: () => null,
        }}
      />
      <BottomTab.Screen
        name="Third"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: () => null,
        }}
      />
      <BottomTab.Screen
        name="Fourth"
        component={AdminScreen}
        options={{
          title: 'Admin',
          tabBarIcon: () => null,
        }}
      />
    </BottomTab.Navigator>
  );
}
