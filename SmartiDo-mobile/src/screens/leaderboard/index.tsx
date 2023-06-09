import React, { FC, useState } from 'react';
import { FlatList, ImageBackground, SafeAreaView, View } from 'react-native';
import styles from './styles';
import Record from '../../components/Record';
import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import { numbers } from '../../constants/constants';
import { useFocusEffect } from '@react-navigation/native';

interface LeaderboardScreenProps  {}

const LeaderboardScreen: FC<LeaderboardScreenProps> = (props) => {
    const [records, setRecords] = useState([]);

    
    const fetchRecords  = async () => {
        const token = await SecureStore.getItemAsync('token');
        axios.get("http://"+ numbers.server +"/api/v0.0.1/get_records", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
                setRecords(response.data.records)
        })
    }
            
    useFocusEffect(
        React.useCallback(() => {
            fetchRecords();
        }, [])
    );
            
    return (
        <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
            <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.flatlist}
                data={records}
                renderItem={({ item }) => (
                    <Record image={item.picture} name={item.name} score={item.score} />
                )}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ paddingBottom: 30}}
                ItemSeparatorComponent={() => <View style={{height: 4}} />}
            />
            </SafeAreaView>
        </ImageBackground>
    )
}

export default LeaderboardScreen