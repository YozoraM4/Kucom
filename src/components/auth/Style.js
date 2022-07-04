import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginContainer: {
      height: hp(100),
      alignItems: 'center'
    },
    title: {
      fontSize: hp(4.5),
      fontWeight: '700',
      color: '#349b90',
      marginVertical: hp(12),
    },
    colWhite: {
      color: '#fff'
    },
    input: {
      width: wp(70),
      borderColor: '#b9d6bc',
      borderWidth: hp(0.2),
      borderRadius: hp(1),
      paddingHorizontal: hp(2),
    },
    btnContainer: {
      backgroundColor: '#b9d6bc',
      paddingHorizontal: hp(10),
      paddingVertical: hp(1.5),
      borderRadius: hp(1),
      marginTop: hp(10)
    },
    goRegiContainer:{
      flexDirection: 'row',
      paddingVertical: hp(3),
      marginBottom: hp(25),
      marginVertical: hp(1)
    },
    regiText: {
      color: '#5b95aa',
      paddingHorizontal: hp(1),
    },
    devContainer: {
      width: wp(100),
      justifyContent: 'center',
      flexDirection: 'row',
    },

    //CheckBox
    checkBoxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: hp(2)
    }
});
export default style;