import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";

/* eslint-disable prettier/prettier */
type KeyboardTypeOptions='default'|'number-pad'|'decimal-pad'|'numeric'|'email-address'|'phone-pad'|'url'
type inputMode= 'decimal'| 'email'| 'none'| 'numeric'|'search'|'tel'| 'text'|'url'
type buttonMode='text' | 'outlined'| 'contained' | 'elevated' |'contained-tonal'
export interface TextInputProps {
  inputMode: inputMode;
  placeholder: string;
  placeholderTextColor: string;
  keyboardType: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (field: string) => void;
  onBlur: (field: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}
export interface inputProps {
  labelName: string;
  configuration: TextInputProps;
  showIcon: boolean;
  icon_name?: string;
  handleIconPress?: ()=>void;
}
export interface buttonProps {
  mode: buttonMode;
  buttonText:string;
  buttonColor?: string;
  loading?: boolean;
  disabled?: boolean;
  rippleColor?: string;
  icon?: string;
  textColor?:string
  handleIconPress?: () => void;
}
export interface loginData{
  email:string,
  password:string
}
export interface AuthapiRequestParams<Type>{
endPoint:string
body:Type
}