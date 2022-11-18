import { StyleSheet } from 'react-native'

conststyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'fff',     
    },
    label: {
        width: "90%",
        marginTop: 20,
        marginLeft: 20,
        fontSize: 16,
        color: "F92e6a"
    },
    input: {
        width: "90%",
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "F92e6a" ,
        marginLeft: "auto",
        marginRight: "auto"
    },
    buttonNovaTask: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        left: 20, 
        backgroundColor: "#F92e6a",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    iconButton: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    }

});

export default styles