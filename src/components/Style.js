import { StyleSheet, Dimensions } from "react-native";

export const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    searchBar: {
        height: 40,
        width: width * 0.9,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 14,
        backgroundColor: 'grey',
        borderRadius: 20
    },
    searchIcon: {
        paddingLeft: 16,
        paddingTop: 1
    },
    searchInput: {
        flex: 1,
        height: 40,
        paddingLeft: 8,
        color: 'white',
        fontSize: 16,
    },
    clearIcon: {
        color: 'white',
        paddingHorizontal: 16,
        paddingTop: 1
    },
    addScoreButton: {
        width: width * 0.9,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black'
    },
    inputFieldContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: 20
    },
    inputField: {
        flex: 1,
        height: 40,
        marginLeft: 16,
        color: 'white',
        fontSize: 16
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10
    },
    button: {
        padding: 10,
        elevation: 2
    },
    textStyleCancel: {
        color: 'black',
        textAlign: 'center'
    },
    textStyleAdd: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: width * 0.8,
        height: height * 0.35,
        backgroundColor: 'white',
        padding: 35,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    },
    rangeContainer: {
        marginTop: 20,
        marginHorizontal: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
    },
    sortButton: {
        width: width * 0.9,
        height: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    sortByButton: {
        marginHorizontal: 40,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        height: 40,
    }
});

export default styles;