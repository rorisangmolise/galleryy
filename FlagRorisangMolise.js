import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,flag, View , Button } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <View style={styles.container}>
      <View flag style={styles.Items}>
      <View style={styles.Blue}></View>
      <View style={styles.White}></View>
      <View style ={styles.Green}></View>
       
      <TouchableOpacity style={{marginTop:9}}>
        <Text style ={styles.Text}>Lesotho</Text>
      </TouchableOpacity>
      </View>
     
    </View>
    </>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  
  },
  Items:{
    backgroundColor:'silver',
    height:200,
    width:420,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  Blue:{
    backgroundColor: 'blue',
    height: 100,
    width: 330,
  
  },
  White:{
      backgroundColor: 'white',
      height: 100,
      width: 330,
  },
  Green:{
    backgroundColor: 'green',
    height: 100,
    width: 330,
    
  },
  Text:{
    fontSize:20,
    color:'white',
    backgroundColor:'blue',
    paddingHorizontal: 10,
    borderRadius: 6,
  },
});
