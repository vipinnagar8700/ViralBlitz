import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Home/Header';
import HomeCompaigns from '../Components/Home/HomeCompaigns';
import HomeCompaignsGraph from '../Components/Home/HomeCompaignsGraph';
import HomeCompaignsList from '../Components/Home/HomeCompaignsList';
import HomeCompaignsListMain from './HomeCompaignsListMain';



const Home = () => {
  return (
    <View >
      <Header />
      <ScrollView style={{ marginBottom: "20%" }} horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <HomeCompaigns />
        <HomeCompaignsGraph />
        <HomeCompaignsList />
        <HomeCompaignsListMain/>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})