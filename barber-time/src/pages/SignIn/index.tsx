import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';

import { AuthContext } from '../../contents/AuthContext.'

export default function SignIn(){
    const { signIn } = useContext(AuthContext);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function fazerLogin(){
        if(email === '' || password === ''){
            return;
        }

        await signIn({email,password})
    }

    return(
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/img/logoteste.jpg')}
            />
            
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Digite seu email' style={styles.input}
                placeholderTextColor="#F0F0F0" value={email}
                onChangeText={setEmail}
            />

            <TextInput
                placeholder='Sua Senha' style={styles.input}
                placeholderTextColor="#F0F0F0" secureTextEntry={true} value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={fazerLogin}>
                <Text style={styles.buttonText} >Acessar</Text>
            </TouchableOpacity>
        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#1d1d2e'
    },
    logo:{
        marginBottom:18,
        height:230,
        width:370
    },
    inputContainer:{
        width:'95%',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:32,
        paddingHorizontal:14    
    },
    input:{
        width:'95%',
        height:40,
        backgroundColor:'#101026',
        marginBottom:12,
        borderRadius:4,
        paddingHorizontal:8,
        color:'#fff'
    },
    button:{
        width:'95%',
        height:40,
        backgroundColor:'#3fffa3',
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#101026'
    }
})