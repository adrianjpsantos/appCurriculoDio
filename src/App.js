import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Image,
  Linking,
  Alert,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {Card, ItemCard} from './components/Card';

import fotoPerfil from '../src/assets/fotoPerfil.png';

const primaryColor = '#fafafa';
const accentColor = '#5cb874';
const accentColorDark = '#459F5D';
const white = '#ffffff';

const openLink = link => {
  Linking.openURL(link);
};

const App = () => {
  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'linkedin':
        openLink('https://linkedin.com/in/adrianjpsantos');
        break;
      case 'github':
        openLink('https://github.com/adrianjpsantos');
        break;
      case 'facebook':
        openLink('https://facebook.com/adrianjpsantoos');
        break;
    }
  }
  return (
    <SafeAreaView style={style.page}>
      <StatusBar backgroundColor={accentColorDark} barStyle="light-content" />
      <View style={style.header}>
        <Image source={fotoPerfil} style={style.foto} />
        <Text style={style.h1}>Adrian Santos</Text>
        <Text style={style.h2}>Desenvolvedor Mobile</Text>
      </View>

      <View style={style.redes}>
        <TouchableOpacity onPress={() => handleRedeSocial('github')}>
          <Icon name="github" style={style.buttonGithub} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
          <Icon name="linkedin" style={style.buttonLinkedin} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
          <Icon name="facebook" style={style.buttonFacebook} />
        </TouchableOpacity>
      </View>

      <Card icon="briefcase" titulo="Formação Academica">
        <ItemCard text="Desenvolvimento de Sistemas - Etec - 2022/2023" />
        <ItemCard text="Ensino Médio - E.E Fernando Valezi - 2015" />
      </Card>
      <Card icon="book" titulo="Experiencia Profisional">
        <ItemCard text="Fonte Mineral - Auxiliar - 2021/Atual" />
        <ItemCard text="Supermercados Azulão - Repositor - 2020/2021" />
      </Card>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  page: {
    background: primaryColor,
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: accentColor,
    alignItems: 'center',
  },
  redes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: white,
  },
  h1: {
    fontSize: 40,
    fontWeight: 'bold',
    color: white,
    marginTop: 10,
  },
  h2: {
    fontSize: 20,
    fontWeight: '400',
    color: white,
  },
  textSmall: {
    fontSize: 15,
    color: white,
    fontWeight: '400',
  },
  buttonGithub: {
    backgroundColor: 'black',
    color: white,
    borderRadius: 10,
    padding: 10,
    fontSize: 30,
  },
  buttonLinkedin: {
    backgroundColor: '#0077b5',
    color: white,
    borderRadius: 10,
    padding: 10,
    fontSize: 30,
  },
  buttonFacebook: {
    backgroundColor: '#4267B2',
    color: white,
    borderRadius: 10,
    padding: 10,
    fontSize: 30,
  },
});
