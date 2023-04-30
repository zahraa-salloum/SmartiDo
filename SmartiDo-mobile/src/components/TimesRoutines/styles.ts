import { StyleSheet } from 'react-native'
import { colors } from '../../constants/constants'

export default StyleSheet.create({
    container: {
        flex: 0.12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: "98%",
        paddingLeft: 10,
        height:75,
    },
    label:{
        color: colors.dark_purple, 
        padding: 10,
        fontSize: 16,
    },
})