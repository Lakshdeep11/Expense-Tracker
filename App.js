import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './Screens/Auth';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './Screens/SignIn';
import DashBoard from './Screens/Dashboard';
import AddTransaction from './Screens/AddTransaction';
import Trancactions from './Screens/Transactions';



const Stack = createStackNavigator()


export default function App() {
  return (
    <Auth>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn" screenOptions={{
          headerStyle: {
            backgroundColor: "#FF7C4E", 
          },
          headerTintColor: "white", 
          headerTitleStyle: {
            fontWeight: "bold",
            color: 'white'
          },
        }}>
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard" component={DashBoard} options={{ headerShown: false }} />
      <Stack.Screen name="AddTransaction" component={AddTransaction} />
      <Stack.Screen name="TransactionDetails" component={Trancactions} />
      </Stack.Navigator>
    
    </NavigationContainer>
  </Auth>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
