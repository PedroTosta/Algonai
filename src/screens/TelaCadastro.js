import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

function TelaCadastro({ navigation }) {
    return(
      <View style={styles.body}>
          <Text style={styles.titulo}>CADASTRO</Text>
          <TextInput style={styles.input} placeholder="Digite seu nome" placeholderTextColor='#757575'/>
          <TextInput style={styles.input} placeholder="Digite seu e-mail" placeholderTextColor='#757575'/>
          <TextInput style={styles.input} placeholder="*********" placeholderTextColor='#757575'/>
          <TextInput style={styles.input} placeholder="*********" placeholderTextColor='#757575'/>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
            <View>
              <Text style={styles.txt}>CADASTRAR</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.conta} onPress={() => navigation.navigate('Login')}>
            <View>
              <Text style={styles.txt2}>Já possui conta? Faça o Login</Text>
            </View>
          </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
  body: {
    display: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
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
    margin: 5,
    borderRadius: 12
  },
  titulo:{
    color: '#0085AD',
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 20
  },
  btn:{
    width: '80%',
    height: 50,
    backgroundColor: '#0085AD',
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
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});

export default TelaCadastro;