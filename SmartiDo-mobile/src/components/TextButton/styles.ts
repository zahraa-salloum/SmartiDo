import { StyleSheet } from 'react-native'
import { colors } from '../../constants/palette'

export default StyleSheet.create({
    button:{ 
        alignItems: "center", 
        justifyContent: "center", 
        padding: 20, 
        margin: 30, 
        width: "70%", 
        borderRadius: 5
    },

    text: {
        color: colors.purple, 
        fontWeight: "900",
        fontSize: 16, 
    }
})