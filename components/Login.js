import { View, Text, TextInput, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from '../styles/signupstyles'
import { useNavigation } from '@react-navigation/native'
import Styles from '../styles/inputstyles'
import { useState } from 'react'
import Input from './Input'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function validateEmail(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    if (reg.test(text) === false) {
      setEmail({ email: text })

      return false
    } else {
      setEmail({ email: text })
    }
  }
  const navigation = useNavigation()
  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', paddingTop: 48 }}>
        <View style={styles.textContainer}>
          <Text style={[styles.textContent, { fontFamily: 'Recoleta' }]}>
            Quick ToDo
          </Text>
        </View>
      </View>
      <View style={styles.signUpContainer}>
        <View style={{ marginBottom: 48 }}>
          <Text style={[styles.signupContent, { fontFamily: 'InterBold' }]}>
            Sign In
          </Text>
          <Text style={[styles.setUpContent, { fontFamily: 'InterMed' }]}>
            Welcome back to your account
          </Text>
        </View>
        <View>
          <View style={{ marginBottom: 14 }}>
            <Text style={[Styles.fullNameStyles, { fontFamily: 'InterSEM' }]}>
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={(text) => validateEmail(text)}
              placeholder='Placeholder'
              placeholderTextColor={'#212524'}
              style={[Styles.inputStyles, { fontFamily: 'InterReg' }]}
            />
          </View>
          <View style={{ marginBottom: 24 }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignContent: 'space-between',
                justifyContent: 'space-between',
              }}
            >
              <Text style={[Styles.fullNameStyles, { fontFamily: 'InterSEM' }]}>
                Password
              </Text>
              <Text
                style={{
                  fontFamily: 'InterReg',
                  fontSize: 12,
                  color: '#3DA9FC',
                }}
              >
                Forget Password
              </Text>
            </View>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder='Placeholder'
              placeholderTextColor={'#212524'}
              style={[Styles.inputStyles, { fontFamily: 'InterReg' }]}
              secureTextEntry={true}
            />
          </View>
        </View>
        <Pressable
          style={Styles.buttonStyle}
          onPress={() => navigation.navigate('CreateTask')}
        >
          <Text style={[Styles.text, { fontFamily: 'InterMed' }]}>Sign In</Text>
        </Pressable>
        <View style={styles.hereContent}>
          <Text>
            <Text
              style={{
                fontFamily: 'InterBold',
                fontSize: 16,
                color: '#000000',
                fontStyle: 'normal',
              }}
            >
              Have an Account?{' '}
            </Text>
            <Text
              style={{
                fontFamily: 'InterBold',
                fontSize: 16,
                color: '#3DA9FC',
                fontStyle: 'normal',
              }}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Login
