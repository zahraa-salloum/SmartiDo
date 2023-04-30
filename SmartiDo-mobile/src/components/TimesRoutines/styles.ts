import { StyleSheet } from 'react-native'
import { colors } from '../../constants/constants'

export default StyleSheet.create({
    container: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: "98%",
        height:75,
        borderBottomWidth: 2,
        borderBottomColor: colors.dark_purple,
    },
    label:{
        color: colors.dark_purple,
        fontSize: 16,
        width: "33%",
    },
    text:{
        color: colors.dark_purple,
        textAlign: 'right',
        fontSize: 16, 
        width: "33%",
    },
    button:{ 
        alignItems: "center", 
        justifyContent: "center",
        width: "33%",
    },
    textbtn:{
        color: colors.purple,
    }
})