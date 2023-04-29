import { StyleSheet } from 'react-native'
import { colors } from '../../constants/constants'

export default StyleSheet.create({
    container: {
        flex: 0.12,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        width: "98%",
        borderColor: colors.dark_purple,
        borderWidth: 2,
        height:75,
      },
      image: {
        width: 100,
        height: 100,
        borderRadius: 25,
        borderColor: colors.light_purple,
        borderWidth: 1,
        marginRight: 10,
        marginLeft: 10,
    },
})