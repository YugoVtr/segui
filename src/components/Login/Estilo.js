import { StyleSheet, Dimensions } from 'react-native';

const altura = Dimensions.get('window').height;
const largura = Dimensions.get('window').width;

const Estilo = StyleSheet.create({

    texto: {
        color:"#0064af",
        fontSize: 20,
    },

    seta1: {
        width: 10,
        height: 20,
        marginLeft: largura * 0.09,
        marginTop: altura * 0.07,
    },

    seta2: {
        width: 10,
        height: 20,
        marginTop: 5,
        marginLeft: 360,
    },

    botao: {
        marginTop: altura * 0.1,
        marginLeft: largura * 0.5 - 50,
        alignItems: "center",
        borderBottomColor: "#004c9b",
        borderWidth: 1,
        padding: 5,
        width: 100,
        borderRadius: 30,
    },

    backgroundImage: {
        position: "absolute",
        top: 0,
        left: -150,
        justifyContent: "flex-end",
        width: 300,
        height: 400,
    },

    contorno: {
        width: 200,
        height: 200,
        marginLeft: -largura * 0.08,
        marginTop: -altura * 0.065,
    },

    logo: {
        marginLeft: largura * 0.45,
        width: 200,
        height: 61,
    },

    login: {
        color: "#004c9b",
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: largura * 0.05,
        marginTop: -altura * 0.1,
    },

    input: {
        color: "#004c9b",
        fontStyle:"italic",
        marginTop: altura * 0.05,
        marginLeft: largura * 0.05,
        fontSize: 16,
    },

  container: {
      flex: 1,
      marginTop: altura * 0.2,
  },
});


export default Estilo;