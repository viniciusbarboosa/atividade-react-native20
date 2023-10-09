import React from 'react';

import {View, ActivityIndicator} from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes(){
    //PUXAR DA API USUARIOS
    const isAuthenticated = false ;
    const loading = false;

    if(loading){
        return(
            <View style={{ flex:1,
            backgroundColor:'#1D1D2E',
            justifyContent:'center',
            alignItems:'center'}}
            >
                <ActivityIndicator size={60} color="#FFF"></ActivityIndicator>
            </View>
        )
    }
    return(
        isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes