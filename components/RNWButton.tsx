import React from 'react'

// @ts-ignore
import { TouchableOpacity, Text } from 'react-native'

export interface RNWButton {}

export default () => {
  return (
    <TouchableOpacity onPress={() => console.log('Clicked')}>
      <Text>BTN</Text>
    </TouchableOpacity>
  )
}
