import { StyleSheet } from 'react-native'
import { colors } from '../../constants/constants'

export default StyleSheet.create({
    containerBackground: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: "90%",
    },
    title:{
        color: colors.dark_purple,
        fontSize: 32,
        fontWeight: 'bold',
        padding: 30,
        paddingTop:50,
    }
})