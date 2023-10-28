import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function TelaInicial({ navigation }) {
    return(
      <View style={styles.body}>
        <Image source={require('../image/algonai-logo.png')} style={styles.img}/>
          <TouchableOpacity style={styles.btnL} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.txt}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnC} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.txt}>CADASTRO</Text>
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
  img:{
    width: 309,
    height: 217
  },
  btnL:{
    width: '80%',
    height: 50,
    backgroundColor: '#00965E',
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnC:{
    width: '80%',
    height: 50,
    backgroundColor: '#0085AD',
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt:{    
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default TelaInicial;