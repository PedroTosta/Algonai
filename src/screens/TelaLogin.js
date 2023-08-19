import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

function TelaLogin({ navigation }) {
    return(
      <View style={styles.body}>
          <Text style={styles.titulo}>Login</Text>
          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.input} placeholder="Digite seu e-mail" placeholderTextColor='#FFFFFF'/>
          <Text style={styles.label}>Senha</Text>
          <TextInput style={styles.input} placeholder="*********" placeholderTextColor='#FFFFFF'/>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('')}>
            <View>
              <Text style={styles.txt}>Entrar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.conta} onPress={() => navigation.navigate('Cadastro')}>
            <View>
              <Text style={styles.conta}>Ainda não possui conta? Cadastre-se</Text>
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
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 50
  }
});

export default TelaLogin;