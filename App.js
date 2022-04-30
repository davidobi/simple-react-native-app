import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "Transparent"
  }
}

const App = () => {
  return (
   <NavigationContainer theme={theme}>
     <Stack.Navigator screenOptions={{ headerShown: false}} initialRoutename = 'Home'>
       <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="Details" component={Details} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;
