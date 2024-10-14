import axios, { AxiosInstance } from 'axios';
import {baseURL,authenticationSecretKey} from './../constants/constants';
import {AuthapiRequestParams} from '../interfaces/interface';
import {encrypt} from './index';
import { encode as btoa} from 'base-64';
const Headers = {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + btoa('learner247@admin.com:SVusimbiu1223AN'),
 };
const apiClient:AxiosInstance=axios.create({baseURL:baseURL,headers:Headers})

const authentication = async <Type>(params: AuthapiRequestParams<Type>) => {
  const {body, endPoint}=params
  const encryptedBody = {encrypted: encrypt(body,authenticationSecretKey)};
  try{
    console.log(endPoint,encryptedBody,'params')
  const response = await apiClient.post(
    `auth/${endPoint}`,
    encryptedBody,
  )
  console.log(response)
  }
  catch(err){
    console.log(err,'////')
  }
};

export {authentication}