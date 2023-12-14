import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ToastAndroid, ScrollView, SafeAreaView } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

function TelaCriarQuestionario({ navigation }) {
  
    const fill = 75;

    return(
      <View style={styles.body}>
        
      </View>
    );
  }

const styles = StyleSheet.create({
  body: {
    display: 'center',
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginTop: 80
  },
  scrollView:{
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center'
  },
  img: {
    width: 310,
    height: 40,
    margin: 15,
  },
  input:{
    borderWidth: 1,
    fontSize: 20,
    width: '90%',
    borderColor: '#D3D3D3',
    color: '#000000',
    height: 45,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    borderRadius: 12,
  },
  titulo:{
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    margin: 5,
    marginLeft: 20,
    display: 'flex',
  },
  btn:{
    width: '90%',
    height: 50,
    backgroundColor: '#159F6B',
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  txt:{
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  btn2:{
    width: '90%',
    height: 50,
    backgroundColor: '#0085AD',
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  label:{
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 20
  },
  conta:{
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 50
  },
  txt2: {
    color: '#0075FF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  boxEstatisticas: {
    width: "90%",    
    height: 170,
    backgroundColor: '#369FFF',
    margin: 30,
    borderRadius: 20,
    display: 'flex',
    elevation: 5,
  },
  porcentagem:{
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold'
  },
  img2:{
    width: 91,
    height: 97,
    display: 'flex',
    alignSelf: 'flex-end',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 10
  },
  circle:{
    marginLeft: 15,
    display: 'flex',
    flexDirection: 'row',
    flex: 2
  },
  circlep: {
    marginLeft: 5,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    flex: 2
  },
  boxRanking: {
    width: "90%",    
    height: 310,
    backgroundColor: '#369FFF',
    margin: 5,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 150,
    elevation: 5,
  },
  rankingPrimeiro:{
    backgroundColor: '#DBAF00',
    width: '90%',
    display: 'flex',
    margin: 5,
    borderRadius: 10,    
    height: 40,
    flexDirection: 'row'
  },
  textoRanking:{
    color: '#FFFFFF',
    textAlign: 'center',  
    fontSize: 22,
    fontWeight: 'bold',
  },
  rankingSegundo: {
    backgroundColor: '#A8A8A8',
    width: '90%',
    display: 'flex',
    margin: 5,
    borderRadius: 10,
    height: 40,
    flexDirection: 'row'
  },
  rankingTerceiro: {
    backgroundColor: '#B36128',
    width: '90%',
    display: 'flex',
    margin: 5,
    borderRadius: 10,
    height: 40,
    flexDirection: 'row'
  },
  rankingMencao: {
    backgroundColor: '#723E1A',
    width: '90%',
    display: 'flex',
    margin: 5,
    borderRadius: 10,
    height: 40,
    flexDirection: 'row'
  },
  textoMelhada: {
    fontSize: 22
  },
  aMedalha: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'flex-start',
    alignContent: 'center'
  },
  aGanhador:{
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },  
});

export default TelaCriarQuestionario;