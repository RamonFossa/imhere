import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#131016"
    },
    eventName: {
        marginTop: 48,
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 25
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16,
        fontStyle: 'italic'
    },
    formsContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        marginBottom: 30
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: "#1F1E25",
        color: '#FFF',
        padding: 16,
        fontSize: 18,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius:5
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '#31CF67',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 40
    },
    listEmptyText: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center'
    }
  })