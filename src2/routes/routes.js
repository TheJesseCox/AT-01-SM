import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { Home } from './../pages/Home';
import { Profile } from './../pages/Profile';
import { Camera } from './../pages/Camera';

const Drawer = createDrawerNavigator();

export function Routes() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="Profile" component={Profile}/>
          <Drawer.Screen name="Camera" component={Camera}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }