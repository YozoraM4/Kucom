import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

//Component
import { useLocal } from '../../hook/useLocal'

//Style
import style from './Style'

const LoginComponent = (props) => {
  const local = useLocal();
  return (
    <View style={style.container}>
      <View style={style.loginContainer}>
        <Text style={style.title}>{local.login}</Text>
      
        <TextInput
          style={style.input}
          placeholder= {local.emailPlaceholder}
          onChangeText={props.onChangeEmail}
          value={props.emailValue}
        />

        <TouchableOpacity onPress={props.next} style={style.btnContainer}>
            <Text style={style.colWhite}>{local.next}</Text>
        </TouchableOpacity>
        <View style={style.goRegiContainer}>
          <Text>{local.noAcc}</Text>
          <TouchableOpacity onPress={props.goRegister}>
              <Text style={style.regiText}>{local.register}</Text>
          </TouchableOpacity>
        </View>
        <View style={style.devContainer}>
          <Text>Developed by</Text>
          <Text style={style.regiText}>Nyan Linn Htet</Text>
        </View>
      </View>
    </View>
  )
}


const RegisterComponent = (props) => {
  const local = useLocal();
    return (
      <View style={style.container}>
      <View style={style.loginContainer}>
        <Text style={style.title}>{local.register}</Text>
      
        <TextInput
          style={style.input}
          placeholder= {local.emailPlaceholder}
          onChangeText={props.onChangeEmail}
          value={props.emailValue}
        />

        <TouchableOpacity onPress={props.next} style={style.btnContainer}>
            <Text style={style.colWhite}>{local.next}</Text>
        </TouchableOpacity>
        <View style={style.goRegiContainer}>
          <Text>{local.haveAcc}</Text>
          <TouchableOpacity onPress={props.goLogin}>
              <Text style={style.regiText}>{local.login}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    )
  }

export {LoginComponent, RegisterComponent}