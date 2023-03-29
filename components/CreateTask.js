import React from 'react'
import { View, Text } from 'react-native'
import OpenMenu from './OpenMenu'
import NewTask from '../components/createtaskstyles'

function CreateTask() {
  function pressMenu() {
    console.log('Open Menu Pressed')
  }
  return (
    <View style={NewTask.taskHeader}>
      <View style={NewTask.menuContainer}>
        <View>
          <Text style={[NewTask.createContent, { fontFamily: 'Recoleta' }]}>
            Quick ToDo
          </Text>
        </View>
        <View>
          <OpenMenu onPress={() => pressMenu()} width={120} height={40} />
        </View>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text>Oluwasekemi</Text>
        <Text>Oluwasekemi2</Text>
      </View>
    </View>
  )
}

export default CreateTask
