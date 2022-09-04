import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Menu from './Menu';

const Home = props => {
  const introText =
    'The word hardworking has been the frequent one in my dictionary lately, work hard again because sooner than later you will enjoy the fruits of your labor';

  return (
    <View style={styles.container}>
      <Image style={styles.globalogo} source={require('./Images/logo.jpeg')} />
      <Text style={styles.title}>Welcome to Global Ticket</Text>
      <Text style={styles.subtitle}>{props.username}</Text>
      <Image style={styles.heroimage} source={require('./Images/image7.jpeg')} />
      <View style={styles.textcontainer}>
        <Text style={styles.content}>{introText}</Text>
      </View>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
  },
  textcontainer: {
    padding: 20,
  },
  globalogo: {
    height: 150,
    width: 150,
  },
  title: {
    fontFamily: 'Ubuntu-R',
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  subtitle: {
    paddingTop: 10,
    fontFamily: 'Ubuntu-RI',
  },
  content: {
    fontFamily: 'Ubuntu-LI',
    fontWeight: '300',
  },
  heroimage: {
    height: 170,
    width: '100%',
  },
  menu: {
    position: 'absolute',
    bottom: 10,
  },
});
export default Home;
