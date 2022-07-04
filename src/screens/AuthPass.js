import React, {useState, useContext} from 'react'
import { View } from 'react-native'
import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";

//Component
import {LoginPassComponent, RegisterPassComponent} from '@src/components/auth/PassComponent'
import { AuthContext } from '../context/context' 

//Style
import style from '@src/components/auth/Style'


const AuthPass = ({route}) => {
  const {getPassInfo, getAuth} = useContext(AuthContext);
  const hide = route.params;

  //For Login and Register Actions
  const [password, setPassword] = useState('')
  const [conPass, setConPass] = useState('')
  const LoginHandler = () =>{
    const loginPass = {
      password: password,
    }
    try {
          getPassInfo(loginPass)
          getAuth(true)
    } catch (error) {
      
    }
  }

  const RegisterHandler =()=>{
    const regiPass = {
      password: password,
      conPass: conPass,
    };
    try {
      RNSecureKeyStore.set("@user.data", "regiPass", {accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY})
      .then(() => {
          getPassInfo(regiPass)
          getAuth(true)
      }, (err) => {
          console.log(err);
      });
    } catch (error) {
      console.log(error)
    }
  }

  if (hide) {
    return (
      <View style={style.container}>
        <LoginPassComponent 
          passwordValue = {password}
          onChangePassword={value => setPassword(value)}
          login={LoginHandler}
        />
      </View>
    )
  } else {
    return (
      <View style={style.container}>
        <RegisterPassComponent 
          passwordValue = {password}
          onChangePassword={value => setPassword(value)}
          conPassValue={conPass}
          onChangeConPass={value => setConPass(value)}
          register={RegisterHandler}
        />
      </View>
    )
  }
}

export default AuthPass