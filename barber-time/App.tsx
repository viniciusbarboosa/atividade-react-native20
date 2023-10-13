
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import SignIn from './src/pages/SignIn/index';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';

import { AuthProvider} from './src/contents/AuthContext.';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#1d1d2e" barStyle={'light-content'} translucent={false}/>
        <Routes></Routes>
      </AuthProvider> 
    </NavigationContainer>
      
  );
}