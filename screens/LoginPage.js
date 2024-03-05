import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {APIS} from './ApiUrls/ApiUrls';
import Loader from '../screens/Components/Loader';
import fontFamily from './Styles/fontFamily';

const LoginPage = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const [userDetails, setUserDetails] = useState({
    PhoneNumber: '',
  });

  const [errorMsg, setErrorMsg] = useState({
    PhoneNumber: '',
    ResponseError: '',
  });

  const [showError, setShowError] = useState({
    PhoneNumber: false,
  });

  const postLogin = () => {
    const postLoginData = {
      idVerifyOTP: 0,
      idUser: 0,
      mobileNo: userDetails.PhoneNumber,
      otp: 'string',
      validateOTP: true,
      validateOTPDT: '2024-03-05T06:31:17.871Z',
      otpRemark: 'string',
      loginSource: 0,
    };
    handleLoginWithOtp(postLoginData);
  };

  const handleLoginWithOtp = async postLoginData => {
    setLoader(true);
    try {
      const response = await axios.post(APIS.loginWithOtp, postLoginData);
      const otpResponse = response.data;
      console.log('otp sent', otpResponse);
      navigation.navigate('Verify', {otpResponse: otpResponse});
    } catch (error) {
      if (error.response) {
        if (
          error?.response?.status === 500 ||
          error?.response?.status === 501
        ) {
          Alert.alert('Error', 'Server Error');
        } else {
          setErrorMsg({
            ...errorMsg,
            ResponseError: 'User Not Found',
          });
          console.log(error.response);
        }
      } else {
        Alert.alert('Warning!', 'No internet connection');
      }
    } finally {
      setLoader(false);
    }
  };

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
      postLogin();
    }
  };

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image
            source={require('../assets/images/yeboFinalLogo.png')}
            style={styles.yebologo}
          />
          <Text style={styles.phoneNumberText}>Phone Number</Text>
          <View style={styles.phoneNumberAndTextInput}>
            <Text style={styles.countryText}>+91</Text>
            <TextInput
              style={styles.phoneNumberInput}
              maxLength={10}
              keyboardType="number-pad"
              onChangeText={e => {
                setUserDetails({
                  ...userDetails,
                  PhoneNumber: e,
                });
                setShowError({
                  ...showError,
                  PhoneNumber: false,
                });
                setErrorMsg({...errorMsg, ResponseError: ''});
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
          {errorMsg.ResponseError ? (
            <Text style={styles.errorText}>{errorMsg.ResponseError}</Text>
          ) : null}
          <TouchableOpacity
            onPress={() => {
              handleButtonClick();
            }}
            style={styles.getOtpButton}>
            <Text style={styles.getOtpText}>Generate Otp</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/securityGuard.png')}
            style={styles.bottomImage}
          />
        </View>
        {/* <Modal visible={showModal} animationType="fade" transparent={true}>
          <TouchableWithoutFeedback
            onPress={() => {
              setShowModal(false);
            }}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>
                  {'Check Your Internet Connetion!'}
                </Text>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    setShowModal(false);
                  }}>
                  <Text style={styles.modalButtonText}>Ok</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal> */}
      </View>
      {loader && <Loader />}
    </ScrollView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    backgroundColor: 'white',
    flex: 0.7,
    justifyContent: 'center',
  },
  yebologo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 30,
  },
  phoneNumberText: {
    marginHorizontal: 20,
    marginVertical: 8,
    fontFamily: fontFamily.medium,
    fontSize: 16,
  },
  phoneNumberAndTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  phoneNumberInput: {
    width: '80%',
    height: 45,
    backgroundColor: '#EFEFEF',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    paddingLeft: 10,
  },
  countryText: {
    width: '20%',
    backgroundColor: 'lightgray',
    height: 45,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  getOtpButton: {
    backgroundColor: '#C5197D',
    width: '40%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 30,
    borderRadius: 8,
  },
  getOtpText: {
    color: 'white',
  },
  imageContainer: {
    flex: 0.32,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  bottomImage: {
    width: '100%',
    height: '100%',
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginHorizontal: 20,
  },
  // modalContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#818589cc',
  // },
  // modalContent: {
  //   backgroundColor: '#FFF8F2',
  //   borderRadius: 8,
  //   height: 200,
  //   width: '80%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // modalText: {
  //   color: '#454545',
  //   fontFamily: 'OpenSans-Regular',
  //   fontSize: 16,
  //   fontWeight: '600',
  //   textAlign: 'center',
  // },
  // modalButtonText: {
  //   color: '#FFF8F2',
  //   fontFamily: 'OpenSans-Regular',
  //   fontSize: 16,
  //   fontWeight: '600',
  // },
  // modalButton: {
  //   backgroundColor: '#C5197D',
  //   borderRadius: 3,
  //   width: 100,
  //   height: 30,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   alignSelf: 'center',
  //   marginTop: 20,
  // },
});
