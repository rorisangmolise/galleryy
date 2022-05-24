import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,flag, View , Button , Image  } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';


export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <View style={styles.container}>
      <View Items style={styles.Items}>
       <TouchableOpacity style={{marginTop:4}}>
        <View style={styles.SmallVS}></View>
         <View style={styles.SmallVS}></View>
          <View style={styles.SmallVS}></View>
           <Text style ={styles.PortalText}> Search here:|</Text>  
            </TouchableOpacity>
        
             <View style={styles.Circle}>
              <View styles={styles.picture}
                source={require("./assets/Profile.jpg")}/>
             </View>
                 <Text style={styles.ProfileText}>Rorisang Molise</Text>
                  <Text style={styles.IDText}>ID: 901013604</Text>
                   <View style={styles.Line}>
                     <View style={styles.NewPhoto}>
                      <TouchableOpacity style={{marginTop:4}}>
                      <Text style ={styles.Text}>Upload Photo</Text>
                       </TouchableOpacity>
                     </View>
                     <View style={styles.Edit}>
                       <TouchableOpacity style={{marginTop:4}}>
                       <Text style ={styles.Text}>Edit Profile</Text>
                        </TouchableOpacity>
                     </View>
          
                    </View>
          
                        <Text style={styles.Semesters}>
                           Semester1        GPA:  2.82          CGPA:  2.82
                        </Text>

          <Text style={styles.SModules}>
            Algebra                                                             C-      
            Business communication                               C+
            Creative and inovation studies                       B-
            Fundamentals of design                                 A-
            Intoduction to computer skills                        C+
            Principles of programming                             C
          
          </Text>
          <Text style={styles.Semesters}>
            Semester2      GPA:  2.82          CGPA:  2.68
          </Text>

          <Text style={styles.SModules}>
          Intoduction to digital graphics                       C+
            Intoduction to multimedia                              B
            Calculus I                                                          PX
            Intoduction to databse                                    B-
            Intoduction to digital imaging                        C-
            Principles of software engeneering              C      

          </Text>

          <Text style={styles.Semesters}>
            Semester3      GPA:  2.19        CGPA:  2.46
          </Text>

          <Text style={styles.SModules}>
            C++ programmiing                                          C+
            Multimedia                                                       B-
            Calculus II                                                         F
            Internet technology                                         C+
            Data com & networking                                  C+
            Principles of web design                                B- 

          </Text>
          
        


      

      </View>
     
    </View>
    
    </>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008B8B',
    alignItems: 'center',
    justifyContent: 'center',
    
  
  },
  Items:{
    backgroundColor:'#008B8B',
    height:200,
    width:420,
    flex:1,
    marginTop: 40,
   
  
  },

  SmallVS:{
    backgroundColor: 'black',
    height: 8,
    width: 8,
    marginStart: 15,
    marginTop: 2,
    borderRadius: 180/2,

  },
  PortalText:{
    fontSize: 20,
    color:'#00BFFF',
    marginStart: 8,
    marginStart: 286,
    marginTop: -30,
    borderRadius: 8,
    backgroundColor: 'black',
    height: 27,
    width: 124,
    

  },
  Circle:{
    backgroundColor: 'white',
    height: 180,
    width: 180,
    marginTop: 30,
    marginStart :120,
    borderRadius: 180/2,
    
  },
  Text:{
    fontSize:18,
    color:'#00BFFF',
    marginStart: 8,
    
    
  },
  
  ProfileText:{
    fontSize:30,
    color:'black',
    marginTop: 3,
    marginStart :110,

  },

  IDText:{
    fontSize:20,
    color:'black',
    marginTop: 3,
    marginStart :145,
    
    

  },

  Edit:{
    backgroundColor: 'black',
    height: 30,
    width: 106,
    borderRadius: 10,
    marginStart: 8,
    marginTop: -30,
  
  },

  NewPhoto:{
    backgroundColor: 'black',
    height: 30,
    width: 120,
    borderRadius: 10,
    marginStart: 290,

  },
  Line:{
    backgroundColor: '#008B8B',
    height: 30,
    width: 450,
    marginTop:40,

  },
  Semesters:{
    fontSize:20,
    color:'#008B8B',
    marginTop: 30,
    marginStart :4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black'
  },

  SModules:{
    fontSize:20,
    color:'black',
    marginStart :4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#00CED1'

  }
  
});
