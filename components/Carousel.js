import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import { ENTRIES2 } from '../constants/entiers'
import SliderEntry from './SliderEntry'

export default class MainCarousel extends Component {

  state = {
    slider1ActiveSlide: 1
  }

  _renderItemWithParallax ({item, index}, parallaxProps) {
    return (
        <SliderEntry
          data={item}
          even={true}
          parallax={true}
          parallaxProps={parallaxProps}
        />
    );
}

  render () {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.Container}>
          <Carousel
            layout={'stack'} 
            ref={c => this._slider1Ref = c}
            data={ENTRIES2}
            renderItem={this._renderItemWithParallax}
            sliderWidth={Dimensions.get('screen').width}
            itemWidth={Dimensions.get('screen').width}
            hasParallaxImages
            firstItem={1}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.7}
            inactiveSlideShift={20}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
            loop
            loopClonesPerSide={2}
            autoplay
            autoplayDelay={500}
            autoplayInterval={3000}
            onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
          />
          <Pagination
            dotsLength={ENTRIES2.length}
            activeDotIndex={this.state.slider1ActiveSlide}
            containerStyle={styles.paginationContainer}
            dotColor={'#1a1917'}
            dotStyle={styles.paginationDot}
            inactiveDotColor={ '#1a1917'}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            carouselRef={this._slider1Ref}
            tappableDots={!!this._slider1Ref}
          />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    paddingVertical: 10
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2
}
})
