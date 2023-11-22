import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/colors'
import { Button, Icon } from 'react-native-paper';
import { buttonProps } from '../../interfaces/interface';
const AppButton: React.FC<buttonProps> = ({
  mode,
  buttonColor=Colors.brand,
  loading=false,
  disabled=false,
  icon,
  textColor=Colors.white,
  handleIconPress,
  buttonText

}) => {
  return (
    <>
      <Button
        mode={mode}
        rippleColor={Colors.blue1}
        buttonColor={buttonColor}
        loading={loading}
        disabled={disabled}
        icon={icon}
        contentStyle={buttonStyles.buttonStyle}
        labelStyle={{fontSize: 20}}
        textColor={textColor}
        onPress={handleIconPress}>
        <Text>{buttonText}</Text>
      </Button>
    </>
  );
};

export default AppButton

const buttonStyles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    flexDirection: 'row-reverse',
  },
});