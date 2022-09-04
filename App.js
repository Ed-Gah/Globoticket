import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import Home from './Home';
import Tickets from './Tickets';
import Contact from './Contact';
import TicketPurchase from './TickePurchase';
import News from './News';

const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="screen">
          <Stack.Screen name="Home" options={{headerShown: false}}>
            {props => <Home {...props} username="Sport Fan" />}
          </Stack.Screen>
          <Stack.Screen
            name="Tickets"
            component={Tickets}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: {fontFamily: 'Ubuntu-R'},
            }}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: {fontFamily: 'Ubuntu-R'},
              headerTitle: 'Contact Us',
            }}
          />
          <Stack.Screen
            name="Purchase"
            component={TicketPurchase}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: {fontFamily: 'Ubuntu-R'},
              headerTitle: 'Purchase Ticket',
            }}
          />
          <Stack.Screen
            name="News"
            component={News}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: {fontFamily: 'Ubuntu-R'},
              headerTitle: 'Latest News',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
