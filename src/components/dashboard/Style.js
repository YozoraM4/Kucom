import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
    },
    sankyu: {
        alignItems:"center",
    },
    sankyuText: {
        fontSize: hp(2),
        fontWeight: '500',
        color: '#349b90',
    },
    titleContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#b9d6bc',
        paddingHorizontal: hp(10),
        paddingVertical: hp(10),
        borderRadius: hp(1.5),
        borderColor: '#f2d2a2',
        borderWidth: 0.5,
        marginVertical: hp(5),
    },
    nameText: {
        color: '#fff',
        fontSize: hp(3),
        fontWeight: '700',
    },
    mailText: {
        color: '#fff',
        fontSize: hp(2)
    },
    logoutBtn: {
        backgroundColor: '#f2d2a2',
        paddingHorizontal: hp(8),
        paddingVertical: hp(2),
        borderRadius: hp(5)
    },
    logoutText: {
        color: '#fff',
        fontSize: hp(2),
        fontWeight: '500',
    }
})

export default style;