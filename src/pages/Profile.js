import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function Profile(){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor: '#DEDEDE'}}>
            <Image style={{ width: 200, height: 200, borderRadius:500, margin:5}} source={require('./../Gui.jpg')}/>
            <Text style={{ color:'#FFFFFF' , fontWeight: 'bold' , fontSize:20}}>Guilherme</Text>
            <Text style={{ color:'#FFFFFF' }}>      18{"\n"}Estudante</Text>
            <View style={styles.views}>
                <Text style={{ fontSize:25 , fontWeight: 'bold'}}>{"\n\t"}Plataformas</Text>
                <Text>{"\t"}Python, Java, React, Reac-Native.</Text>
                <Text style={{ fontSize:25 , fontWeight: 'bold'}}>{"\n\t"}Hobbies</Text>
                <Text>{"\t"}- Assistir desenhos oriundos do oriente{"\n\t"}- Ler quadrinhos de origem coreana{"\n\t"}- Jogar videojogos.</Text>
                <Text style={{ fontSize:25 , fontWeight: 'bold'}}>{"\n\t"}Gostaria de Trabalhar:</Text>
                <Text>{"\t"}- Com grande remuneração{"\n\t"}- Felicidade{"\n\t"}- Ganhando grana{"\n\t"}- Recebendo capital{"\n\t"}- Adquirindo 'money'</Text>
            </View>
        </View>
    )
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
      width: 350,
      height: 430,
      margin: 25,
      //justifyContent: 'space-around',
      alignItems:'flex-start',
      shadowOffset:{width:5,height:5},
      shadowOpacity:0.3,
      shadowColor:"#DEDEDE",
      shadowRadius:4,
      elevation: 5,
      borderRadius: 5,
    }
  });
//<Image source={require('./../pages/Magi.jpg')}/> 
//aqui em imagem vc precisa baixar a imagem e colocar o nome dela em vez de "Teste", alem de colocar o source com o caminho que ela ta

//Criou essa sintaxe, dai vai nas rotas e importa essa pagina pra la
//vai em home e coloca no botao