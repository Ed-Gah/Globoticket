import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menu}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tickets')}>
        <Text style={styles.buttontext}>Events</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.buttontext}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttontext}
        onPress={() => navigation.navigate('News')}>
        <Text style={styles.button}>News</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
  },
  button: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginRight: 5,
    marginLeft: 5,
  },
  buttontext: {
    fontFamily: 'Ubuntu-R',
  },
});

export default Menu;
