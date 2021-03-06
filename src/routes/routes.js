import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Home } from './../pages/Home';
import { Profile } from './../pages/Profile';
import { CAM } from './../pages/Camera';

const Drawer = createDrawerNavigator();

export function Routes() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerStyle={{backgroundColor: '#FFFFFF',width: 140,}}
        drawerContentOptions={
          {
            activeTintColor: '#e91e63', 
            activeBackgroundColor: '#FFAFAF',
            inactiveTintColor: '#DEDEDE',
            inactiveBackgroundColor: '#C2c2c2',
          }}>
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="Profile" component={Profile}/>
          <Drawer.Screen name="Camera" component={CAM}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }