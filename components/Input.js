import { View, Text, TextInput, Pressable } from 'react-native'
import styles from '../styles/inputstyles'
import { useNavigation } from '@react-navigation/native'

function Input({
  placeholder,
  fullName,
  setFullName,
  email,
  validateEmail,
  password,
  setPassword,
  // submitHandle,
}) {
  const navigation = useNavigation()

  return (
    <>
      {/* {fullName ? :} */}
      <View style={{ marginBottom: 14 }}>
        <Text style={[styles.fullNameStyles, { fontFamily: 'InterSEM' }]}>
          Full Name
        </Text>
        <TextInput
          value={fullName}
          onChangeText={(text) => setFullName(text)}
          placeholder={placeholder}
          placeholderTextColor={'#212524'}
          style={[styles.inputStyles, { fontFamily: 'InterReg' }]}
        />
      </View>
      <View style={{ marginBottom: 14 }}>
        <Text style={[styles.fullNameStyles, { fontFamily: 'InterSEM' }]}>
          Email
        </Text>
        <TextInput
          value={email}
          onChangeText={(text) => validateEmail(text)}
          placeholder={placeholder}
          placeholderTextColor={'#212524'}
          style={[styles.inputStyles, { fontFamily: 'InterReg' }]}
        />
      </View>
      <View style={{ marginBottom: 24 }}>
        <View>
          <Text style={[styles.fullNameStyles, { fontFamily: 'InterSEM' }]}>
            Password
          </Text>
        </View>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder={placeholder ? placeholder : null}
          placeholderTextColor={'#212524'}
          style={[styles.inputStyles, { fontFamily: 'InterReg' }]}
          secureTextEntry={true}
        />
      </View>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={[styles.text, { fontFamily: 'InterMed' }]}>Sign Up</Text>
      </Pressable>
    </>
  )
}

export default Input
