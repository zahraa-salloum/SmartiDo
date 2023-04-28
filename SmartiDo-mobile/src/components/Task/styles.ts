import { StyleSheet } from 'react-native'
import { colors } from '../../constants/constants'

export default StyleSheet.create({
    container: {
        flex: 0.12,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "flex-start",
        width: "98%",
        backgroundColor: colors.light_purple,
        marginBottom: 10,
        borderRadius: 18,
        height: 75,
      },
    checkbox:{
        marginLeft:20,
        overlayColor: colors.purple,
    },
    text:{
        color: colors.dark_purple,
        fontSize: 16,
        marginRight: 47,
    },
})