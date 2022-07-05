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
  const {lang, getLang, getUserInfo} = useContext(AuthContext);
  const [email, setEmail] = useState('')

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
    RNSecureKeyStore.set("@user.lang", "value", {accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY})
      .then(() => {    
        getLang(value);
        console.log('language stored')
      }, (err) => {
        console.log(err);
      });
  }

  //For Next Action
  const LoginNextHandler = () =>{
    const loginEmail = {
      email: email,
    };
    const mailData = RNSecureKeyStore.get("@user.mail").then(() => {
        if (mailData === loginEmail) {
          navigation.navigate('AuthPass', {isHide: false})
          console.log('user exit :', loginEmail)
        } else {
          console.log("user does not exit")
        };
      }, (err) => {
        console.log(err);
      });
  }

  const nextHandler =()=>{
    const regiEmail = {
      email: email,
    };

    RNSecureKeyStore.set("@user.mail", "regiEmail", {accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY})
      .then((res) => {
        navigation.navigate('AuthPass', {isHide: false})
        getUserInfo(regiEmail)
        console.log(regiEmail)
      }, (err) => {
        console.log(err);
      });
  }

  
return (
  <View style={style.container}>
    <LangModal 
      changeLang={value =>langHandler(value)}
      language={lang}
    />
    {hide ? 
        <LoginComponent 
          loginEmailValue = {email}
          onChangeEmail={value => setEmail(value)}
          next={LoginNextHandler}
          goRegister={goToRegister}
        /> 
        : 
        <RegisterComponent 
          registerEmailValue = {email}
          onChangeEmail={value => setEmail(value)}
          next={nextHandler}
          goLogin={goToLogin} 
        />
  }
  </View>
)
}

export default AuthMail