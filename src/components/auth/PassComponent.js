import React, {useState} from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
//Component
import { useLocal } from '../../hook/useLocal'

//Style
import style from './Style'

const LoginPassComponent = (props) => {
const local = useLocal();
const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <View style={style.container}>
      <View style={style.loginContainer}>
        <Text style={style.title}>{local.security}</Text>
        <View>
            <TextInput
            style={style.input}
            placeholder= {local.passwordPlaceholder}
            onChangeText={props.onChangeLPassword}
            value={props.lPasswordValue}
            />
            <View style={style.checkBoxContainer}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text>{local.savePwd}</Text>
            </View>
        </View>
        <TouchableOpacity onPress={props.loginAction} style={style.btnContainer}>
            <Text>{local.login}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const RegisterPassComponent = (props) => {
const local = useLocal();
    return (
      <View style={style.container}>
      <View style={style.loginContainer}>
        <Text style={style.title}>{local.security}</Text>
      
        <TextInput
          style={[style.input, {marginBottom:hp(2.5)}]}
          placeholder= {local.passwordPlaceholder}
          onChangeText={props.onChangeRPassword}
          value={props.rPasswordValue}
        />
        <TextInput
          style={style.input}
          placeholder= {local.conPwdPlaceholder}
          onChangeText={props.onChangeConPass}
          value={props.conPassValue}
        />

        <TouchableOpacity onPress={props.register} style={style.btnContainer}>
            <Text>{local.register}</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }

export {LoginPassComponent, RegisterPassComponent}