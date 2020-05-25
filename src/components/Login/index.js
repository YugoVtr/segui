import React, { Fragment } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Estilo from './Estilo.js';

export default function Login({ navigation }) {
    async function handleSubmit() {   
        navigation.navigate('Map');
    }
    return (
        <Fragment>
        <View>
            <ImageBackground style={Estilo.backgroundImage} source={require("./imagens/ponta.png")} >
            </ImageBackground >
        </View>
        <View >
            <Image style={Estilo.seta1} source={require("./imagens/seta.png")} />
            <Image style={Estilo.contorno} source={require("./imagens/borda.png")} />
        </View>
            <Image style={Estilo.logo} source={require("./imagens/logo_segui.jpg")} />
            <Image style={Estilo.seta2} source={require("./imagens/seta.png")} />
        <View style={Estilo.container}>
            <View>
                <Text style={Estilo.login}>Fazer login</Text>
                <TextInput
                    style={Estilo.input}
                    placeholder="insira seu número de telefone"
                />
                <TextInput
                    style={ Estilo.input}
                    secureTextEntry={true}
                    placeholder="senha"
                />
                <TouchableOpacity onPress={handleSubmit} style={Estilo.botao}>
                    <Text style={Estilo.texto}>login</Text>
                </TouchableOpacity>
            </View>
      </View>
  </Fragment>
    )
}