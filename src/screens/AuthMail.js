import React,{useState, useContext} from 'react'
import { View, ToastAndroid } from 'react-native'
import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";

//Component
import {LoginComponent, RegisterComponent} from '@src/components/auth/MailComponent'
import {AuthContext} from '../context/context'
import LangModal from '../components/modal/LangModal'
import {useLocal} from '../hook/useLocal'
//Style
import style from '@src/components/auth/Style'

const AuthMail = ({navigation}) => {
  const {lang, getLang, userInfo, passInfo, getUserInfo} = useContext(AuthContext);
  const [email, setEmail] = useState('')
  console.log(userInfo, passInfo)
  //For Login or Register
  const [hide, setHide] = useState(true);
  const goToRegister =() =>{
    setHide(false);
  };
  const goToLogin =() =>{
    setHide(true);
  };

  //For Language
  const local = useLocal();

  const langHandler = value => {
    getLang(value);
  }

  //For Next Action
  const LoginNextHandler = value =>{
    const loginEmail = {
      email: email,
    };
    try {
      navigation.navigate('AuthPass', {hide: value})
    } catch (error) {
      console.log(error)
    }
  }

  const nextHandler =()=>{
    let token = '1234567890';

    const regiEmail = {
      email: email,
    };
    try {
      RNSecureKeyStore.set("@user.token", "token", {accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY})
      RNSecureKeyStore.set("@user.mail", "regiEmail", {accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY})
    .then(() => {
        getUserInfo(regiEmail, token)
        navigation.navigate('AuthPass')
    }, (err) => {
        console.log(err);
    });
    } catch (error) {
      console.log(error)
    }
  }

  
return (
  <View style={style.container}>
    <LangModal 
      changeLang={value =>langHandler(value)}
      language={lang}
    />
    {hide ? 
        <LoginComponent 
          emailValue = {email}
          onChangeEmail={value => setEmail(value)}
          next={LoginNextHandler}
          goRegister={goToRegister}
        /> 
        : 
        <RegisterComponent 
          emailValue = {email}
          onChangeEmail={value => setEmail(value)}
          next={nextHandler}
          goLogin={goToLogin} 
        />
  }
  </View>
)
}

export default AuthMail