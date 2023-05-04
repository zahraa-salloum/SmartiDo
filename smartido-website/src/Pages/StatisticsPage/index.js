import Navbar from "../../components/Navbar";
import Statistic from "../../components/Statistic";
import {useState, useEffect } from "react";
import axios from "axios";
import { numbers } from '../../constants/constants';

const StatisticsPage = () => {
    const [totalCount, setTotalCount] = useState([]);
    const [femaleCount, setFemaleCount] = useState([]);
    const [maleCount, setMaleCount] = useState([]);
    const [blockedEmailCount, setBlockedEmailCount] = useState([]);
    const [regeneratesAvg, setRegeneratesAvg] = useState([]);
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');

    useEffect(() => {
        const getStatistics = () => {
            axios.get(numbers.server +"admin/satistics", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {

                setTotalCount(response.data.total_count)
                setFemaleCount(response.data.female_count)
                setMaleCount(response.data.male_count)
                setBlockedEmailCount(response.data.blocked_email_count)
                setRegeneratesAvg(response.data.regenerates_avg)

            }).catch((err) => {
                    console.log(err);
            })
        }
        getStatistics()
    },[]) 

    return (
        <>
        <Navbar name={name} />
        <div className="container_statistics">
            <Statistic statistic_title={'Total Users Count'} statistic_number={totalCount} />
            <Statistic statistic_title={'Total Female Users Count'} statistic_number={femaleCount} />
            <Statistic statistic_title={'Total Male Users Count'} statistic_number={maleCount} />
            <Statistic statistic_title={'Total Blocked Users'} statistic_number={blockedEmailCount} />
            <Statistic statistic_title={'Regenerates Average'} statistic_number={regeneratesAvg} />
        </div>
        </>
    );
}


export default StatisticsPage;