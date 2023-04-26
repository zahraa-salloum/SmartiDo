import React, { FC, useState, useEffect } from 'react'
import { FlatList, ImageBackground, SafeAreaView } from 'react-native'
import styles from './styles'
import Record from '../../components/Record'
import axios from "axios"
import * as SecureStore from 'expo-secure-store'

interface LeaderboardScreenProps  {}

const LeaderboardScreen: FC<LeaderboardScreenProps> = (props) => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        
        const fetchRecords  = async () => {
            const token = await SecureStore.getItemAsync('token');
            axios.get('http://192.168.1.105:8000/api/v0.0.1/get_records', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
                }).then(response => {
                    setRecords(response.data.records)
                })
            }
            fetchRecords();
      }, []);
    return (
        <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
            <SafeAreaView style={styles.container}>
            <FlatList
                data={records}
                renderItem={({ item }) => (
                    <Record image={item.picture} name={item.name} score={item.score} />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            </SafeAreaView>
        </ImageBackground>
    )
}

export default LeaderboardScreen