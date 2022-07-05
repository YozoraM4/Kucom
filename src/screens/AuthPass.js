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
  const {isHide} = route.params;
  
  //For Login and Register Actions
  const [lPassword, setLPassword] = useState('')
  const [rPassword, setRPassword] = useState('')
  const [conPass, setConPass] = useState('')

  const LoginHandler = () =>{
    const loginPass = {
      password: lPassword,
    }
    try {
        getPassInfo(loginPass)
        getAuth(true)
        console.log("auth :",auth)
    } catch (error) {
      console.log(error)
    }
  }

  const RegisterHandler =()=>{
    const regiPass = {
      password: rPassword,
      conPass: conPass,
    };
    RNSecureKeyStore.set("@user.pass", "regiPass", {accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY})
      .then((res) => {
        getPassInfo(regiPass);
        getAuth(true);
      }, (err) => {
        console.log(err);
      });
  }

  if (isHide) {
    return (
      <View style={style.container}>
        <LoginPassComponent 
          lPasswordValue = {lPassword}
          onChangeLPassword={value => setLPassword(value)}
          login={LoginHandler}
        />
      </View>
    )
  } else {
    return (
      <View style={style.container}>
        <RegisterPassComponent 
          rPasswordValue = {rPassword}
          onChangeRPassword={value => setRPassword(value)}
          conPassValue={conPass}
          onChangeConPass={value => setConPass(value)}
          register={RegisterHandler}
        />
      </View>
    )
  }
}

export default AuthPass