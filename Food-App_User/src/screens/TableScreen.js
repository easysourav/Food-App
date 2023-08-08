import { StyleSheet, Text, View, StatusBar, TextInput, FlatList, Image, ScrollView, NestableScrollContainer, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import TableHomeHeadNav from '../components/TableHomeHeadNav'
import Table from '../components/Table'
import OfferSlider from '../components/OfferSlider'
import { AntDesign } from '@expo/vector-icons';
import { colors, veg, nonveg } from '../globals/style'

import { firebase } from '../../Firebase/firebaseConfig'
import Cardslider from '../components/Cardslider'
import TableBottomNav from '../components/TableBottomNav'
import { windowHeight } from '../components/TableBottomNav'

const TableScreen = ({ navigation }) => {

    const [foodData, setFoodData] = useState([]);
    const [VegData, setVegData] = useState([]);
    const [NonVegData, setNonVegData] = useState([]);


    const foodRef = firebase.firestore().collection('FoodData');

    useEffect(() => {
        foodRef.onSnapshot(snapshot => {
            setFoodData(snapshot.docs.map(doc => doc.data()))
        }
        )
    }, [])

    useEffect(() => {
        setVegData(foodData.filter((item) => item.foodType == 'veg'))
        setNonVegData(foodData.filter((item) => item.foodType == 'non-veg'))
    }, [foodData])
    



    
    const [search, setSearch] = useState('')

    
    return (
        <View style={styles.container}>
            <StatusBar />

            <TableHomeHeadNav navigation={navigation} />

            <View style={styles.Tablebottomnav}>
                <TableBottomNav navigation={navigation} />
            </View>


            <ScrollView nestedScrollEnabled={true}>
                <Table />
                <Cardslider title={"Non-Veg"} data={NonVegData} navigation={navigation} />
                <Cardslider title={"Veg"} data={VegData} navigation={navigation} />
            </ScrollView>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        backgroundColor: colors.col1,
        
        width: '100%',
        height: '100%',
    },
    searchbox: {
        flexDirection: 'row',
        width: '90%',
        backgroundColor: colors.col1,
        borderRadius: 30,
        alignItems: 'center',
        padding: 10,
        margin: 20,
        elevation: 10,
    },
    input: {
        marginLeft: 10,
        width: '90%',
        fontSize: 18,
        color: colors.text1,
    },
    searchicon: {
        color: colors.text1,
    },
    seacrhresultsouter: {
        width: '100%',
        marginHorizontal: 30,
        height: '100%',
        backgroundColor: colors.col1,
    },
    searchresultsinner: {
        width: '100%',
    },
    searchresult: {
        width: '100%',
        flexDirection: 'row',
        
        padding: 5,
    },
    searchresulttext: {
        marginLeft: 10,
        fontSize: 18,
        color: colors.text1,
    },
    Tablebottomnav: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.col1,
        zIndex: 20,
    }
})
export default TableScreen