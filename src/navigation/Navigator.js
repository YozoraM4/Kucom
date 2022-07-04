import React,{useState, useEffect} from 'react'
import {View, Text, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Component
import AuthStack from './AuthStack';
import DashboardStack from './DashboardStack'; 
import {AuthContext} from '../context/context';


const Navigator = () => {
  const [lang, setLang] = useState('en');
  const [auth, setAuth] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const [passInfo, setPassInfo] = useState();
  const [splash, setSplash] = useState(true);

  const context = {
    lang,
    auth,
    userInfo,
    passInfo,
    getLang: value => {
      setLang(value);
    },
    getAuth: value => {
      setAuth(value);
    },
    getUserInfo: value => {
      setUserInfo(value);
    },
    getPassInfo: value => {
      setPassInfo(value)
    },
  }

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const userData = RNSecureKeyStore.get('@user.mail');
    if (userData) {
      setAuth(true);
      setUserInfo(userData);
      setTimeout(() => {
        setSplash(false);
      }, 2000);
    } else {
      setAuth(false);
        setTimeout(() => {
          setSplash(false);
        }, 2000);
    }
  };

  if (splash) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image style={{width:wp(80), height:hp(50)}}
          source={require('../../assets/images/logo.png')}
        />
        <Text style={{fontSize: 20, color: '#5b95aa'}}>Nyan Linn Htet</Text>
      </View>
    );
  } else if (auth) {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <DashboardStack />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  } else {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
}

export default Navigator