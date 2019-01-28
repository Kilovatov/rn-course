import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    smile: {
        marginTop: 50,
        textAlign: "center"
    },
    welcome: {
        fontFamily: "vincHand",
        fontSize: 30,
        textAlign: "center",
        margin: 30
    },
    loginButton: {
        borderColor: "#333333",
        borderWidth: 1,
        color: "#333333",
        borderRadius:2,
        marginBottom: 10
    },
    continueButton: {
        borderColor: "#333333",
        borderWidth: 3,
        color: "#333333",
        borderRadius:2,
        marginTop: 10
    },
    longButton: {
        width: "75%",
        marginLeft: "12.5%",
    },
    shortButton: {
        width: "20%",
        marginLeft: "40%",
    },
    buttonText: {
        textAlign: "center",
        fontFamily: "vincHand",
        fontSize: 20,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        width: "100%",
        borderWidth: 1,
        margin: 2
    },
    iconBefore: {
        alignSelf: "center",
        margin: 3
    },
    iconAfter: {
        alignSelf: "center",
        marginLeft: "auto"
    },
    heading: {
      margin: "2%"
    },
    productName: {
        fontFamily: "vincHand",
        fontSize: 50,
    },
    description: {
        marginLeft: "10%",
        marginRight: "30%",
    },
    productsButton: {
        marginTop: 20,
        width: "25%",
        marginLeft: "10%"
    },
    flexContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },
    productContainer: {
        borderWidth: 1,
    },
    offlineContainer: {
        backgroundColor: '#b52424',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        top: 0
    },
    offlineText: {
        color: '#fff'
    },
    offlineHeader: {
        fontSize: 40,
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        height: "100%",
        width: "100%"
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
});