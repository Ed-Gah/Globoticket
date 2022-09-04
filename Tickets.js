import React from 'react';
import {StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import globoTickets from './TicketDB';

const Tickets = ({navigation}) => {
    const ticketItem = ({item}) => {
  return (
    <View style={styles.tickets}>
      <View>
        <Image style={styles.img} source={item.image} />
      </View>
      <View>
        <Text style={styles.tickettle}>{item.event}</Text>
        <Text style={styles.ticketshortdes}>{item.shortDescription}</Text>
        <Text
          style={styles.ticketdescription}
          numberOfLines={2}
          ellipsizeMode="tail">
          {item.description}
        </Text>
        <Text style={styles.ticketshortdes}>{item.price}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Purchase', {tickId: item.eventId})}
            style={styles.button}
        >
        <Text style={styles.ticketbutton}>Get Ticket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
    }

    return(
        <View style={styles.container}>
            <FlatList  
                data={globoTickets}
                renderItem={ticketItem}
                keyExtractor={(item) => item.eventId}
            />
        </View>
    )
};

export default Tickets;

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 15,
    },
    tickets: {
        flexDirection: 'column',
    },
    img: {
        height: 180,
        width: '100%',
    },
    tickettle: {
        fontFamily: 'Ubuntu-R',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    ticketshortdes: {
        fontFamily: 'Ubuntu-L',
        fontWeight: '600',
        textAlign: 'center',
        paddingTop: 5,
    },
    ticketdescription: {
        fontFamily: 'Ubuntu-L',
        fontWeight: '600',
        padding: 15,
    },
    ticketbutton: {
        fontFamily: 'Ubuntu-R',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 15,
    },
})
