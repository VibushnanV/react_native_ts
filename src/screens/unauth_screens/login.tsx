/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from './../../constants/colors';
import {AppButton, Input} from '../common_components';
import {Formik} from 'formik';
import * as yup from 'yup';
import {AuthapiRequestParams, loginData} from '../../interfaces/interface';
import { authentication } from '../../services/index';
const Login = ({navigation}) => {
  // Logics Starts here
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid Email')
      .required('User Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Minimum 8 characters required')
      .max(32, 'Maximum 32 characters are required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one special character, and one number.',
      ),
  });
  const [userData, setUserData] = useState();
  const [isPasswordShow, setPasswordVisibility] = useState<boolean>(false);
  const [isLoading, setLoader] = useState<boolean>(false);
  const handleSubmit = (values: loginData) => {
    setLoader(!isLoading);
    
  console.log(values,'/////')
    let reqParams:AuthapiRequestParams<loginData>={
      endPoint:'login',
      body:values,
    }
    console.log(reqParams)
    authentication(reqParams)

  };
  const TogglepasswordVisibility = () => {
    setPasswordVisibility(!isPasswordShow);
  };
  // Logics Ends here

  // UI Starts here
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={loginStyles.loginContainer}>
        <View style={loginStyles.imageContainer}>
          <Image
            source={require('./../../assets/images/loginIcon.png')}
            style={{
              width: '100%',
              height: 120,
              resizeMode: 'contain',
              marginTop: 10,
            }}
          />
          <View style={loginStyles.imageTextContainer}>
            <Text style={[loginStyles.imageTextStyle, {fontSize: 25}]}>
              {' '}
              Welcome Back
            </Text>
            <Text style={[loginStyles.imageTextStyle, {fontSize: 18}]}>
              Enter your credentials to access
            </Text>
          </View>
        </View>
        <Text style={loginStyles.headerTextStyle}>Sign In</Text>
        <View
          style={{
            borderWidth: 1,
            width: 50,
            marginLeft: 25,
            borderColor: Colors.accent2,
          }}
        />
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            values,
            errors,
            isValid = false,
          }) => (
            <View style={loginStyles.formContainer}>
              <Input
                labelName="Email"
                showIcon={true}
                icon_name="mail"
                configuration={{
                  placeholder: 'User Email',
                  inputMode: 'email',
                  placeholderTextColor: Colors.dark4,
                  keyboardType: 'email-address',
                  onChangeText: handleChange('email'),
                  value: values.email,
                  onBlur: handleBlur('email'),
                }}
              />
              {errors.email && (
                <Text style={loginStyles.errorText}>{errors.email}</Text>
              )}
              <Input
                labelName="Password"
                showIcon={true}
                icon_name={isPasswordShow ? 'lock-open' : 'lock'}
                handleIconPress={TogglepasswordVisibility}
                configuration={{
                  placeholder: 'Password',
                  inputMode: 'text',
                  placeholderTextColor: Colors.dark4,
                  keyboardType: 'default',
                  secureTextEntry: !isPasswordShow,
                  onChangeText: handleChange('password'),
                  value: values.password,
                  onBlur: handleBlur('password'),
                }}
              />
              {errors.password && (
                <Text style={loginStyles.errorText}>{errors.password}</Text>
              )}
              <View>
                <TouchableOpacity onPress={()=>{
                  navigation.navigate('forgot')
                }}>
                  <Text style={loginStyles.forgotText}>Forgot Password ?</Text>
                </TouchableOpacity>
              </View>
              <View>
                <AppButton
                  mode="contained"
                  buttonText="Sign In"
                  rippleColor={Colors.blue1}
                  buttonColor={Colors.bgButtonColor}
                  loading={isLoading}
                  disabled={isLoading?isLoading:!isValid}
                  icon={'login'}
                  handleIconPress={handleSubmit}></AppButton>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
};
// UI Ends here
export default Login;

const loginStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imageContainer: {
    minHeight: 250,
    backgroundColor: Colors.brand,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
  },
  imageTextContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  imageTextStyle: {
    textAlign: 'center',
    color: Colors.white,
  },
  formContainer: {
    margin: 20,
    flex: 0.8 / 1,
    gap: 30,
  },
  headerTextStyle: {
    margin: 20,
    fontSize: 30,
    color: Colors.dark4,
  },
  errorText: {
    color: Colors.status_critical,
    fontSize: 15,
  },
  forgotText:{
    color:Colors.blue1,
    fontSize:15,
    textAlign:"right"
  }
});
