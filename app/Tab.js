/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = ({icon, isSelected}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Icon name={icon} color={isSelected ? 'black' : 'grey'} size={30} />
  </View>
);
export default Tab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
