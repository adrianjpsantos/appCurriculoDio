import React, {useState} from 'react';
import {View, Text} from 'react-native';
import style from './style.js';
import Icon from 'react-native-vector-icons/Feather';

const Card = ({titulo, children, icon}) => {
  return (
    <View style={style.card}>
      <View style={style.cardHeader}>
        <Icon name={icon} style={style.cardHeaderIcon} />
        <Text style={style.cardHeaderTitle}>{titulo}</Text>
      </View>
      <View style={style.cardContent}>{children}</View>
    </View>
  );
};

const ItemCard = ({text}) => {
  return <Text style={style.textCard}>{text}</Text>;
};

export {ItemCard, Card};
