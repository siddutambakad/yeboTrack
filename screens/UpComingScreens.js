import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import fontFamily from './Styles/fontFamily';

const UpComingScreens = () => {
  const [data, setData] = useState([1, 1, 1, 1, 1, 1]);

  const renderItems = (index, item) => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 15,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontFamily: fontFamily.semiBold,
            }}>
            Upcoming
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontFamily: fontFamily.bold,
            }}>
            16-10-2021
          </Text>
        </View>
        <Text style={{color: 'black', marginHorizontal: 20, marginTop: 15,}}>Ticket No.- #000988786</Text>
        <Text style={{color: 'black', marginHorizontal: 20, marginVertical: 8,}}>Distance-2.4 miles</Text>
        <Text style={{color: 'black', marginHorizontal: 20, marginVertical: 8,}}>Time-23 mins</Text>
        <TouchableOpacity
          style={{
            width: '38%',
            height: 55,
            backgroundColor: 'rgba(197, 25, 125, 1)',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 20,
            marginVertical: 15,
            borderRadius: 8
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: fontFamily.regular,
              fontSize: 14,
            }}>
            Cancel Trip
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(246, 246, 246, 1)'}}>
      <FlatList data={data} renderItem={renderItems} />
    </View>
  );
};

export default UpComingScreens;

const styles = StyleSheet.create({});
