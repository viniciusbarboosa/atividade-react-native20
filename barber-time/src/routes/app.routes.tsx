import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboad from '../pages/Dashboard';

const Stack = createNativeStackNavigator();

function AppRoutes(){
    return(
        <Stack.Navigator>
          <Stack.Screen name="Dashboad" component={Dashboad}/>
        </Stack.Navigator>
    )
}

export default AppRoutes;