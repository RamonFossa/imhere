import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 10
    },
    textContainer: {
        flex: 1,
        backgroundColor: '#1F1E25',
        justifyContent: 'center',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius:5
    },
    name: {
        color: '#FFF',
        fontSize:16,
        marginLeft: 16
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '#E23',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 40
    }
});