import React, { useState } from "react";
import { Alert, Modal, Text, TouchableOpacity, View } from "react-native";

//Component
import { useLocal } from "../../hook/useLocal";

//Style
import style from './Style'

const LangModal = (props) => {
  const local = useLocal();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={style.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={style.OverlayContainer}>
          <View style={style.modalView}>
            <View style={style.langList}>
                <TouchableOpacity style={style.title} onPress={()=> props.changeLang('en')}>
                    <Text>English (En)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.title} onPress={()=> props.changeLang('mm')}>
                    <Text>Myanmar (Mm)</Text>
                </TouchableOpacity>
            </View>
            <View style={style.backContainer}>
                <TouchableOpacity
                style={[style.backBtn]}
                onPress={() => setModalVisible(!modalVisible)}
                >
                <Text style={style.textStyle}>{local.back}</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={style.languageContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={style.textStyle}>{props.language}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default LangModal;