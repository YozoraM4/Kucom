import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
const style = StyleSheet.create({
    languageContainer: {
        width: wp(100),
        alignItems: "flex-end",
        paddingVertical: hp(2),
        paddingHorizontal: hp(2),
        marginTop: hp(2)
    },
    OverlayContainer: {
        flex: 1,
        width: wp(100),
        height: hp(100),
        backgroundColor: 'rgba(0,0,0, 0.5)',
        alignItems: "center",
        justifyContent: "center",
    },
    modalView: {
        backgroundColor: '#fff',
        width: wp(70),
        height: hp(20),
        justifyContent: "space-between",
        borderRadius: hp(1.5)
    },
    langList: {
        height:hp(15),
        alignItems: "flex-start",
        justifyContent: 'space-around',
        paddingHorizontal: hp(2)
    },
    title: {
        width: '100%',
        paddingVertical: hp(1),
        paddingHorizontal: hp(1),
        
    },
    textStyle: {
        color: '#349b90',
    },
    backContainer: {
        paddingVertical: hp(1.5),
        alignItems: "center"
    }
})

export default style;