import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Image, Alert, TouchableOpacity } from 'react-native';

import logo from './assets/bb.png';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.img}>
            <Image
              style={{ width: 130, height: 90 }}
              source={logo}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.text}>CPF/CNPJ</Text>
          </View>
          <View>
            <TextInput
            placeholder='000.000.000-00'
            placeholderTextColor='#A9A9A9'
            style={styles.textInput}
            />
            <View style={styles.containerText}>
              <Text style={styles.text}>Número da Conta</Text>
            </View>
            <TextInput
              placeholder='00000-00'
              placeholderTextColor='#A9A9A9'
              style={styles.textInput}
              />
              <View style={styles.containerText}>
              <Text style={styles.text}>Senha</Text>
            </View>
              <TextInput
                placeholder='Senha de 8 dígitos'
                placeholderTextColor='#A9A9A9'
                style={styles.textInput}
                secureTextEntry={true}
              />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>Alert.alert('Olá', 'Login efetuado com sucesso')}
          >
            <Text style={styles.buttonText}> Entrar </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.newAcc}>
          <Text style={styles.textNewAcc}>Cadastrar nova conta</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#1A5DAD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    marginBottom: 25,
    alignItems: 'center',
  },
  containerText: {
    marginLeft: 8,
    marginTop: 6,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  textInput:{
    width: '95%',
    height:30,
    borderColor: '#000',
    borderWidth:1,
    borderRadius: 13,
    marginTop: 2,
    marginBottom: 3,
    marginLeft: 5,
    paddingLeft: 4,
  },
  alignButton: {
    marginLeft: '25%',
    marginTop: 25,
    width: '50%', 
    height: 35,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFF200',
    width: 70,
    marginLeft: 45,
    marginTop: 25,
    height: 30,
    borderRadius: 13,
  },
  buttonText: {
    marginTop: 3,
    color: '#1A5AAD',
    fontWeight: 'bold',
    fontSize: 16,
  },
  newAcc: {
    marginTop: 10,
  },
  textNewAcc: {
    color: '#fff',
  },
});
