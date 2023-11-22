/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Colors } from './../../constants/colors';
import {inputProps} from './../../interfaces/interface';
import Entypo from 'react-native-vector-icons/Entypo'
// import PropTypes from 'prop-types';
const Input:React.FC<inputProps> = ({labelName,configuration,showIcon=false,icon_name,handleIconPress}) => {
  return (
    <View>
        {labelName && <Text style={TextBoxStyles.labelStyle}>{labelName}</Text>}
        {showIcon && 
        <View style={TextBoxStyles.iconStyle}>
          <Entypo
           name={icon_name}
             size={25}
           color={Colors.dark4}
           onPress={handleIconPress}
           />
        </View>
        }
         <TextInput style={TextBoxStyles.textInput} {...configuration}/>
      
    </View>
  );
};
// Input.propTypes = {
//     labelName:PropTypes.string,
//     config:PropTypes.object,
// };
export default Input;

const TextBoxStyles = StyleSheet.create({
    textInput:{
        borderWidth:2,
        borderRadius:20,
        backgroundColor:Colors.white,
        borderColor:Colors.light1,
        paddingVertical:20,
        paddingHorizontal:15,
      },
      labelStyle:{
        fontSize:18,
        marginBottom:8,
        color:Colors.lightblue,
      },
      iconStyle:{
position:'absolute',
top:55,zIndex:1,right:20
      }
});
