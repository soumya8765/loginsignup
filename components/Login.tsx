
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function login() {
  return (
    <SafeAreaView>
        <View>
        <Image
          source={require("../components/imgs/Ui.png")}
          style={styles.imgStyle}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            marginBottom: 5,
            color: "#5f9ea0",
            

            textAlign:'center',
            
          }}
        >
          Welcome User
        </Text>
      </View>
      <View style={styles.designStyle}>
        <Image
          source={require("../components/imgs/Email.jpg")}
          style={styles.emailStyle}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor={"#777"}
          style={styles.ipStyle}
        />
      </View>
      <View style={styles.designStyle}>
        <Image
          source={require("../components/imgs/password.jpg")}
          style={styles.emailStyle}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={"#777"}
          style={styles.ipStyle}
          secureTextEntry={true}
        />
      </View>
      <View>
        <Text
          style={{
            color: "#5f9ea0",
            fontSize: 20,
            fontWeight: "600",
            paddingHorizontal: 70,
            textAlign:'center'
          }}
        >
          Forgot Password?
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => {}}>
          <Text
            style={{
              width: "100%",
              fontSize: 25,
              fontWeight: "bold",
              backgroundColor: "#5f9ea0",
              color: "#fff",
              borderRadius: 10,
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 15,
          color: "#a52a2a",
        }}
      >Or Log in with...</Text>
       <View style={styles.loginwith}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            borderColor: "#ddd",
            borderWidth: 2,
            borderRadius: 10,
            paddingHorizontal: 30,
            paddingVertical: 10,
          }}
        >
          <Image
            source={require("../components/imgs/google.png")}
            style={styles.option}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            borderColor: "#ddd",
            borderWidth: 2,
            borderRadius: 10,
            paddingHorizontal: 30,
            paddingVertical: 10,
          }}
        >
          <Image
            source={require("../components/imgs/fb.png")}
            style={styles.option}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            borderColor: "#ddd",
            borderWidth: 2,
            borderRadius: 10,
            paddingHorizontal: 30,
            paddingVertical: 10,
          }}
        >
          <Image
            source={require("../components/imgs/ttr.png")}
            style={styles.option}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 30,
        }}
      >
        <Text>New to the app ?</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{ color: "#8a2be2", fontWeight: "700" }}>Register</Text>
        </TouchableOpacity>
      </View>
      










    </SafeAreaView>




  );



  
}

const styles = StyleSheet.create({
  
  imgStyle: {
    width: 300,
    height: 300,
    marginHorizontal:45,
    marginTop:10,
  
  },
  emailStyle: {
    width: 30,
    height: 30,
  },
  designStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderColor:'black',
    margin:8,
    padding:25,


    borderRadius: 10,
    borderWidth: 1,
  },
  ipStyle: {
    fontSize: 15,
    width: "90%",
    height: 50,
    borderRadius: 10,
    color:'#333',
    
    
  },
  option: {
    height: 25,
    width:  25,
  },
  loginwith: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom: 30,
  },
});

