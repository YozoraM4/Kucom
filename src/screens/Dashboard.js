import { View, Text } from 'react-native'
import React,{useContext} from 'react'
import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";

//Component
import Component from '../components/dashboard/Component'
import { AuthContext } from '../context/context'

//Style
import stle from '../components/dashboard/Style'

const Dashboard = () => {
  const {passInfo, getAuth, userInfo} = useContext(AuthContext);
  console.log(userInfo, passInfo)
  const logoutHandler= () => {
    RNSecureKeyStore.remove("@user.token")
    .then(() => {
      getAuth(false)
      console.log(userInfo)
    }, (err) => {
      console.log(err);
    });
  }
  return (
    <View style={stle.container}>
      <Component
        data={userInfo}
        logout={logoutHandler}
      />
    </View>
  )
}

export default Dashboard