import { StyleSheet } from 'react-native'
import { colors } from '../../constants/constants'

export default StyleSheet.create({
    button:{
        alignItems: "center", 
        justifyContent: "center",   
        width: "70%", 
        height: 35,
        marginLeft:50,
        marginRight:50,
        marginTop:20,
        borderRadius: 5,
        
    },
    text: {
        color: colors.dark_purple, 
        fontWeight: "900",
        fontSize: 18, 
    }
})