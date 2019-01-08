import React from 'react'
import { ScrollView, StyleSheet, Image, View } from 'react-native'
import { DrawerItems, SafeAreaView } from 'react-navigation';

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{ uri: 'https://img15.androidappsapk.co/300/e/c/c/com.hmmg.forja.png' }}
          style={{flex: 1, width: 180, height: 180, margin: 15}}
        />
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomDrawerContentComponent
