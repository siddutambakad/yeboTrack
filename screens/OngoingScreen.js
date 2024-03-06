import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Cars from '../assets/images/cars.svg';
import fontFamily from './Styles/fontFamily';

const OngoingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Cars width={80} height={80} />
      </View>
      {/*slot starts */}
      <View style={styles.slotAndDateText}>
        <Text style={styles.slottext}>SLOT# : N/A</Text>
        <Text style={styles.dateText}>16-10-2021</Text>
      </View>
      {/* ticket details*/}
      <View style={styles.ticketNodetails}>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontFamily: fontFamily.semiBold,
            }}>
            Ticket No
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontFamily: fontFamily.semiBold,
            }}>
            Trip Type
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontFamily: fontFamily.semiBold,
            }}>
            No of people
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontFamily: fontFamily.semiBold,
            }}>
            Distance
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontFamily: fontFamily.semiBold,
            }}>
            Time
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontFamily: fontFamily.semiBold,
            }}>
            #000988786
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontFamily: fontFamily.semiBold,
            }}>
            Roster
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontFamily: fontFamily.semiBold,
            }}>
            6
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontFamily: fontFamily.semiBold,
            }}>
            2.4 miles
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontFamily: fontFamily.semiBold,
            }}>
            23mins
          </Text>
        </View>
      </View>
      {/* total amount */}
      <View style={styles.totalFare}>
        <Text style={styles.totalFareText}>Total Fare</Text>
        <Text style={styles.totalAmountText}>110$</Text>
      </View>
      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelTripText}>Cancel Trip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OngoingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(246, 246, 246, 1)',
  },
  imageContainer: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'rgba(229, 229, 229, 1)',
    width: 105,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  slotAndDateText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  slottext: {
    color: 'black',
    fontSize: 16,
  },
  dateText: {
    color: 'black',
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
  totalFare: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  totalFareText: {
    color: 'rgba(102, 39, 110, 1)',
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
  },
  totalAmountText: {
    color: 'rgba(102, 39, 110, 1)',
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    paddingRight: 55,
  },
  cancelButton: {
    width: '40%',
    height: 50,
    backgroundColor: 'rgba(197, 25, 125, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    alignSelf: 'center',
    borderRadius: 8,
  },
  cancelTripText: {
    color: 'white',
  },
  ticketNodetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10,
  },
});
