import { StyleSheet } from 'react-native'
import { colors } from '../../constants/constants'

export default StyleSheet.create({
    container: {
        width: 325,
        marginTop: 16,
    },
    label: {
        color: colors.dark_purple,
        marginBottom: 5,
        marginTop: -15,
        fontSize: 16,
    },
    picker: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        width: '100%',
        borderRadius: 5,
        borderColor: colors.dark_purple,
        borderWidth: 1,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: colors.light_purple,
        borderRadius: 16,
        padding: 16,
        width: '80%',
    },
    option: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.purple,
    },
    optionText: {
        fontSize: 16,
    },
  })