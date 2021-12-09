import { StyleSheet } from "react-native";
export const AppStyles = StyleSheet.create({

    header: {
        padding: 10,
        fontSize: 20,
        color: "black",
        textAlign: "center",
        backgroundColor: "black",
        width: "100%",
        color: "white",
        fontWeight: "bold",
    },

    textInput: {
        borderBottomColor: "black",
        borderBottomWidth: 10,
        margin: 2,
        width: "60%",
    },

    container: {
        display: "flex",
        alignItems: "center",
    },
    btn: {
        marginTop: 10,
        width: "20%",
        borderRadius: 20,
        overflow: "hidden",
    },
});

export const addTodoStyles = StyleSheet.create({
    container: {
        margin: 2,
        padding: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    todoInput: {
        borderBottomColor: "grey",
        borderBottomWidth: 2,
        padding: 2,
        paddingLeft: 2,
        fontSize: 18,

    },
    todoInputFocused: {
        flexGrow: 1,
        backgroundColor: 'lightgrey'
    },

    todoAddBtn: {
        backgroundColor: 'black',
        padding: 10,
        width: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5
    },

    todoAddBtnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export const todoList = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40,
    },

    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        padding: 10
    },

    empty: { color: 'grey' },
    seperator: { borderWidth: 1, margin: 5, borderColor: 'black' }
})