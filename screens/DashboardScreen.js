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
import Home_Image from "../assets/home_img.jpeg";

export default function DashboardScreen({ navigation }) {
  return (
    <>
      <StatusBar style="light" />

      
      <Image source={Home_Image} style={styles.banner} />

      <SafeAreaView style={styles.container}>
        <View style={styles.content}>

          </View>

        <View style={styles.footer}>
          <View style={styles.divider}>

          </View>

  <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent:'center',backgroundColor:'#f0f8ff',marginVertical: -440,left:30,width: 350,borderRadius: 30,paddingVertical: 10, paddingHorizontal: 10,shadowRadius:20,shadowColor: 'rgba(0, 0, 0, 0.1)',shadowOpacity:1}}
    onPress={() => navigation.push("Addpatient")}>
    <Text style={{flex:.50,fontSize: 25,color: "black",}}>Add Patient</Text>
    <Image source={require('../assets/add_patient.png')} resizeMode='contain' style={{flex:.2 }} /> 
  </TouchableOpacity>

  <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent:'center',backgroundColor:'#f0f8ff',marginVertical: -80, top:550 ,left:25,width:170 ,borderRadius: 30,paddingVertical: 55, paddingHorizontal: 10,shadowRadius:20,shadowColor: 'rgba(0, 0, 0, 0.1)',shadowOpacity:1}}
    onPress={() => navigation.push("Second")}>
    <Text style={{flex:10,fontSize: 17,color: "black", top:30, left:30}}>OutPatients</Text>
    <Image source={require('../assets/outpatient.png')} resizeMode='contain' style={{flex:2, justifyContent:'center', alignItems:'center',right:58,bottom:20, padding:10, position:'center', position:'relative' }} /> 
  </TouchableOpacity>

  <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent:'center',backgroundColor:'#f0f8ff',marginVertical: -80, top:551.5 ,left:220,width:170 ,borderRadius: 30,paddingVertical: 55, paddingHorizontal: 10,shadowRadius:20,shadowColor: 'rgba(0, 0, 0, 0.1)',shadowOpacity:1}}
    onPress={() => navigation.push("Second")}>
    <Text style={{flex:10,fontSize: 17,color: "black", top:30, left:37}}>InPatients</Text>
    <Image source={require('../assets/inpatient.png')} resizeMode='contain' style={{flex:2,justifyContent:'center', alignItems:'center',right:58,bottom:20, padding:10, position:'center', position:'relative' }} /> 
  </TouchableOpacity>

  <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent:'center',backgroundColor:'#f0f8ff',marginVertical: -80, top:735 ,left:220,width:170 ,borderRadius: 30,paddingVertical: 55, paddingHorizontal: 10,shadowRadius:20,shadowColor: 'rgba(0, 0, 0, 0.1)',shadowOpacity:1}}
    onPress={() => navigation.push("Second")}>
    <Text style={{flex:10,fontSize: 17,color: "black", top:30, left:50}}>Users</Text>
    <Image source={require('../assets/physician.png')} resizeMode='contain' style={{flex:2, justifyContent:'center', alignItems:'center',right:50,bottom:20, padding:10, position:'center', position:'relative' }} /> 
  </TouchableOpacity>

  <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent:'center',backgroundColor:'#f0f8ff',marginVertical: -80, top:730 ,left:25,width:170 ,borderRadius: 30,paddingVertical: 55, paddingHorizontal: 10,shadowRadius:20,shadowColor: 'rgba(0, 0, 0, 0.1)',shadowOpacity:1}}
    onPress={() => navigation.push("Second")}>
    <Text style={{flex:10,fontSize: 17,color: "black", top:30, left:41}}>Medical Records</Text>
    <Image source={require('../assets/records.png')} resizeMode='contain' style={{flex:2, justifyContent:'center', alignItems:'center',right:58,bottom:25, padding:10, position:'center', position:'relative' }} /> 
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
    backgroundColor: "#ffffff",
  },    
    banner: {
    resizeMode: "contain",
    width: "100%",
    height: null,
    aspectRatio: 500 / 400, // Image ratio
    marginVertical: 0,
    backgroundColor: '#fff',
  },


});