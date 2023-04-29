import { StyleSheet } from 'react-native'
import { colors } from '../../constants/constants'

export default StyleSheet.create({
    button:{
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: "center", 
        justifyContent: 'flex-start',
        width: "98%",
        borderBottomWidth: 2,
        borderBottomColor: colors.dark_purple,
    },

    text: {
        color: colors.purple, 
        fontSize: 20, 
    }
})