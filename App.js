import HomeScreen from "./screens/HomeScreen";
import DashboardScreen from "./screens/DashboardScreen";
import Addpatient from "./screens/Addpatient";
import ThirdScreen from "./screens/ThirdScreen";
import FourthScreen from "./screens/FourthScreen";
import FifthScreen from "./screens/FifthScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}

        />
        <Stack.Screen 
          name="Dashboard"
          component={DashboardScreen}
          options={{headerShown: true}}
         />
        <Stack.Screen 
          name="Addpatient"
          component={Addpatient}
          options={{headerShown: true}}  
        />
          <Stack.Screen 
          name="Third"
          component={ThirdScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Fourth"
          component={FourthScreen}
          options={{headerShown: false}}
        /> 
        <Stack.Screen 
          name="Fifth"
          component={FifthScreen}
          options={{headerShown: false}} 
        /> 


      </Stack.Navigator>
    </NavigationContainer>
  );
}
