import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';

const Stack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
// COLOCAR UMA NAVIBAR PADRAO TIRADNO O OPTIONS <Stack.Screen name="SignIn" component={SignIn}/>
export default AuthRoutes;