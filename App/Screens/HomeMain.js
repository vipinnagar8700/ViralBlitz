import {  StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Home/Header';
import DaysList from '../Components/Home/DaysList';
import EarningGraph from '../Components/Home/EarningGraph';

import HomeCompaignsListMain from './HomeCompaignsListMain';
import HomeCompaignsList from '../Components/Home/HomeCompaignsList';

const HomeMain = () => {
  return (
    <View>
      <Header />
      <ScrollView style={{ marginBottom: "20%" }} horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <DaysList />
        <EarningGraph />
        <HomeCompaignsList />
        <HomeCompaignsListMain/>
      </ScrollView>
    </View>
  )
}

export default HomeMain

const styles = StyleSheet.create({})