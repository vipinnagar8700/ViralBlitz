import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'
import { BarChart } from "react-native-gifted-charts";

const CustomLabel = ({ value, label, frontColor }) => (
  <Text style={{ color: frontColor, fontFamily: 'appfont-bold',fontWeight:900 }}>{label}</Text>
);

const HomeCompaignsGraph = () => {
   
    return (
        <View style={{ paddingHorizontal: 20 ,backgroundColor:'#fff'}}>
            <View style={{ width: Dimensions.get('screen').width * 0.88, height: 170, borderRadius: 10, margin: 2,backgroundColor:'#e8e5fa' ,display: 'flex', flexDirection: 'row',}}>
                <View style={{padding:10,paddingTop:30,paddingLeft:20}}>
                    <Text style={{fontFamily:"appfont-medium",fontSize:16}}>
                    No. of Campaigns ready to blitz
                    </Text>
                    <Text style={{fontFamily:"appfont-bold",fontSize:40,color:"#F59A93"}}>
                    154,252
                    </Text>
                    <Text style={{fontFamily:"appfont-medium",fontSize:16}}>
                    You’ve got it 👋
                    </Text>
                </View>
                <View style={{ position: 'absolute', top: 22, left: 170, right: 0, bottom: 120 ,width:240,gap:1,height:40}}>
                    <BarChart
                        data={[
                            {value: 80, label: 'S', frontColor: '#A99BFD' ,spacing: 5,},
                            {value: 120, label: 'M', frontColor: '#A99BFD',spacing: 5,},
                            {value: 160, label: 'T', frontColor: '#A99BFD',spacing: 5,},
                            {value: 100, label: 'W', frontColor: '#A99BFD',spacing: 5,},
                            {value: 170, label: 'T', frontColor: '#A99BFD',spacing: 5,},
                            {value: 155, label: 'F', frontColor: '#A99BFD',spacing: 5,},
                            {value: 240, label: 'S', frontColor: '#A99BFD',spacing: 5,},
                          ]}
                          barBorderRadius={4}
                          barMarginBottom={10}
                          hideYAxisText
                          yAxisThickness={0}
                          xAxisThickness={0}
                          hideRules
                          height={80}
                          barWidth={10}
                          isAnimated
                          renderLabel={({ value, label, frontColor }) => (
                            <CustomLabel label={label} frontColor={frontColor} />
                          )}
                    />
                </View>
            </View>
        </View>
    )
}

export default HomeCompaignsGraph

const styles = StyleSheet.create({})
