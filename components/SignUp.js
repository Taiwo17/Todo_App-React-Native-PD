import { Text, View } from 'react-native'
import { useState } from 'react'
import Input from './Input'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../styles/signupstyles'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

export default function SignUp() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [people, setPeople] = useState([])

  const navigation = useNavigation()

  function validateEmail(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    if (reg.test(text) === false) {
      setEmail({ email: text })

      return false
    } else {
      setEmail({ email: text })
    }
  }

  function submitHandle() {
    if (fullName && email && password) {
      const person = { id: new Date().getTime().toString(), fullName, email }
      console.log(person)
      setPeople((people) => {
        return [...people, person]
      })
      navigation.navigate('Login')
      setFullName('')
      setEmail('')
      setPassword('')
    } else {
      console.log('Empty Value')
    }
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView>
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
                Sign Up
              </Text>
              <Text style={[styles.setUpContent, { fontFamily: 'InterMed' }]}>
                Setup your own account
              </Text>
            </View>
            <View>
              {/* {fullName ? :} */}
              <Input
                fullName={fullName}
                setFullName={setFullName}
                email={email}
                validateEmail={validateEmail}
                password={password}
                setPassword={setPassword}
                people={people}
                setPeople={setPeople}
                placeholder={'Placeholder'}
                submitHandle={submitHandle}
              />
            </View>
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
                  New here?{' '}
                </Text>
                <Text
                  style={{
                    fontFamily: 'InterBold',
                    fontSize: 16,
                    color: '#3DA9FC',
                    fontStyle: 'normal',
                  }}
                >
                  Sign Up
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
        <StatusBar style='dark' />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
