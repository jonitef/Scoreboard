import { StyleSheet, Dimensions } from "react-native";

export const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({

    searchBar: {
        height: 40,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 14,
        backgroundColor: 'grey',
        borderRadius: 20,
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


    sortButtonContainer: {
        width: '90%',
    },
    sortButton: {
        height: 30,
        width: 100,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -4,
    },

    addScoreButton: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10
    },

    scoreBoardItemContainer: {
        width: '100%',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: '80%',
        height: '35%',
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
        elevation: 5,
    },
    modalText: {
        textAlign: 'center'
    },
    rangeContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        marginTop: 20,
    },
    sortByButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        height: 40,
        marginTop: 20,
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
    button: {
        padding: 10,
        marginHorizontal: 10
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
});

export default styles;