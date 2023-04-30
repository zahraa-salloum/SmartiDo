import { StyleSheet } from 'react-native'
import { colors } from '../../constants/constants'

export default StyleSheet.create({
    container: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: "98%",
        borderBottomWidth: 1,
        gap: 20,
        borderBottomColor: colors.light_purple,
    },
    label:{
        color: colors.dark_purple,
        fontSize: 16,
        marginTop: 20,
        fontWeight: 'bold',
    },
    text:{
        color: colors.dark_purple,
        textAlign: 'center',
        fontSize: 16,
    },
    button:{ 
        alignItems: "center", 
        justifyContent: "center",
    },
    textbtn:{
        color: colors.purple,
    }
})