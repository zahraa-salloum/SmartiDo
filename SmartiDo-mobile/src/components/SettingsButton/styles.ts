import { StyleSheet } from 'react-native'
import { colors } from '../../constants/constants'

export default StyleSheet.create({
    button:{
        flexDirection: 'row',
        alignItems: "center", 
        justifyContent: 'flex-start',
        width: "98%",
        borderBottomWidth: 1,
        borderBottomColor: colors.dark_purple,
        height:75,
    },

    text: {
        color: colors.purple, 
        fontSize: 20, 
    }
})