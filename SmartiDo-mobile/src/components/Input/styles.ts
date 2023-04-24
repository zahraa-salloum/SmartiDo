import { StyleSheet } from 'react-native'
import { colors } from '../../constants/palette'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
    label:{
        color: colors.dark_purple, 
        left: -1, 
        },

        input: {
            height: 50,
            width: 300,
            margin: 12,
            borderWidth: 1,
            padding: 10,
          },
})