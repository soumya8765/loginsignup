import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function register() {
  return (
    <View>
      <View>
        <Image
          source={require('../components/imgs/Ui.png')}
          style={styles.imgStyle}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 1,
            color: '#5f9ea0',
            textAlign: 'center',
          }}>
          Sign up
        </Text>
      </View>
      <View style={styles.designStyle}>
        <Image
          source={require('../components/imgs/Email.jpg')}
          style={styles.emailStyle}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor={'#777'}
          style={styles.ipStyle}
        />
      </View>
      <View style={styles.designStyle}>
        <Image
          source={require('../components/imgs/password.jpg')}
          style={styles.emailStyle}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={'#777'}
          style={styles.ipStyle}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.designStyle}>
        <Image
          source={require('../components/imgs/password.jpg')}
          style={styles.emailStyle}
        />
        <TextInput
          placeholder="Conform Password"
          placeholderTextColor={'#777'}
          style={styles.ipStyle}
          secureTextEntry={true}
        />
      </View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
            color: '#a52a2a',
            fontWeight: 'bold',
          }}>
          By Signing up, you agree to the Terms & Condition
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => {}}>
          <Text
            style={{
              width: '100%',
              fontSize: 25,
              fontWeight: 'bold',
              backgroundColor: '#5f9ea0',
              color: '#fff',
              borderRadius: 10,
              marginBottom: 10,
              textAlign: 'center',
            }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 15,
          color: '#a52a2a',
        }}>
        Or Log in with...
      </Text>
      <View style={styles.optionalLogin}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            borderColor: '#ddd',
            borderWidth: 2,
            borderRadius: 10,
            paddingHorizontal: 30,
            paddingVertical: 10,
          }}>
          <Image
            source={require('../components/imgs/google.png')}
            style={styles.option}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            borderColor: '#ddd',
            borderWidth: 2,
            borderRadius: 10,
            paddingHorizontal: 30,
            paddingVertical: 10,
          }}>
          <Image
            source={require('../components/imgs/fb.png')}
            style={styles.option}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            borderColor: '#ddd',
            borderWidth: 2,
            borderRadius: 10,
            paddingHorizontal: 30,
            paddingVertical: 10,
          }}>
          <Image
            source={require('../components/imgs/ttr.png')}
            style={styles.option}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 30,
        }}>
        <Text>Already have an account ?</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{color: '#8a2be2', fontWeight: '700'}}>login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: 300,
    height: 300,
    marginHorizontal: 45,
    marginTop: 10,
  },
  emailStyle: {
    width: 30,
    height: 30,
  },
  designStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: 'black',
    margin: 8,
    padding: 25,

    borderRadius: 10,
    borderWidth: 1,
  },
  ipStyle: {
    fontSize: 15,
    width: '90%',
    height: 50,
    borderRadius: 10,
    color: '#333',
  },
  option: {
    height: 25,
    width: 25,
  },
  optionalLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
});
