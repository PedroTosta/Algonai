import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

function TelaCadastro({ navigation }) {
    return(
      <View style={styles.body}>
          <Text style={styles.titulo}>Cadastro</Text>
          <Text style={styles.label}>Nome</Text>
          <TextInput style={styles.input} placeholder="Digite seu nome" placeholderTextColor='#FFFFFF'/>
          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.input} placeholder="Digite seu e-mail" placeholderTextColor='#FFFFFF'/>
          <Text style={styles.label}>Senha</Text>
          <TextInput style={styles.input} placeholder="*********" placeholderTextColor='#FFFFFF'/>
          <Text style={styles.label}>Confirmar senha</Text>
          <TextInput style={styles.input} placeholder="*********" placeholderTextColor='#FFFFFF'/>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('')}>
            <View>
              <Text style={styles.txt}>Cadastrar-se</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.conta} onPress={() => navigation.navigate('Login')}>
            <View>
              <Text style={styles.txt}>Já possui conta? Faça o Login</Text>
            </View>
          </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00202E',
  },
  input:{
    borderWidth: 1,
    fontSize: 20,
    borderColor: '#999999',
    color: '#FFFFFF',
    height: 40,
    alignSelf: 'stretch',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5
  },
  titulo:{
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  btn:{
    width: 270,
    height: 40,
    backgroundColor: '#37B7ED',
    borderRadius: 5,
    marginTop: 30,
    padding: 4
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
  }
});

export default TelaCadastro;