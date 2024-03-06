import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import fontFamily from './Styles/fontFamily';

const RecentScreen = () => {
  const [data, setData] = useState([1, 1, 1, 1, 1, 1, 1]);

  const renderItems = (item, index) => {
    return (
      <View style={{marginVertical: 10, marginHorizontal: 20,}}>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            fontFamily: fontFamily.semiBold,
          }}>
          Ticket no. - 00052386-1
        </Text>
        <Text
          style={{
            color: 'black',
            marginTop: 8,
            fontSize: 14,
            fontFamily: fontFamily.regular,
          }}>
          13March 2021 12:30 PM
        </Text>
        <Text
          style={{
            color: 'black',
            marginTop: 8,
            fontSize: 14,
            fontFamily: fontFamily.regular,
          }}>
          debTest
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              marginTop: 8,
              fontSize: 14,
              fontFamily: fontFamily.regular,
            }}>
            OR O5 1234
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(246, 246, 246, 1)'}}>
      <FlatList data={data} renderItem={renderItems} />
    </View>
  );
};

export default RecentScreen;

const styles = StyleSheet.create({});
