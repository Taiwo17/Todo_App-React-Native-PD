import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useCallback } from 'react'
import SignUp from './components/SignUp'
import Login from './components/Login'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CreateTask from './components/CreateTask'

export default function App() {
  const [fontLoaded] = useFonts({
    Inter: require('./assets/fonts/Inter-Black.ttf'),
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterMed: require('./assets/fonts/Inter-Medium.ttf'),
    InterSEM: require('./assets/fonts/Inter-SemiBold.ttf'),
    InterReg: require('./assets/fonts/Inter-Regular.ttf'),
    Recoleta: require('./assets/fonts/Recoleta-Bold.ttf'),
  })

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontLoaded])
  if (!fontLoaded) return null

  const Drawer = createDrawerNavigator()

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <Drawer.Navigator>
        <Drawer.Screen
          name='Home'
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name='CreateTask'
          component={CreateTask}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
