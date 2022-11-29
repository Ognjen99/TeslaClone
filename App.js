import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import RNBootSplash from "react-native-bootsplash";

import CarsList from './components/CarsList'
import Header from './components/Header'



export default function App() {

  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
})