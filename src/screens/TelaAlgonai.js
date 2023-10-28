import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ToastAndroid } from 'react-native';

function TelaAlgonai({ navigation }) {
    return(
      <View style={styles.body}>
          <Image source={require('../image/AlgonaiText.png')} style={styles.img}/>
          <TextInput style={styles.input} placeholder="Código do questionário" placeholderTextColor='#757575'/>
          <TouchableOpacity style={styles.btn} onPress={() => ToastAndroid.show('Em desenvolvimento!', ToastAndroid.SHORT)}>
            <View>
              <Text style={styles.txt}>ENTRAR</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btn2} onPress={() => ToastAndroid.show('Em desenvolvimento!', ToastAndroid.SHORT)}>
            <View>
              <Text style={styles.txt}>CRIAR QUESTIONÁRIO</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.boxEstatisticas}>

          </View>
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
    borderRadius: 12
  },
  titulo:{
    color: '#159F6B',
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 20
  },
  btn:{
    width: '90%',
    height: 50,
    backgroundColor: '#159F6B',
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
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
    justifyContent: 'center'
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
    borderRadius: 20
  }
});

export default TelaAlgonai;