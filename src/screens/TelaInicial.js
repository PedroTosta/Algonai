import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function TelaInicial({ navigation }) {
    return(
      <View style={styles.body}>
        <Image source={require('../image/algonai-logo.png')} style={styles.img}/>
          <TouchableOpacity style={styles.btnL} onPress={() => navigation.navigate('Login')}>
            <View>
              <Text style={styles.txt}>LOGIN</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnC} onPress={() => navigation.navigate('Cadastro')}>
            <View>
              <Text style={styles.txt}>CADASTRO</Text>
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
  img:{
    width: 309,
    height: 217
  },
  btnL:{
    width: 270,
    backgroundColor: '#37B7ED',
    borderRadius: 5,
    marginTop: 20,
    padding: 4
  },
  btnC:{
    width: 270,
    backgroundColor: '#1D79A1',
    borderRadius: 5,
    marginTop: 20,
    padding: 4
  },
  txt:{
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});

export default TelaInicial;