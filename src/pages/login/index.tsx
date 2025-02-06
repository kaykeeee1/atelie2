import React from "react";

import {
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

import { style } from "./styles";
import logo from '../../assets/new_logo3.png'

export default function Login (){
return(
 <View style={style.container}>
    <View style={style.boxTop}>
        <Image
        source={logo}
        style={style.logo}
        resizeMode="contain"
        />
        <Text style={style.text}>Bem vindo!</Text>
        </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}>Endereço de e-mail:</Text>
                <TextInput/>
                <Text>Endereço de e-mail:</Text>
            </View>
        <View style={style.boxBottom}>
            <Text>Bottom</Text> 
    </View>
 </View>
)

}