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
      marginTop: 30,
    },
    scrollView:{
        flex:1,
        width: "100%",
    },
    scrollViewContent:{
        paddingBottom: 30,
    }
})