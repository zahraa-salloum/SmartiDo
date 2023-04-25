import { StyleSheet } from 'react-native'
import { colors } from '../../constants/palette'

export default StyleSheet.create({
    button:{ 
        alignItems: "center", 
        justifyContent: "center",
        marginTop: -20,
        width: "70%", 
        borderRadius: 5
    },

    text: {
        color: colors.purple, 
        fontWeight: "900",
        fontSize: 16, 
    }
})