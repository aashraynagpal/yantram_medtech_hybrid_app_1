import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";


export default function AddPatient({ navigation }) {
  return (
    <>
      <StatusBar style="light" />

      


      <SafeAreaView style={styles.container}>
        <View style={styles.content}>

          </View>

        <View style={styles.footer}>
          <View style={styles.divider}>

          </View>

  <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent:'center',backgroundColor:'#f0f8ff',marginVertical:-470 ,left:55,width:300 ,borderRadius: 30,paddingVertical: 20, paddingHorizontal: 20,shadowRadius:20,shadowColor: 'rgba(0, 0, 0, 0.1)',shadowOpacity:1}}
    onPress={() => navigation.push("Third")}>
    <Text style={{flex:20,fontSize: 20,color: "black", left:65}}>OutPatient</Text>
    <Image source={require('../assets/outpatient.png')} resizeMode='contain' style={{flex:5, justifyContent:'center', alignItems:'center',left:-200,bottom:5, padding:10, position:'center', position:'relative' }} /> 
  </TouchableOpacity>

  <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent:'center',backgroundColor:'#f0f8ff',marginVertical:-1 ,top:485,left:55,width:300 ,borderRadius: 30,paddingVertical: 20, paddingHorizontal: 20,shadowRadius:20,shadowColor: 'rgba(0, 0, 0, 0.1)',shadowOpacity:1}}
    onPress={() => navigation.push("Fourth")}>
    <Text style={{flex:20,fontSize: 20,color: "black", left:65}}>InPatient</Text>
    <Image source={require('../assets/inpatient.png')} resizeMode='contain' style={{flex:5, justifyContent:'center', alignItems:'center',left:-200,bottom:5, padding:10, position:'center', position:'relative' }} /> 
  </TouchableOpacity>




</View>
</SafeAreaView>
</>
);
}

const styles = StyleSheet.create({

    container: {
    flex: 41,
    justifyContent: "space-between",
    backgroundColor: '#ffff',
  },    


});