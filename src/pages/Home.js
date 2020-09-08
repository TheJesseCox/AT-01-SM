/*import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export function Home({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Mai Homi</Text>
        <Button title="Vai po zerado" onPress={() => navigation.navigate('zerado')}/>
        <Button title="Vai po Profile" onPress={() => navigation.navigate('Profile')}/>
      </View>
    );
  }*///estrutura base


import * as React from 'react';

import { BackHandler } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';


IconMaterial.loadFont();
IconEntypo.loadFont();

export function Home({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.views}><IconAwesome name="user-alt" size={30} onPress={() => navigation.navigate('Profile')}></IconAwesome><Text>Perfil</Text></View>
        <View style={styles.views}><IconMaterial name="camera-alt" size={30} onPress={() => navigation.navigate('Camera')}></IconMaterial><Text>Câmera</Text></View>
        <View style={styles.views}><IconEntypo name="log-out" size={30} onPress={() => BackHandler.exitApp()}></IconEntypo><Text>Sair</Text></View>
    </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DEDEDE',
      alignItems: 'center',
      justifyContent: 'center',
    },
    views:{
      backgroundColor: '#FAFAFA',
      width: 300,
      height: 200,
      margin: 15,
      justifyContent: 'center',
      alignItems:'center',
      shadowOffset:{width:5,height:5},
      shadowOpacity:0.3,
      shadowColor:"#DEDEDE",
      shadowRadius:4,
      elevation: 5,
      borderRadius: 5,
    },
  });