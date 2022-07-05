import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

//Component
import {useLocal} from '../../hook/useLocal'

//Style
import style from './Style'

const Component = (props) => {
  const local = useLocal()
  return (
    <View style={style.container}>
      <View style={style.sankyu}>
          <Text style={style.sankyuText}>{local.sankyu}</Text>
          <View style={style.titleContainer}>
              <Text style={style.nameText}>Nyan Linn Htet</Text>
              <Text style={style.mailText}>{props.mailData.email}</Text>
          </View>
      </View>
      <View>
          <TouchableOpacity style={style.logoutBtn} onPress={props.logout}>
              <Text style={style.logoutText}>{local.logout}</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Component