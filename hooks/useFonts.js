import * as Font from 'expo-font'

export default useFonts = async () => {
  try {
    await Font.loadAsync({
      Inter: require('../assets/fonts/Inter-Black.ttf'),
    })
  } catch (error) {
    console.warn(error)
  }
}
