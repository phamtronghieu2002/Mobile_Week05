import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from "./src/components/Screen1/Styles";
import Screen1 from "./src/components/Screen1/Screen1";
import Screen2 from "./src/components/Screen2/Screen2";
const Stack = createNativeStackNavigator();
export default function App() {
     return (
      <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false
      }}
      >
  

     <Stack.Screen
          name="Screen1"
          component={Screen1}

        />


<Stack.Screen
          name="Screen2"
          component={Screen2}

        />
      </Stack.Navigator>
    </NavigationContainer>
       
     )
}
