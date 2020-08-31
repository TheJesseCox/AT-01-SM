import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';

//IconAwesome.loadFont(); //acusa o erro: default.loadfont undefined
IconMaterial.loadFont();
IconEntypo.loadFont();

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.views}><IconAwesome name="user-alt" size={30}></IconAwesome><Text>Perfil</Text></View>
      <View style={styles.views}><IconMaterial name="camera-alt" size={30}></IconMaterial><Text>Câmera</Text></View>
      <View style={styles.views}><IconEntypo name="log-out" size={30}></IconEntypo><Text>Sair</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
    margin:0,
  },
  views:{
    backgroundColor: '#FAFAFA',
    width: 300,
    height: 200,
    margin: 15,
    justifyContent: 'center',
    alignItems:'center',
    shadowOffset:{width:0,height:1},
    shadowOpacity:1,
    shadowRadius:4,
    elevation: 5,
    borderRadius: 5,
  },
});
