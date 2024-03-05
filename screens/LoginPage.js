import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const LoginPage = ({navigation}) => {
  const [userDetails, setUserDetails] = useState({
    PhoneNumber: '',
  });

  const [errorMsg, setErrorMsg] = useState({
    PhoneNumber: '',
  });

  const [showError, setShowError] = useState({
    PhoneNumber: false,
  });

  const phoneNumberRegex = /^\d{10}$/;

  const handleButtonClick = () => {
    if (!phoneNumberRegex.test(userDetails.PhoneNumber)) {
      setErrorMsg({...errorMsg, PhoneNumber: 'Enter valid PhoneNumber'});
      setShowError({...showError, PhoneNumber: true});
    } else {
      setShowError({
        ...showError,
        PhoneNumber: false,
      });
    navigation.navigate('Verify')
    }
  };
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            backgroundColor: 'white',
            flex: 0.7,
            justifyContent: 'center',
          }}>
          <Image
            source={require('../assets/images/yeboFinalLogo.png')}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'contain',
              alignSelf: 'center',
              marginVertical: 30,
            }}
          />
          <Text style={{marginHorizontal: 20, marginVertical: 8}}>
            Phone Number
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <Text
              style={{
                width: '20%',
                backgroundColor: 'lightgray',
                height: 45,
                textAlign: 'center',
                textAlignVertical: 'center',
                color: 'black',
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
              }}>
              +91
            </Text>
            <TextInput
              style={{
                width: '80%',
                height: 45,
                backgroundColor: '#EFEFEF',
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                paddingLeft: 10
              }}
              maxLength={10}
              keyboardType='number-pad'
              onChangeText={e => {
                setUserDetails({
                  ...userDetails,
                  PhoneNumber: e,
                });
                setShowError({
                  ...showError,
                  PhoneNumber: false,
                });
              }}
              onBlur={() => {
                if (!phoneNumberRegex.test(userDetails.PhoneNumber)) {
                  setErrorMsg({
                    ...errorMsg,
                    PhoneNumber: 'Enter valid PhoneNumber',
                  });
                  setShowError({
                    ...showError,
                    PhoneNumber: true,
                  });
                }
              }}
              value={userDetails.PhoneNumber}
            />

          </View>
          {showError.PhoneNumber && (
                <Text style={styles.errorText}>{errorMsg.PhoneNumber}</Text>
              )}
          <TouchableOpacity
          onPress={() => {
            handleButtonClick()
          }}
            style={{
              backgroundColor: '#C5197D',
              width: '40%',
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginVertical: 30,
            }}>
            <Text style={{color: 'white'}}>Get Otp</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.32,
            backgroundColor: 'white',
            justifyContent: 'flex-end',
          }}>
          <Image
            source={require('../assets/images/securityGuard.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        alignSelf: 'flex-start',
        marginHorizontal: 20,
      },
});
