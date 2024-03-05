import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import YeboLogo from '../assets/images/yeboFinalLogo.svg';
import Check from '../assets/images/check.svg';
import CheckCircle from '../assets/images/checked.svg';
import CheckBox from '../assets/images/checkBox.svg';

const VerifyOtpScreen = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState(false);
  const [userDetails, setUserDetails] = useState({
    otp: '',
    termsAndCondition: '',
  });

  const [errorMsg, setErrorMsg] = useState({
    otp: '',
    termsAndCondition: '',
  });

  const [showError, setShowError] = useState({
    otp: false,
    termsAndCondition: false,
  });

  const otpRegex = /^\d{4}$/;

  const handleButtonClick = () => {
    if (!otpRegex.test(userDetails.otp)) {
      setErrorMsg({...errorMsg, otp: 'Enter valid otp'});
      setShowError({...showError, otp: true});
    } else if (!selectedOption) {
      setErrorMsg({
        ...errorMsg,
        termsAndCondition: 'Please agree to terms and conditions',
      });
      setShowError({...showError, termsAndCondition: true});
    } else {
      setShowError({
        ...showError,
        otp: false,
        termsAndCondition: false,
      });
      navigation.navigate('Home');
    }
  };
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            alignItems: 'center',
            marginVertical: 20,
            flex: 0.7,
            justifyContent: 'center',
          }}>
          <YeboLogo width={100} height={100} />
          <Text style={{fontSize: 16}}>Verify OTP</Text>
          <View style={{flexDirection: 'row', marginVertical: 20}}>
            <CheckCircle />
            <Text style={styles.otpText}>
              OTP has been sent to your mobile.
            </Text>
          </View>
          <TextInput
            style={{
              backgroundColor: '#EFEFEF',
              width: '70%',
              paddingLeft: 20,
              marginBottom: 15,
            }}
            placeholder="Enter otp"
            placeholderTextColor={'#A9A9A9'}
            maxLength={4}
            keyboardType="number-pad"
            onChangeText={e => {
              setUserDetails({
                ...userDetails,
                otp: e,
              });
              setShowError({
                ...showError,
                otp: false,
              });
            }}
            onBlur={() => {
              if (!otpRegex.test(userDetails.otp)) {
                setErrorMsg({
                  ...errorMsg,
                  otp: 'Enter valid otp',
                });
                setShowError({
                  ...showError,
                  otp: true,
                });
              }
            }}
            value={userDetails.otp}
          />
          {showError.otp && (
            <Text style={styles.errorText}>{errorMsg.otp}</Text>
          )}
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setSelectedOption(!selectedOption);
              setShowError({
                ...showError,
                termsAndCondition: false,
              });
            }}
            style={styles.otpSentButton}>
            <View style={styles.checkbox}>{selectedOption && <Check />}</View>
            <Text style={styles.otpText}>
              I agree to the{' '}
              <Text style={{textDecorationLine: 'underline', fontSize: 16}}>
                terms and conditions
              </Text>
            </Text>
          </TouchableOpacity>
          {showError.termsAndCondition && (
            <Text style={styles.errorText}>{errorMsg.termsAndCondition}</Text>
          )}
          <TouchableOpacity
            style={{
              width: '40%',
              height: 45,
              backgroundColor: '#C5197D',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
              marginTop: 25,
              marginBottom: 15,
            }}>
            <Text style={{color: 'white'}}>Resend OTP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleButtonClick();
            }}
            style={{
              width: '40%',
              height: 45,
              backgroundColor: '#454546',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
              marginTop: 20,
              marginBottom: 15,
            }}>
            <Text style={{color: 'white'}}>Verify OTP</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.34,
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

export default VerifyOtpScreen;

const styles = StyleSheet.create({
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#65276F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpSentButton: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpText: {
    color: '#65276F',
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 8,
  },
  errorText: {
    color: 'red',
    alignSelf: 'center',
  },
});
