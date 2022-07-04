import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Component
import AuthMail from '@src/screens/AuthMail';
import AuthPass from '@src/screens/AuthPass';
import { LoginComponent, RegisterComponent } from '@src/components/auth/MailComponent';
import { LoginPassComponent, RegisterPassComponent } from '@src/components/auth/PassComponent';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthMail" component={AuthMail} />
        <Stack.Screen name="AuthPass" component={AuthPass} />
        <Stack.Screen name="Login" component={LoginComponent} />
        <Stack.Screen name="Register" component={RegisterComponent} />
        <Stack.Screen name="LoginPass" component={LoginPassComponent} />
        <Stack.Screen name="RegisterPass" component={RegisterPassComponent} />
      </Stack.Navigator>
  )
}

export default AuthStack